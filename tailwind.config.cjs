/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "color-scheme": "light",
          primary: "#0D0D0D",
          "primary-content": "oklch(100% 0 0)",
          secondary: "#1A1919",
          "secondary-content": "oklch(100% 0 0)",
          accent: "#262626",
          "accent-content": "oklch(100% 0 0)",
          neutral: "#000000",
          "neutral-content": "oklch(100% 0 0)",
          "base-100": "oklch(100% 0 0)",
          "base-200": "#F2F2F2",
          "base-300": "#E6E5E5",
          "base-content": "#000000",
          info: "oklch(79.54% 0.103 205.9)",
          success: "oklch(90.13% 0.153 164.14)",
          warning: "oklch(88.37% 0.135 79.94)",
          error: "oklch(78.66% 0.15 28.47)",
          "--rounded-box": "0.25rem",
          "--rounded-btn": ".125rem",
          "--rounded-badge": ".125rem",
        },
        dark: {
          "color-scheme": "dark",
          primary: "#1C4E80",
          secondary: "#7C909A",
          accent: "#EA6947",
          neutral: "#23282E",
          "base-100": "#202020",
          info: "#0091D5",
          success: "#6BB187",
          warning: "#DBAE59",
          error: "#AC3E31",
          "--rounded-box": "0.25rem",
          "--rounded-btn": ".125rem",
          "--rounded-badge": ".125rem",
        },
      },
    ],
    logs: false,
  },
}
