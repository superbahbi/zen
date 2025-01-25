<template>
  <div>
    <RouterLinkUp />

    <h1>About Us</h1>

    <p>
      Welcome to mugai/zen, where modern solutions meet mindfulness. We're
      dedicated to creating tools that harmonize productivity with the
      principles of mindful living.
    </p>

    <p>
      Our mission is to provide experiences that not only enhance your daily
      life but also promote clarity, focus, and inner peace. We believe in
      creating solutions that maintain simplicity while helping you achieve
      balance in all aspects of life.
    </p>

    <p>
      Thank you for joining us on this journey of mindful living. We're honored
      to be your partner in achieving both efficiency and personal growth.
    </p>
    <div class="flex gap-2">
      <RouterLink
        to="/common/change-log"
        class="btn btn-primary"
      >
        Change Log
      </RouterLink>

      <RouterLink
        to="/common/help"
        class="btn btn-primary"
      >
        Help
      </RouterLink>

      <RouterLink
        to="/common/privacy-policy"
        class="btn btn-primary"
      >
        Privacy Policy
      </RouterLink>

      <RouterLink
        to="/common/terms-of-service"
        class="btn btn-primary"
      >
        Terms
      </RouterLink>
    </div>
  </div>
</template>
