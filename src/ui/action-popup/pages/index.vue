<script setup lang="ts">
import { useBlockStore } from "@/stores/block.store"
const blockStore = useBlockStore()
const { blockedUrls } = storeToRefs(blockStore)
let url = ref("")
// Add save functionality
const showConfirmation = ref(false)
const saveUrl = () => {
  if (!url.value.startsWith("http://") && !url.value.startsWith("https://")) {
    url.value = "https://" + url.value
  }
  blockStore.addUrl(url.value)
  showConfirmation.value = true
  url.value = ""
  setTimeout(() => {
    showConfirmation.value = false
  }, 2000)
}
</script>

<template>
  <div>
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1>Be mindful with your time</h1>
          <p>
            This extension is designed to help you stay focused and productive
            by blocking distracting websites and providing productivity tools.
          </p>
          <p>
            Enter the URL of the website you want to block and click "Save". The
            website will be blocked from your browser.
          </p>
          <div class="flex gap-2 justify-center mb-4">
            <input
              v-model="url"
              type="text"
              class="input input-primary"
              placeholder="Enter website URL"
            />
            <button
              class="btn btn-primary"
              @click="saveUrl"
            >
              Save
            </button>
          </div>
          <div
            v-if="showConfirmation"
            class="text-green-600 mb-4"
          >
            Settings saved successfully!
          </div>
          <RouterLink
            to="/action-popup/block-website"
            class="btn btn-link"
          >
            Block Website
          </RouterLink>

          <a
            class="btn btn-link"
            href="https://github.com/mubaidr/vite-vue3-browser-extension-v3"
          >
            Documentation
          </a>

          <a
            class="btn btn-link"
            href="https://www.robertkugler.dev"
          >
            Support
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
