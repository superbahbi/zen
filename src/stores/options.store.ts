export const useOptionsStore = defineStore("options", () => {
  const { isDark, toggleDark } = useTheme()

  const { data: others } = useBrowserLocalStorage<{
    awesome: boolean
    blockingPreferences: {
      showMotivationMessage: boolean
      mode: "strict" | "flexible"
    }
  }>("options", {
    awesome: true,
    blockingPreferences: {
      showMotivationMessage: true,
      mode: "strict",
    },
  })

  return {
    isDark,
    toggleDark,
    blockingPreferences: others.value.blockingPreferences,
  }
})
