// Sample code if using extensionpay.com
// import { extPay } from '@/utils/payment/extPay'
// extPay.startBackground()

chrome.runtime.onInstalled.addListener(async (opt) => {
  // Check if reason is install or update. Eg: opt.reason === 'install' // If extension is installed.
  // opt.reason === 'update' // If extension is updated.
  if (opt.reason === "install") {
    await chrome.storage.local.clear()

    chrome.tabs.create({
      active: true,
      // Open the setup page and append `?type=install` to the URL so frontend
      // can know if we need to show the install page or update page.
      url: chrome.runtime.getURL("src/ui/setup/index.html#/setup/install"),
    })
  }

  if (opt.reason === "update") {
    chrome.tabs.create({
      active: true,
      url: chrome.runtime.getURL("src/ui/setup/index.html#/setup/update"),
    })
  }
})

// Helper function to check and block URLs
async function checkAndBlockUrl(tabId: number) {
  const tab = await chrome.tabs.get(tabId)
  if (tab.url) {
    const { blockedUrls = [] } = await chrome.storage.sync.get("blockedUrls")
    const currentUrl = new URL(tab.url)
    const blockedUrl = blockedUrls.find((item: { url: string }) => {
      try {
        const itemUrl = new URL(item.url)
        if (currentUrl.hostname) {
          const normalizeHost = (host: string) => host.replace(/^www\./i, "")
          return (
            normalizeHost(currentUrl.hostname) ===
            normalizeHost(itemUrl.hostname)
          )
        } else {
          return false
        }
      } catch {
        return false
      }
    })
    if (blockedUrl && blockedUrl.isBlocked === true) {
      chrome.tabs.update(tabId, {
        url: chrome.runtime.getURL("src/ui/blocked/index.html"),
      })
    }
  }
}

// Listen for tab activation
chrome.tabs.onActivated.addListener(async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
  if (tabs.length > 0) {
    await checkAndBlockUrl(tabs[0].id as number)
  }
})

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  if (changeInfo.status === "complete") {
    await checkAndBlockUrl(tabId)
  }
})

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}

console.info("Zen by Mugai background script")

export {}
