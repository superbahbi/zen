<script setup lang="ts">
import { computed } from "vue"

const optionsStore = useOptionsStore()
const { isDark, blockingPreferences } = storeToRefs(optionsStore)

// Add explicit type for blockModeOptions
interface BlockModeOption {
  value: string
  label: string
  selected: boolean
}

// // Computed property for block mode options
// const blockModeOptions = computed<BlockModeOption[]>(() => [
//   {
//     value: "strict",
//     label: "Strict - No Override",
//     selected: blockingPreferences.value.mode === "strict",
//   },
//   {
//     value: "flexible",
//     label: "Flexible - Allow Temporary Access",
//     selected: blockingPreferences.value.mode === "flexible",
//   },
// ])

// // Single function to handle all preference updates
// const saveBlockingPreferences = (): void => {
//   console.log("saveBlockingPreferences", blockingPreferences.value)
//   optionsStore.saveOptions({
//     showMotivationMessage: blockingPreferences.value.showMotivationMessage,
//     mode: blockingPreferences.value.mode,
//   })
// }
</script>

<template>
  <div
    class="max-w-xl w-full mx-auto rounded-xl md:my-12 p-4 md:p-8 md:border border-base-200 md:shadow-lg bg-base-100"
  >
    <RouterLinkUp />

    <h1>Block Settings</h1>
    <p>
      Configure your website blocking preferences. These settings are
      synchronized across all your browser sessions.
    </p>

    <!-- UI Settings Section -->
    <section>
      <h3>User Interface</h3>
      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-4">
          <span class="label-text">Dark Theme</span>
          <input
            v-model="isDark"
            type="checkbox"
            class="toggle"
          />
        </label>
      </div>

      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-4">
          <span class="label-text">Language</span>
          <LocaleSwitch />
        </label>
      </div>
    </section>

    <!-- Blocking Preferences Section -->
    <!-- <section>
      <h3>Blocking Preferences</h3>
      <p>Configure how the blocking feature works.</p>

      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-4">
          <span class="label-text">Show Motivation Message</span>
          <input
            v-model="blockingPreferences.showMotivationMessage"
            type="checkbox"
            class="checkbox"
            @change="saveBlockingPreferences"
          />
        </label>
      </div>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Block Mode</span>
        </label>
        <select
          v-model="blockingPreferences.mode"
          class="select select-bordered"
          @change="saveBlockingPreferences"
        >
          <option
            v-for="option in blockModeOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>

      <div class="mt-8 text-sm text-base-content/70">
        * These settings apply to all blocked websites. You can configure
        individual website settings in the main blocking interface.
      </div>
    </section> -->
  </div>
</template>
