<template>
    <!-- Full-width App Bar with white background -->
    <v-app-bar color="#FFFFFF" flat class="w-100" height="64" elevation="2">

      <!-- Nav Icon with proper alignment and spacing -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        height="24px"
        width="24px"
        class="nav-icon"
        style="margin-right: 24px ;" 
      />

      <!-- Left Logo + Title with Japanese branding in column layout -->
      <div class="logo-wrapper">
        <div class="japanese-logo">
          <img src="./../assets/logo.png" alt="COG Logo" class="logo-img">
        </div>
        <span class="subtitle-text">Shirushi Master Admin</span>
      </div>

      <!-- Spacer pushes next items to the right -->
      <v-spacer />

      <!-- Right-side user info and controls -->
      <template v-if="$vuetify.display.mdAndUp">
        <div class="d-flex align-center user-section ">
          <!-- User Info -->
          
          <div class="user-info elevation-2">
            <v-avatar size="26" class="user-avatar">
              <v-icon>mdi-ethereum</v-icon>
              
            </v-avatar>
            <span class="user-text">0x0c ... b19d</span>
            <v-icon class="copy-icon" @click="copyWalletAddress">mdi-content-copy</v-icon>
          </div>

          <!-- Orange Timer/History Button -->
          <v-btn
            class="history-btn"
            @click="onTimer"
            elevation="0"
            rounded
            icon
          >
            <v-icon class="small-history-icon">mdi-history</v-icon>
          </v-btn>

        </div>
      </template>

    </v-app-bar>

    <!-- Left Navigation Drawer - now permanent and not temporary -->
    <!-- <v-navigation-drawer 
      v-model="drawer" 
      :permanent="!$vuetify.display.mobile"
      :temporary="$vuetify.display.mobile"
      :location="$vuetify.display.mobile ? 'bottom' : 'left'"
      :width="280"
      class="left-sidebar"
    >
      
    </v-navigation-drawer> -->

   
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
// import LeftNavbar from './LeftNavbar.vue'

const drawer = ref(false)

// Computed style for content shifting
const contentStyle = computed(() => {
  if (drawer.value && window.innerWidth >= 960) {
    return {
      marginLeft: '280px',
      transition: 'margin-left 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
  return {
    marginLeft: '0px',
    transition: 'margin-left 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  }
})

const onTimer = () => {
  console.log('Timer clicked')
}

const copyWalletAddress = () => {
  navigator.clipboard.writeText("0x0c...b19d").then(() => {
    alert("Wallet address copied!")
  })
}

// Handle clicks outside to close drawer (only on mobile)
const handleClickOutside = (event) => {
  if (window.innerWidth < 960) { // Only on mobile
    const drawer = document.querySelector('.v-navigation-drawer')
    const hamburger = document.querySelector('.v-app-bar-nav-icon')
    
    if (drawer && !drawer.contains(event.target) && 
        hamburger && !hamburger.contains(event.target)) {
      // Don't close - let user manually close with hamburger
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Navbar styling */
.v-app-bar {
  width: 100% ;
  position: relative;
  z-index: 10;
  font-weight: 400;
  min-height: 64px ;
  padding: 0 16px;
  background-color: #FFFFFF ; /* White background like in image */
}

/* Hamburger Icon alignment */
.nav-icon {
  margin-right: 24px ;
  color: #424242 ;
}

/* Logo section */
.logo-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.japanese-logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 28px;
  margin-bottom: 2px;
}

.logo-img {
  height: 24px;
  width: auto;
}

.subtitle-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #666666;
  line-height: 1.2;
  text-align: center;
}

/* User section */
.user-section {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 32px;
}

/* User info styling to match image */
.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  background: f6f6f6;
}

.user-avatar {
  background-color: #6680eb ;
  color: #faf9f5;
  width: 32px;
  height: 30px;
}

.user-text {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #424242;
  font-weight: 400;
}

.user-avatar .v-icon {
  color: #c3d1fe ;
  font-size: 18px;
}

.copy-icon {
  color: #666666;
  cursor: pointer;
  font-size: 16px ;
  margin-left: 4px;
}

/* History button styling to match orange color in image */
.history-btn {
  background-color: #ffa530;
  width: 57px !important;
  height: 34px !important;
  box-shadow: none;
  margin-right: 20px;
  color: #121211;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.small-history-icon {
  font-size: 20px !important; /* smaller icon */
}

.history-btn:hover {
  background-color: #F57C00;
}

/* Left sidebar styling */
.left-sidebar {
  z-index: 5 !important; /* Lower than app bar */
}

/* Content wrapper with smooth transitions */
.content-wrapper {
  width: 100%;
  min-height: calc(100vh - 64px);
}

/* Content shifted state */
.content-shifted .content-wrapper {
  width: calc(100% - 280px);
}

/* Demo cards for showing content */
.demo-cards {
  max-width: 800px;
}

/* Mobile responsive adjustments */
@media (max-width: 959px) {
  .content-wrapper {
    margin-left: 0 !important;
  }
  
  .content-shifted .content-wrapper {
    width: 100% !important;
  }
}

/* Ensure smooth transitions */
.v-main {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.v-navigation-drawer) {
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

