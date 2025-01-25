<script setup lang="ts">
const displayName = __DISPLAY_NAME__
// const version = __VERSION__
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center text-center md:my-12"
  >
    <h1>🚫 Blocked! 🚫</h1>
    <p>
      {{ displayName }}! 🚫
      <br />
      The extension has been successfully blocked for this domain. You can now
      close this tab and continue browsing safely.
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
