<script setup lang="ts">
const displayName = __DISPLAY_NAME__
const version = __VERSION__
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center text-center md:my-12"
  >
    <h1>🎉 Updated! 🚀</h1>
    <p>
      Thank you for updating {{ displayName }}! ❤️
      <br />
      Now you can close this tab and start using the extension.
    </p>

    <p>
      New Version: {{ version }}
      <br />
      <RouterLink
        to="/common/change-log"
        class="btn"
      >
        Change Log
      </RouterLink>
    </p>
  </div>
</template>
