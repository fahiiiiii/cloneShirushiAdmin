
<template>
  <v-app>
   
    <Navbar />
     <LeftNavbar/>
     <!-- page contet will appear here -->
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
import LeftNavbar from '~/components/LeftNavbar.vue';
</script>

<style lang="scss" scoped>

</style>