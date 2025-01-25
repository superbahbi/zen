import { defineManifest } from "@crxjs/vite-plugin"
import ManifestConfig from "./manifest.config"

// @ts-expect-error ManifestConfig provides all required fields
export default defineManifest((env) => ({
  ...ManifestConfig,
  author: "Bobby Lee <superbahbi@gmail.com>",
  browser_specific_settings: {
    gecko: {
      id: process.env["VITE_FIREFOX_ADDON_ID"],
    },
  },
  background: {
    scripts: ["src/background/index.ts"],
    type: "module",
    persistent: false,
  },
  permissions: [
    // @ts-expect-error background permission is not supported in Firefox
    ...ManifestConfig.permissions.filter(
      (permission) => permission !== "background",
    ),
  ],
}))
