<template>
  <div>
    <RouterLinkUp />

    <h1>Help & Support</h1>
    <p>
      Need assistance? We are here to help! For any issues or questions, you can
      contact our support team at:
      <a
        href="mailto:support@mindfulwithmugai.com"
        class="btn-link"
      >
        support@mindfulwithmugai.com
      </a>
    </p>

    <p class="text-sm font-thin">
      We strive to respond to all inquiries within 24 hours. Thank you for your
      patience and understanding.
    </p>

    <div class="flex gap-2">
      <RouterLink
        to="/common/about"
        class="btn btn-primary"
      >
        About Us
      </RouterLink>

      <a
        href="https://mindfulwithmugai.com/privacy"
        target="_blank"
        class="btn btn-primary"
      >
        Privacy Policy
      </a>

      <a
        href="https://mindfulwithmugai.com/terms"
        target="_blank"
        class="btn btn-primary"
      >
        Terms of Service
      </a>
    </div>
  </div>
</template>
