export const useOptionsStore = defineStore("options", () => {
  const { isDark, toggleDark } = useTheme()

  const { data: options } = useBrowserSyncStorage<{
    blockingPreferences: {
      showMotivationMessage: boolean
      mode: "strict" | "flexible"
    }
  }>("options", {
    blockingPreferences: {
      showMotivationMessage: true,
      mode: "strict",
    },
  })

  async function saveOptions(blockingPreferences: {
    showMotivationMessage: boolean
    mode: "strict" | "flexible"
  }) {
    options.value.blockingPreferences = blockingPreferences
  }

  return {
    isDark,
    toggleDark,
    blockingPreferences: options.value.blockingPreferences,
    saveOptions,
  }
})
