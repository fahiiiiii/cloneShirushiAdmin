<!-- components/LeftNavbar.vue - Complete Version with Navigation -->
<template>
  <v-navigation-drawer 
    v-model="navbarStore.isLeftNavbarVisible"
    width="210"
    :permanent="$vuetify.display.lgAndUp"
    rail-width="280"
    :temporary="$vuetify.display.mdAndDown"
    location="left"
    :disable-resize-watcher="true"
    persistent
    stateless
    color="white"
    border="e"
  >
    <!-- Staging Mode Header -->
    <v-container fluid class="pa-3" style="border-radius: 8px; margin: 0;">
      <v-chip 
        color="orange" 
        text-color="black" 
        size="small"
        variant="flat"
        class="text-caption font-weight-bold"
        prepend-icon="mdi-aws"
        style="border-radius: 8px;"
      >
        STAGING MODE
      </v-chip>
    </v-container>

    <v-divider class="border-opacity-60"></v-divider>

    <!-- Navigation List with computed navigation items -->
    <v-list 
      density="compact" 
      nav
      class="pa-2"
    >
      <!-- Top -->
      <v-list-item 
        prepend-icon="mdi-apps" 
        title="Top" 
        value="top"
        rounded="lg"
        class="mb-1"
        :color="isActive('top') ? 'grey-darken-2' : ''"
        :variant="isActive('top') ? 'tonal' : 'text'"
        @click="handleTopClick"
      />

      <!-- Dynamic Navigation Groups -->
      <template v-for="group in navigationGroups" :key="group.value">
        <v-list-group 
          :value="group.value"
          :model-value="isGroupExpanded(group.value)"
          @update:model-value="toggleGroup(group.value)"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :prepend-icon="group.icon"
              :title="group.title"
              rounded="lg"
              class="mb-1"
              variant="text"
              :style="isGroupOrChildActive(group.value) ? 'color: #FFA01F !important;' : ''"
              @click="handleNavClick(group.value as NavItem)"
            >
              <template v-slot:append v-if="group.badge">
                <v-chip 
                  :color="group.badge.color" 
                  size="x-small" 
                  text-color="white"
                  variant="flat"
                  class="text-caption font-weight-bold"
                >
                  {{ group.badge.count }}
                </v-chip>
              </template>
            </v-list-item>
          </template>
          
          <!-- Sub-items if they exist -->
          <v-container 
            v-if="group.children && group.children.length > 0"
            class="pa-0 bg-grey-lighten-5" 
            style="border-radius: 8px;"
          >
            <v-list-item
              v-for="child in group.children"
              :key="child.value"
              :title="child.title"
              :value="child.value"
              class="pl-12 text-body-2"
              rounded="md"
              variant="text"
              :style="isActive(child.value) ? 'color: #FFA01F !important;' : ''"
              @click="handleNavClick(child.value as NavItem)"
            />
          </v-container>
        </v-list-group>
      </template>

      <!-- Account (standalone item) -->
      <v-list-item 
        prepend-icon="mdi-credit-card-outline" 
        title="Account" 
        value="account"
        rounded="lg"
        class="mb-1"
        variant="text"
        :style="isActive('account') ? 'color: #FFA01F !important;' : ''"
        @click="handleNavClick('account')"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'
import { useRouter } from 'vue-router'
import { useNavbarStore } from '~/stores/navbar'

// Types
interface NavigationBadge {
  color: string
  count: number
}

interface NavigationChild {
  value: string
  title: string
}

interface NavigationGroup {
  value: string
  title: string
  icon: string
  badge?: NavigationBadge
  children?: NavigationChild[]
}

type NavItem = 'top' | 'system' | 'user-registration' | 'management' | 'sales' | 
               'trading' | 'mining' | 'agency' | 'conference' | 'worker' | 
               'security' | 'shop' | 'coin' | 'reward' | 'order' | 'airdrop' | 
               'manager' | 'contact' | 'wallet' | 'account' | 'management-list' | 
               'prospect-list' | 'sales-support-reset' | 'sales-support-unlock' |
               'conference-list' | 'conference-settings' | 'conference-participants' | 'conference-records' |
               'version-control' | 'smm-settings' | 'inquiry-settings' | 'statistics-settings' | 'faq-settings'

// Store and Router
const navbarStore = useNavbarStore()
const router = useRouter()

// Route mapping - adjust these routes according to your actual page structure
const routeMap: Record<string, string> = {
  'top': '/',
  // 'system': '/system',
  'version-control': '/version-control',
  // 'smm-settings': '/smm-settings',
  // 'inquiry-settings': '/inquiry-settings',
  // 'statistics-settings': '/statistics-settings',
  // 'faq-settings': '/faq-settings',
  // 'user-registration': '/user-registration',
  // 'management': '/management',
  'management-list': '/',
  // 'prospect-list': '/prospect-list',
  // 'sales-support-reset': '/sales-support-reset',
  // 'sales-support-unlock': '/sales-support-unlock',
  // 'sales': '/sales',
  // 'trading': '/trading',
  // 'mining': '/mining',
  // 'agency': '/agency',
  // 'conference': '/conference',
  // 'conference-list': '/conference-list',
  // 'conference-settings': '/conference-settings',
  // 'conference-participants': '/conference-participants',
  // 'conference-records': '/conference-records',
  // 'worker': '/worker',
  // 'security': '/security',
  // 'shop': '/shop',
  // 'coin': '/coin',
  // 'reward': '/reward',
  // 'order': '/order',
  // 'airdrop': '/airdrop',
  // 'manager': '/manager',
  // 'contact': '/contact',
  // 'wallet': '/wallet',
  // 'account': '/account'
}

