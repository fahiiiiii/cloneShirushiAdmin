
<template>
  <v-app>
    <!-- <v-layout fluid> -->
    <Navbar />
    <!-- Page content will appear here -->
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  <!-- </v-layout> -->
  </v-app>
</template>

<script setup>
import { Navbar  } from '#components';
</script>

<style lang="scss" scoped>

</style>