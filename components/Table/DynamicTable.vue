<template>
  <!-- Simple notification text OUTSIDE the card -->
  <div 
    v-if="alertMessage"
    class="mb-2 text-body-2"
    style="color: #d32f2f;"
  >
    {{ alertMessage }}
  </div>

  <v-card class="mb-4" elevation="2">
    <v-card-title 
      :class="getTitleClass(color)"
      class="text-white d-flex align-center"
    >
      <v-icon 
        v-if="icon" 
        :icon="icon" 
        class="me-2"
      ></v-icon>
      {{ title }}
      <v-chip 
        v-if="subtitle" 
        :color="getChipColor(color)"
        size="small" 
        class="ms-2"
      >
        {{ subtitle }}
      </v-chip>
    </v-card-title>
    
    <!-- Inner Card/Table Container -->
    <v-card class="mx-3 mb-3 elevation-0" style="border-left: 1px solid #e6e6e6; border-right: 1px solid #e6e6e6; border-bottom: 3px solid #e0e0e0;">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="itemsPerPage"
        density="compact"
        class="elevation-0"
        show-current-page
        :footer-props="{
          'items-per-page-text': 'Rows per page:',
          'items-per-page-options': [{ value: 5, title: '5' }]
        }"
      >
        <template #no-data>
          <div class="text-center pa-8 text-grey-darken-1">
            No data available
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Simple summary text like in image -->
    <div 
      v-if="summaryTitle"
      class="mx-3 mb-3 text-center py-4"
    >
      <span 
        class="text-body-2"
        style="color: #424242;"
      >
        {{ summaryTitle }}
      </span>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  color: { type: String, default: 'primary' },
  icon: { type: String, default: '' },
  headers: { type: Array, required: true },
  items: { type: Array, required: true },
  itemsPerPage: { type: Number, default: 5 },
  hideFooter: { type: Boolean, default: false },
  
  // New props for alert
  alertMessage: { type: String, default: '' },
  alertIcon: { type: String, default: '' },
  
  // New props for summary
  summaryTitle: { type: String, default: '' },
  summaryItems: { 
    type: Array, 
    default: () => [],
    // Expected format: [{ label: 'Label', value: 'Value' }]
  }
})

const getTitleClass = (color) => {
  const colorMap = {
    'red': 'bg-red',
    'green': 'bg-green',
    'blue': 'bg-blue',
    'yellow': 'bg-yellow-darken-2',
    'primary': 'bg-primary',
    'secondary': 'bg-secondary'
  }
  return colorMap[color] || 'bg-primary'
}

const getChipColor = (color) => {
  const chipColorMap = {
    'red': 'red-lighten-2',
    'green': 'green-lighten-2', 
    'blue': 'blue-lighten-2',
    'yellow': 'yellow-lighten-2',
    'primary': 'primary-lighten-2',
    'secondary': 'secondary-lighten-2'
  }
  return chipColorMap[color] || 'primary-lighten-2'
}

const getAlertColor = (color) => {
  const alertColorMap = {
    'red': 'error',
    'green': 'success',
    'blue': 'info',
    'yellow': 'warning',
    'primary': 'info',
    'secondary': 'info'
  }
  return alertColorMap[color] || 'info'
}
</script>