// Static navigation configuration - this won't recreate on every render
const navigationGroups: ComputedRef<NavigationGroup[]> = computed(() => [
  {
    value: 'system',
    title: 'システム',
    icon: 'mdi-cog-outline',
    children: [
      { value: 'version-control', title: 'バージョン管理' },
      { value: 'smm-settings', title: 'SMM設定' },
      { value: 'inquiry-settings', title: 'お問い合わせ設定' },
      { value: 'statistics-settings', title: '統計設定' },
      { value: 'faq-settings', title: 'FAQ設定' }
    ]
  },
  {
    value: 'user-registration',
    title: '入社登録',
    icon: 'mdi-account-plus',
    badge: { color: 'green', count: 2 }
  },
  {
    value: 'management',
    title: '管理',
    icon: 'mdi-account',
    children: [
      { value: 'management-list', title: '経営一覧' },
      { value: 'prospect-list', title: '見込み顧客一覧' },
      { value: 'sales-support-reset', title: '営業支援リセット' },
      { value: 'sales-support-unlock', title: '営業支援制限解除' }
    ]
  },
  {
    value: 'sales',
    title: 'セールス',
    icon: 'mdi-chart-line'
  },
  {
    value: 'trading',
    title: 'トレーディング',
    icon: 'mdi-trending-up'
  },
  {
    value: 'mining',
    title: 'マイニングポスト',
    icon: 'mdi-pickaxe'
  },
  {
    value: 'agency',
    title: '代理店',
    icon: 'mdi-heart-outline'
  },
  {
    value: 'conference',
    title: '会議',
    icon: 'mdi-dice-6-outline',
    badge: { color: 'red', count: 374 },
    children: [
      { value: 'conference-list', title: '会議一覧' },
      { value: 'conference-settings', title: '会議設定' },
      { value: 'conference-participants', title: '参加者管理' },
      { value: 'conference-records', title: '会議記録' }
    ]
  },
  {
    value: 'worker',
    title: 'ワーカー',
    icon: 'mdi-briefcase-outline'
  },
  {
    value: 'security',
    title: 'セキュリティ',
    icon: 'mdi-shield-outline'
  },
  {
    value: 'shop',
    title: 'ショップ',
    icon: 'mdi-cart-outline'
  },
  {
    value: 'coin',
    title: 'コイン',
    icon: 'mdi-circle-outline'
  },
  {
    value: 'reward',
    title: 'リワード',
    icon: 'mdi-hand-heart-outline'
  },
  {
    value: 'order',
    title: '注文',
    icon: 'mdi-format-list-bulleted'
  },
  {
    value: 'airdrop',
    title: 'エアドロップ',
    icon: 'mdi-chevron-right'
  },
  {
    value: 'manager',
    title: '管理者',
    icon: 'mdi-help-circle-outline'
  },
  {
    value: 'contact',
    title: 'お問い合わせ',
    icon: 'mdi-card-text-outline',
    badge: { color: 'red', count: 200 }
  },
  {
    value: 'wallet',
    title: 'ウォレット',
    icon: 'mdi-bank-outline'
  }
])

// Computed properties for better performance
const parentChildMap = computed(() => {
  const map: Record<string, string[]> = {}
  navigationGroups.value.forEach(group => {
    if (group.children) {
      map[group.value] = group.children.map(child => child.value)
    }
  })
  return map
})

// Optimized helper functions
const isActive = (item: string): boolean => {
  return navbarStore.activeItem === item
}

const isGroupExpanded = (groupName: string): boolean => {
  return navbarStore.expandedGroups.includes(groupName)
}

const isGroupOrChildActive = (groupName: string): boolean => {
  const children = parentChildMap.value[groupName] || []
  return navbarStore.activeItem === groupName || children.includes(navbarStore.activeItem)
}

// Event handlers with navigation
const handleTopClick = (): void => {
  if (navbarStore.activeItem === 'top') {
    navbarStore.toggleLeftNavbar()
  } else {
    navbarStore.setActiveItem('top')
    router.push('/')
  }
}

const handleNavClick = async (item: NavItem): Promise<void> => {
  console.log('Clicking nav item:', item) // Debug log
  
  // Update store
  navbarStore.setActiveItem(item)
  
  // Navigate to route if it exists
  const route = routeMap[item]
  if (route) {
    console.log('Navigating to route:', route) // Debug log
    try {
      await router.push(route)
      console.log('Navigation successful to:', route) // Debug log
    } catch (error) {
      console.error('Navigation failed:', error) // Debug log
    }
  } else {
    console.warn('No route found for item:', item) // Debug log
  }
  
  // Auto-expand parent groups when navigating to child items
  const parentGroup = Object.entries(parentChildMap.value).find(([_, children]) => 
    children.includes(item)
  )?.[0]
  
  if (parentGroup && !isGroupExpanded(parentGroup)) {
    navbarStore.toggleGroup(parentGroup)
  }
}

const toggleGroup = (groupName: string): void => {
  navbarStore.toggleGroup(groupName)
};
</script>


<style scoped>
/* Add any custom styles here if needed */
.v-list-item--active {
  color: #FFA01F !important;
}

/* Ensure proper styling for nested items */
.v-list-group__items .v-list-item {
  padding-left: 48px !important;
}
</style>