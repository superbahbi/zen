<script setup lang="ts">
import { Notivue, Notification } from "notivue"
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <div
      class="max-w-lg mx-auto p-4 prose flex-grow flex items-center justify-center"
    >
      <RouterView />
    </div>

    <AppFooter class="mt-auto" />

    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
  </div>
</template>

<style lang="scss"></style>
