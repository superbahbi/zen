<script setup lang="ts">
import { ref } from "vue"
import { z } from "zod"
import { useBlockStore } from "@/stores/block.store"
import { storeToRefs } from "pinia"

// Initialize the block store and extract necessary references
const blockStore = useBlockStore()

// Reactive variables for user input and UI feedback
const inputUrl = ref("")
const showConfirmation = ref(false)
const showError = ref(false)

// Utility function to normalize the URL
const normalizeUrl = (url: string): string => {
  let normalized = url.trim().replace(/\/+$/, "")
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = `https://${normalized}`
  }
  return normalized
}

// Zod schema for URL validation
const urlSchema = z.string().url()

// Function to validate the URL using the schema
const isValidURL = (url: string): boolean => urlSchema.safeParse(url).success

// Function to handle saving the URL
const saveUrl = () => {
  if (!isValidURL(inputUrl.value)) {
    showError.value = true
    showConfirmation.value = false
    return
  }

  blockStore.addUrl(inputUrl.value)
  showConfirmation.value = true
  showError.value = false
  inputUrl.value = ""

  // Hide confirmation message after 2 seconds
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
            Enter the URL of the website with http or https example:
            https://www.google.com and click "Save". The website will be blocked
            from your browser.
          </p>
          <div class="flex gap-2 justify-center mb-4 w-full">
            <input
              v-model="inputUrl"
              type="text"
              class="input input-primary"
              placeholder="Enter website URL"
              @input="showError = false"
              @keyup.enter="saveUrl"
              @error="showError = true"
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
          <div
            v-if="showError"
            class="text-red-600 mb-4"
          >
            Please enter a valid URL
          </div>
          <div class="flex gap-2 justify-center mb-4">
            <RouterLink
              to="/action-popup/block-website"
              class="btn btn-primary w-full px-4"
            >
              Blocked Website
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
