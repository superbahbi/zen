<script setup lang="ts">
const optionsStore = useOptionsStore()
const { isDark, blockingPreferences } = storeToRefs(optionsStore)
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

    <h3>Blocking Preferences</h3>
    <p>Configure how the blocking feature works.</p>

    <div class="form-control">
      <label class="label cursor-pointer justify-start gap-4">
        <span class="label-text">Show Motivation Message</span>
        <input
          v-model="blockingPreferences.showMotivationMessage"
          type="checkbox"
          class="checkbox"
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
      >
        <option value="strict">Strict - No Override</option>
        <option value="flexible">Flexible - Allow Temporary Access</option>
      </select>
    </div>

    <div class="mt-8 text-sm text-base-content/70">
      * These settings apply to all blocked websites. You can configure
      individual website settings in the main blocking interface.
    </div>
  </div>
</template>
