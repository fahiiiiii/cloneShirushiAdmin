<template>
  <v-container fluid class="pa-2 pa-md-4" style="max-width: 100%; overflow-x: hidden;">
    <!-- Unshipped Workers Table -->
    <DynamicTable
      :title="tableConfigs.unshippedWorkers.title"
      :subtitle="tableConfigs.unshippedWorkers.subtitle"
      :color="tableConfigs.unshippedWorkers.color"
      :icon="tableConfigs.unshippedWorkers.icon"
      :headers="tableConfigs.unshippedWorkers.headers"
      :items="tableConfigs.unshippedWorkers.items"
      :items-per-page="5"
      :hide-footer="false"
      :alert-message="tableConfigs.unshippedWorkers.alertMessage"
      :summary-title="tableConfigs.unshippedWorkers.summaryTitle"
    />

    <!-- Marketing Log Table -->
    <DynamicTable
      :title="tableConfigs.marketingLog.title"
      :color="tableConfigs.marketingLog.color"
      :icon="tableConfigs.marketingLog.icon"
      :headers="tableConfigs.marketingLog.headers"
      :items="tableConfigs.marketingLog.items"
      :items-per-page="5"
      :hide-footer="false"
    />

    <!-- Bottom Section with Two Tables Side by Side -->
    <v-row class="mt-2 mt-md-4" no-gutters>
      <!-- Unpaid Orders Table -->
      <v-col cols="12" lg="6" class="pe-0 pe-lg-2">
        <DynamicTable
          :title="tableConfigs.unpaidOrders.title"
          :color="tableConfigs.unpaidOrders.color"
          :icon="tableConfigs.unpaidOrders.icon"
          :headers="tableConfigs.unpaidOrders.headers"
          :items="tableConfigs.unpaidOrders.items"
          :items-per-page="5"
          :hide-footer="false"
        />
      </v-col>

      <!-- Worker Information Table -->
      <v-col cols="12" lg="6" class="ps-0 ps-lg-2">
        <DynamicTable
          :title="tableConfigs.workerInfo.title"
          :color="tableConfigs.workerInfo.color"
          :icon="tableConfigs.workerInfo.icon"
          :headers="tableConfigs.workerInfo.headers"
          :items="tableConfigs.workerInfo.items"
          :items-per-page="5"
          :hide-footer="false"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import DynamicTable from './DynamicTable.vue'

