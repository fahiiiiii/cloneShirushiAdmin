<template>
  <!-- Full-width App Bar with white background -->
  <v-app-bar color="white" flat height="64" elevation="2" class="px-4">
    <!-- Nav Icon with proper alignment and spacing -->
    <v-app-bar-nav-icon
      @click.stop="toggleNavbar"
      size="24"
      class="text-grey-darken-2"
      :class="{ 'nav-icon--active': navbarStore.isLeftNavbarVisible }"
    />

    <!-- Left Logo + Title with Japanese branding in column layout -->
    <div class="d-flex flex-column justify-center align-center">
      <div class="d-flex align-center justify-start mb-1" style="height: 28px">
        <v-img
          src="./../assets/logo.png"
          alt="Shirushi Inc."
          height="24"
          width="200px"
          contain
        />
      </div>
      <v-card-subtitle
        class="pa-0 text-caption text-center"
        style="color: #1c2e4c; opacity: 1 !important"
      >
        Shirushi Master Admin
      </v-card-subtitle>
    </div>

    <!-- Spacer pushes next items to the right -->
    <v-spacer />

    <!-- Right-side user info and controls -->
    <template v-if="$vuetify.display.mdAndUp">
      <div class="d-flex align-center ga-3">
        <!-- User Info -->
        <v-card
          class="d-flex align-center ga-2 px-1 py-0"
          color="grey-lighten-4"
          flat
          rounded="sm"
          elevation="2"
        >
          <v-avatar size="24" color="#5E7AE9" class="text-indigo-lighten-5">
            <v-icon size="16">mdi-ethereum</v-icon>
          </v-avatar>

          <v-card-text class="pa-0 text-black text-caption">
            0x0c ... b19d
          </v-card-text>

          <v-btn
            icon
            size="x-small"
            variant="text"
            color="grey-darken-1"
            @click="copyWalletAddress"
          >
            <v-icon size="14">mdi-content-copy</v-icon>
          </v-btn>
        </v-card>

        <!-- Orange Timer/History Button -->
        <v-btn
          @click="onTimer"
          color="#FFA726"
          variant="elevated"
          size="small"
          class="mr-5"
          elevation="0"
          width="57"
          height="36"
        >
          <v-icon size="20" color="grey-darken-4">mdi-history</v-icon>
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import { useNavbarStore } from "~/stores/navbar";

const navbarStore = useNavbarStore();

const toggleNavbar = () => {
  navbarStore.toggleLeftNavbar();
  console.log("Navbar toggled:", navbarStore.isLeftNavbarVisible);
};

const onTimer = () => {
  console.log("Timer clicked");
};

const copyWalletAddress = () => {
  navigator.clipboard.writeText("0x0c...b19d").then(() => {
    alert("Wallet address copied!");
  });
};
</script>

<style scoped>

</style>