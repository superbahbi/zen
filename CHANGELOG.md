# Change Log

## v0.0.3 (2025-01-30)

- Added support for Chrome Web Store

## v0.0.2 (2025-01-29)

### 🐛 Bug Fixes

- Fixed blocked redirect issue where users were unable to access whitelisted sites after temporary blocks
  - Improved URL pattern matching logic
  - Added proper exception handling for redirect scenarios
  - Enhanced user feedback with clear error messages

## v0.0.1 (2025-01-25)

### 🎉 Initial Release

- Created Zen - A Chrome extension for mindful individuals to block distractions and stay focused
- Implemented core extension architecture using Vue 3, Vite, and Manifest V3
- Added essential extension pages:
  - Action Popup
  - Options Page
  - Setup pages for Install/Update events

### ✨ Features

- Block distracting websites with URL filtering system
- Dark/Light theme support with customized DaisyUI themes
- Internationalization (i18n) support with English and Chinese translations
- Browser storage integration for settings persistence
- Error boundary and loading state handling
- Responsive UI components using Tailwind CSS and DaisyUI

### 🔧 Technical

- Set up development environment with:
  - TypeScript support
  - ESLint and Prettier configuration
  - Auto-import capabilities
  - Hot Module Replacement (HMR)
  - Build system for Chrome and Firefox
- Implemented automated build workflow with GitHub Actions
- Added comprehensive documentation in README
- Configured dependabot for dependency updates

### 📚 Documentation

- Added detailed README with features, screenshots, and setup instructions
- Included issue templates for bug reports and feature requests
- Added privacy policy and terms of service pages
- Created help and support documentation

### 🔒 Security & Privacy

- Implemented secure storage practices using chrome.storage API
- Added privacy-focused manifest permissions
- Created privacy policy documentation

For more details about using this extension, please visit the [GitHub repository](https://github.com/superbahbi/zen).
