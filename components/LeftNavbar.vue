<!-- components/LeftNavbar.vue -->
<template>
  <div class="left-navbar-content">
    <!-- Staging Mode Header -->
    <div class="staging-header">
      <v-chip color="orange" text-color="black" size="small" class="ma-2">
        <v-icon start>mdi-cog</v-icon>
        STAGING MODE
      </v-chip>
    </div>

    <v-divider></v-divider>

    <!-- Navigation List -->
    <v-list density="compact" nav>
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
              <v-chip color="green" size="x-small" text-color="white">2</v-chip>
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
              <v-chip color="red" size="x-small" text-color="white">374</v-chip>
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
              <v-chip color="red" size="x-small" text-color="white">200</v-chip>
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
  </div>
</template>

<script setup>
// No additional script needed for this component
</script>

<style lang="scss" scoped>
.left-navbar-content {
  height: 100%;
  width: 100%;

  .staging-header {
    padding: 8px 0;
    background-color: #f5f5f5;
  }

  .nav-item {
    margin: 2px 0;
    border-radius: 8px;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }

  .sub-nav-item {
    padding-left: 56px;
    font-size: 0.875rem;
    margin: 1px 0;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }

  // Custom styling for the navigation drawer
  :deep(.v-list-item__prepend) {
    margin-right: 16px;
  }

  :deep(.v-list-item-title) {
    font-size: 0.875rem;
    font-weight: 400;
  }

  :deep(.v-list-group__items) {
    background-color: rgba(0, 0, 0, 0.02);
  }
}
</style>