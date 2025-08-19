<!-- components/LeftNavbar.vue -->
<template>
  <v-navigation-drawer 
    class="left-navbar-content" 
    width="280"
    permanent
    rail-width="280"
  >
    <!-- Staging Mode Header -->
    <div class="staging-header">
      <v-chip 
        color="#FF9800" 
        text-color="black" 
        size="small" 
        class="staging-chip"
        variant="flat"
      >
        <img 
          src="./../assets/aws-logo.png"
          alt="AWS Logo"
          class="aws-logo"
        />
        STAGING MODE
      </v-chip>
    </div>

    <v-divider class="staging-divider"></v-divider>

    <!-- Navigation List -->
    <v-list 
      density="compact" 
      nav
      class="navigation-list"
    >
      <!-- Top -->
      <v-list-item 
        prepend-icon="mdi-apps" 
        title="Top" 
        value="top"
        class="nav-item"
      />

      <!-- System -->
      <v-list-group value="system">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-cog-outline"
            title="システム"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- User Registration -->
      <v-list-group value="user-registration">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-plus"
            title="入社登録"
            class="nav-item"
          >
            <template v-slot:append>
              <v-chip 
                color="green" 
                size="x-small" 
                text-color="white"
                variant="flat"
                class="count-chip"
              >
                2
              </v-chip>
            </template>
          </v-list-item>
        </template>
      </v-list-group>

      <!-- Management -->
      <v-list-group value="management">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account"
            title="管理"
            class="nav-item"
          />
        </template>
        <v-list-item
          title="経営一覧"
          value="management-list"
          class="sub-nav-item"
        />
        <v-list-item
          title="見込み顧客一覧"
          value="prospect-list"
          class="sub-nav-item"
        />
        <v-list-item
          title="営業支援リセット"
          value="sales-support-reset"
          class="sub-nav-item"
        />
        <v-list-item
          title="営業支援制限解除"
          value="sales-support-unlock"
          class="sub-nav-item"
        />
      </v-list-group>

      <!-- Sales -->
      <v-list-group value="sales">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-chart-line"
            title="セールス"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Trading -->
      <v-list-group value="trading">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-trending-up"
            title="トレーディング"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Mining Post -->
      <v-list-group value="mining">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-pickaxe"
            title="マイニングポスト"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Agency -->
      <v-list-group value="agency">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-heart-outline"
            title="代理店"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Conference -->
      <v-list-group value="conference">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-dice-6-outline"
            title="会議"
            class="nav-item"
          >
            <template v-slot:append>
              <v-chip 
                color="red" 
                size="x-small" 
                text-color="white"
                variant="flat"
                class="count-chip"
              >
                374
              </v-chip>
            </template>
          </v-list-item>
        </template>
      </v-list-group>

      <!-- Worker -->
      <v-list-group value="worker">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-briefcase-outline"
            title="ワーカー"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Security -->
      <v-list-group value="security">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-shield-outline"
            title="セキュリティ"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Shop -->
      <v-list-group value="shop">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-cart-outline"
            title="ショップ"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Coin -->
      <v-list-group value="coin">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-circle-outline"
            title="コイン"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Reward -->
      <v-list-group value="reward">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-hand-heart-outline"
            title="リワード"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Order -->
      <v-list-group value="order">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-format-list-bulleted"
            title="注文"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Airdrop -->
      <v-list-group value="airdrop">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-chevron-right"
            title="エアドロップ"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Manager -->
      <v-list-group value="manager">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-help-circle-outline"
            title="管理者"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Contact -->
      <v-list-group value="contact">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-card-text-outline"
            title="お問い合わせ"
            class="nav-item"
          >
            <template v-slot:append>
              <v-chip 
                color="red" 
                size="x-small" 
                text-color="white"
                variant="flat"
                class="count-chip"
              >
                200
              </v-chip>
            </template>
          </v-list-item>
        </template>
      </v-list-group>

      <!-- Wallet -->
      <v-list-group value="wallet">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-bank-outline"
            title="ウォレット"
            class="nav-item"
          />
        </template>
      </v-list-group>

      <!-- Account -->
      <v-list-item 
        prepend-icon="mdi-credit-card-outline" 
        title="Account" 
        value="account"
        class="nav-item"
      />

    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
// No additional script needed for this component
</script>

<style lang="scss" scoped>
.left-navbar-content {
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;

  .staging-header {
    padding: 8px 12px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    .staging-chip {
      font-weight: 700;
      font-size: 0.7rem;
      letter-spacing: 0.8px;
      height: 24px;
      border-radius: 4px;
      padding: 0 8px;
      background-color: #FF9800 !important;
      color: #000000 !important;
      box-shadow: none;
      display: flex;
      align-items: center;
      
      .aws-logo {
        width: 14px;
        height: 14px;
        margin-right: 4px;
        object-fit: contain;
      }
    }
  }

  .staging-divider {
    margin: 0;
    border-color: #e0e0e0;
    opacity: 0.8;
  }

  .navigation-list {
    padding: 8px;
    background-color: transparent;
    
    .nav-item {
      margin: 2px 0;
      border-radius: 8px;
      min-height: 40px;
      padding: 0 12px;
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
      
      &.v-list-item--active {
        background-color: rgba(25, 118, 210, 0.12);
        color: #1976d2;
        
        .v-icon {
          color: #1976d2;
        }
      }

      .count-chip {
        min-width: 20px;
        height: 20px;
        font-size: 0.7rem;
        font-weight: 600;
        border-radius: 10px;
      }
    }

    .sub-nav-item {
      padding-left: 56px;
      font-size: 0.875rem;
      margin: 1px 0;
      min-height: 36px;
      border-radius: 6px;
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }

  // Deep styling for Vuetify components
  :deep(.v-navigation-drawer__content) {
    background-color: #ffffff;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #bdbdbd transparent;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #bdbdbd;
      border-radius: 3px;
    }
  }

  :deep(.v-list-item__prepend) {
    margin-right: 16px;
    
    .v-icon {
      font-size: 20px;
      color: #616161;
    }
  }

  :deep(.v-list-item__append) {
    margin-left: auto;
  }

  :deep(.v-list-item-title) {
    font-size: 0.875rem;
    font-weight: 500;
    color: #424242;
    line-height: 1.2;
  }

  :deep(.v-list-group__items) {
    background-color: rgba(0, 0, 0, 0.02);
    border-radius: 8px;
    margin: 2px 0;
  }

  :deep(.v-list-group__header) {
    .v-list-item__append {
      .v-list-group__header__append {
        .v-icon {
          font-size: 16px;
          color: #757575;
          transition: transform 0.2s ease;
        }
      }
    }
    
    &.v-list-group__header--active {
      .v-list-item__append {
        .v-list-group__header__append {
          .v-icon {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

  :deep(.v-chip) {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  }
}

// Mobile responsiveness
@media (max-width: 768px) {
  .left-navbar-content {
    width: 100% !important;
  }
}
</style>