import { defineStore } from "pinia"

export const useBlockStore = defineStore("app", () => {
  const { data: blockedUrls } = useBrowserSyncStorage<
    Array<{
      url: string
      isBlocked: boolean
    }>
  >("blockedUrls", [])

  async function toggleBlock(urls: string | string[]) {
    const urlArray = Array.isArray(urls) ? urls : [urls]
    urlArray.forEach((url) => {
      const entry = blockedUrls.value.find((item) => item.url === url)
      if (entry) {
        entry.isBlocked = !entry.isBlocked
      }
    })
  }

  async function addUrl(newUrls: string | string[]) {
    const urlArray = Array.isArray(newUrls) ? newUrls : [newUrls]
    urlArray.forEach((url) => {
      if (!blockedUrls.value.some((item) => item.url === url)) {
        blockedUrls.value.push({ url, isBlocked: true })
      }
    })
  }

  async function removeUrl(urlsToRemove: string | string[]) {
    const urlArray = Array.isArray(urlsToRemove) ? urlsToRemove : [urlsToRemove]
    blockedUrls.value = blockedUrls.value.filter(
      (item) => !urlArray.includes(item.url),
    )
  }

  return {
    blockedUrls,
    toggleBlock,
    addUrl,
    removeUrl,
  }
})
