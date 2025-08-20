<template>
  <v-container fluid class="pa-4">
    <!-- Version Control Table -->
    <DynamicTable
      :title="tableConfig.title"
      :color="tableConfig.color"
      :icon="tableConfig.icon"
      :headers="tableConfig.headers"
      :items="tableConfig.items"
      :items-per-page="10"
      :hide-footer="false"
    />
  </v-container>
</template>

<script setup>
import DynamicTable from './DynamicTable.vue'

// Table configuration for Version Control
const tableConfig = {
  title: 'バージョン管理',
  color: 'blue',
  icon: 'mdi-source-branch',
  headers: [
    { title: '操作', key: 'action', sortable: false, width: '60px' },
    { title: '更新日時', key: 'updateDate', sortable: true, width: '180px' },
    { title: 'システム', key: 'system', sortable: true, width: '150px' },
    { title: 'バージョン', key: 'version', sortable: true, width: '120px' },
    { title: '機能/アップデートバージョン', key: 'featureUpdate', sortable: true, width: '200px' }
  ],
  items: [
    {
      action: '✏️',
      updateDate: '2024/05/31 16:22',
      system: 'SHIRUSHI App',
      version: '2.0.0',
      featureUpdate: '2.0.0'
    },
    {
      action: '✏️',
      updateDate: '2024/04/11 10:01',
      system: 'SBC',
      version: '1.00',
      featureUpdate: '1.00'
    },
    {
      action: '✏️',
      updateDate: '2024/04/06 12:45',
      system: 'SMB2',
      version: '2.00.00',
      featureUpdate: '2.00.00'
    },
    {
      action: '✏️',
      updateDate: '2024/04/06 12:44',
      system: 'SMB',
      version: '1.00.00',
      featureUpdate: '1.00.00'
    },
    {
      action: '✏️',
      updateDate: '2024/04/06 12:44',
      system: 'SMA',
      version: '1.00.00',
      featureUpdate: '1.00.00'
    },
    {
      action: '✏️',
      updateDate: '2024/04/01 09:11',
      system: 'SMF',
      version: '1.03.09',
      featureUpdate: '1.00.00'
    }
  ]
}

// Function to update version control data
const updateVersionData = (newData) => {
  tableConfig.items = newData
}

// Function to add new version entry
const addVersionEntry = (entry) => {
  tableConfig.items.unshift(entry)
}

// Function to update specific version entry
const updateVersionEntry = (index, updatedEntry) => {
  if (tableConfig.items[index]) {
    tableConfig.items[index] = { ...tableConfig.items[index], ...updatedEntry }
  }
}

// Export functions for external use
defineExpose({
  updateVersionData,
  addVersionEntry,
  updateVersionEntry
})

// Example API integration (uncomment and modify as needed)
// onMounted(async () => {
//   try {
//     const versionData = await $fetch('/api/version-control')
//     updateVersionData(versionData)
//   } catch (error) {
//     console.error('Error loading version control data:', error)
//   }
// })
</script>