// You can easily modify this data or load it from an API
const tableConfigs = {
  unshippedWorkers: {
    title: '未発送ワーカー68ライセンス',
   
    color: 'red',
    icon: 'mdi-hand-coin', // FIXED: Changed from truck icon
    
    // Alert configuration
    alertMessage: '※未発送ワーカーが674件あります。',
    
    // Summary configuration  
    summaryTitle: 'リワードサマリー',
    
    headers: [
      { title: 'シンボル画像', key: 'symbolImage', sortable: false },
      { title: '発注日', key: 'orderDate', sortable: true },
      { title: '転籍種別', key: 'transferType', sortable: true },
      { title: '台数', key: 'units', sortable: true },
      { title: 'SISCUSRDランク', key: 'siscusrdRank', sortable: true },
      { title: 'SISCUSD', key: 'siscusd', sortable: true },
      { title: 'USD/含むコイン', key: 'usdCoin', sortable: true },
      { title: 'USD/JPY', key: 'usdJpy', sortable: true },
      { title: 'リワード合計', key: 'rewardTotal', sortable: true },
      { title: 'リワード合計(JPY)', key: 'rewardTotalJpy', sortable: true },
      { title: '1台あたりリワード', key: 'rewardPerUnit', sortable: true },
      { title: '1台あたりリワード(JPY)', key: 'rewardPerUnitJpy', sortable: true },
      { title: '1台当たり利回り', key: 'yieldPerUnit', sortable: true },
      { title: '3年想定利回り', key: 'threeYearYield', sortable: true }
    ],
    items: [] // Empty array - will show "No data available"
  },

  marketingLog: {
    title: 'マーケティングログ',
    color: 'green',
    icon: 'mdi-chart-line',
    headers: [
      { title: '日時', key: 'datetime', sortable: true },
      { title: 'マーケットメイキング報告名', key: 'marketMakingReport', sortable: true },
      { title: '取引所名', key: 'exchangeName', sortable: true },
      { title: 'シンボル', key: 'symbol', sortable: true },
      { title: 'エラー', key: 'error', sortable: true },
      { title: 'ログメッセージ', key: 'logMessage', sortable: false }
    ],
    items: [] // Empty array - will show "No data available"
  },

  unpaidOrders: {
    title: '未決済注文',
    color: 'blue',
    icon: 'mdi-clipboard-list-outline',
    headers: [
      { title: '顧客ID', key: 'customerId', sortable: true },
      { title: '顧客名', key: 'customerName', sortable: true },
      { title: '台数', key: 'units', sortable: true }
    ],
    items: [
      { customerId: 6290, customerName: '合同アーバントラスト株式会社', units: 3 },
      { customerId: 6301, customerName: '五野美和子', units: 1 }
    ]
  },

  workerInfo: {
    title: 'ワーカー情報',
    color: 'yellow',
    icon: 'mdi-printer',
    headers: [
      { title: 'サービス名', key: 'serviceName', sortable: true },
      { title: 'ワーカーステータス', key: 'workerStatus', sortable: true },
      { title: '前回接続有無', key: 'lastConnection', sortable: true },
      { title: 'ワーカー数', key: 'workerCount', sortable: true }
    ],
    items: [
      { serviceName: '全体', workerStatus: '稼働中', lastConnection: '', workerCount: 13776 },
      { serviceName: '全体', workerStatus: '準備中', lastConnection: '', workerCount: 684 },
      { serviceName: '全体', workerStatus: '停止中', lastConnection: '', workerCount: 138 },
      { serviceName: '年間購入', workerStatus: '稼働中', lastConnection: '有り', workerCount: 12835 },
      { serviceName: '年間購入', workerStatus: '準備中', lastConnection: '有り', workerCount: 50 },
      { serviceName: '月間購入', workerStatus: '稼働中', lastConnection: '有り', workerCount: 1 },
      { serviceName: '送付', workerStatus: '稼働中', lastConnection: '有り', workerCount: 938 }
    ]
  }
}

// Function to update data dynamically (example for API integration)
const updateTableData = (tableName, newData) => {
  if (tableConfigs[tableName]) {
    tableConfigs[tableName].items = newData
  }
}

// Function to update alert message dynamically
const updateAlertMessage = (tableName, message) => {
  if (tableConfigs[tableName]) {
    tableConfigs[tableName].alertMessage = message
  }
}

// Function to update summary data dynamically
const updateSummaryData = (tableName, summaryItems) => {
  if (tableConfigs[tableName]) {
    tableConfigs[tableName].summaryItems = summaryItems
  }
}

// Example API integration (you can uncomment and modify as needed)
// onMounted(async () => {
//   try {
//     // const unshippedData = await $fetch('/api/unshipped-workers')
//     // updateTableData('unshippedWorkers', unshippedData)
//     // updateAlertMessage('unshippedWorkers', `※未発送ワーカーが${unshippedData.length}件あります。`)
//     
//     // const marketingData = await $fetch('/api/marketing-log')
//     // updateTableData('marketingLog', marketingData)
//     
//     // const ordersData = await $fetch('/api/unpaid-orders')
//     // updateTableData('unpaidOrders', ordersData)
//     
//     // const workersData = await $fetch('/api/worker-info')
//     // updateTableData('workerInfo', workersData)
//   } catch (error) {
//     console.error('Error loading data:', error)
//   }
// })

// Export update functions for external use
defineExpose({
  updateTableData,
  updateAlertMessage,
  updateSummaryData
})
</script>

<style scoped>
/* Ensure no horizontal overflow at container level */
.v-container {
  max-width: 100vw !important;
  overflow: hidden !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
}

/* Hide all scrollbars globally */
* {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

*::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

/* Force all elements to respect container boundaries */
:deep(.v-row),
:deep(.v-col),
:deep(.v-card),
:deep(.v-data-table) {
  overflow: hidden !important;
  max-width: 100% !important;
}

/* Responsive spacing adjustments */
@media (max-width: 768px) {
  .v-container {
    padding: 4px !important;
  }
}
</style>