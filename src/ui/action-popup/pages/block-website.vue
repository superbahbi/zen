<script setup lang="ts">
import { useBlockStore } from "@/stores/block.store"
const blockStore = useBlockStore()
const { blockedUrls } = storeToRefs(blockStore)
</script>

<template>
  <div>
    <RouterLinkUp />
    <h1>Block Website</h1>

    <!-- Blocked Websites -->
    <div
      v-if="blockedUrls.length === 0"
      class="text-center text-gray-500 my-4"
    >
      No blocked URLs found
    </div>
    <div v-else>
      <div
        v-for="url in blockedUrls"
        :key="url.url"
        class="flex items-center gap-2 mb-2"
      >
        <p
          class="flex-grow text-gray-500 font-mono overflow-x-auto whitespace-nowrap"
        >
          {{ url.url }}
        </p>

        <!-- Toggle Block -->
        <button
          class="btn btn-link btn-lg"
          :class="
            url.isBlocked
              ? 'text-sky-500 dark:text-sky-400'
              : 'text-gray-500 dark:text-gray-400'
          "
          @click="blockStore.toggleBlock(url.url)"
        >
          <i-ph-toggle-right v-if="url.isBlocked" />
          <i-ph-toggle-left v-else />
        </button>
        <button
          class="btn btn-link btn-lg text-red-500 dark:text-red-400"
          @click="blockStore.removeUrl(url.url)"
        >
          <i-ph-trash />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
