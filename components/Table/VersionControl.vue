<template>
  <v-container fluid class="pa-0">
    <!-- Outer Border Card -->
    <v-card variant="outlined" class="ma-2" style="border-color: #DEDEDE; box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1);">
      <!-- Header Section with Bottom Border -->
      <v-card-text class="px-4 py-3 border-b bg-grey-lighten-4" style="box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);">
        <v-row align="center" justify="space-between" no-gutters>
          <v-col cols="auto">
            <div class="d-flex align-center">
              <v-icon color="black" size="20" class="me-2"
                >mdi-account</v-icon
              >
              <span class="text-body-1 font-weight-medium text-black"
                >バージョン管理</span
              >
            </div>
          </v-col>
          <v-col cols="auto">
            <div class="d-flex align-center ga-1">
              <v-btn
                variant="outlined"
                size="small"
                color="grey-darken-2"
                class="px-2"
                style="min-width: 32px"
              >
                <v-icon size="16">mdi-view-module</v-icon>
              </v-btn>
              <v-btn
                color="#CDDC39"
                variant="flat"
                size="small"
                class="text-black px-2"
                style="min-width: 32px"
              >
                <v-icon size="16">mdi-history</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- Search Section - Simple input field, half width, right aligned -->
      <v-card-text class="pa-4">
        <v-row justify="end">
          <v-col cols="6">
            <v-text-field
              v-model="searchQuery"
              placeholder="Search"
              variant="plain"
              density="compact"
              hide-details
              style="border-bottom: 1px solid #ccc;"
            >
              <template #append-inner>
                <v-icon color="grey" size="20">mdi-magnify</v-icon>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- Add Data Button -->
      <v-card-text class="pa-4 pt-0">
        <v-row class="mb-3">
          <v-col cols="12" class="d-flex justify-end">
            <v-btn color="red" variant="flat" class="text-white">
              <v-icon class="me-1">mdi-plus-circle</v-icon>
              データ登録
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- Data Table -->
      <v-card-text class="pa-0">
        <v-data-table
          :headers="headers"
          :items="items"
          :search="searchQuery"
          items-per-page="5"
          class="elevation-0"
          density="comfortable"
        >
          <!-- Action Column Template -->
          <template #item.action="{ item }">
            <v-btn variant="text" size="small" color="grey">
              <v-icon size="small">mdi-pencil</v-icon>
            </v-btn>
          </template>

          <!-- Custom footer for pagination -->
          <template #bottom>
            <div class="d-flex align-center justify-end pa-3">
              <div class="d-flex align-center ga-4">
                <div class="d-flex align-center">
                  <span class="me-2">Rows per page:</span>
                  <v-select
                    :model-value="itemsPerPage"
                    :items="[5, 10, 25, 50]"
                    variant="outlined"
                    density="compact"
                    hide-details
                    style="width: 80px"
                    @update:model-value="updateItemsPerPage"
                  />
                </div>
                <div class="d-flex align-center">
                  <span class="me-4">1-6 of 6</span>
                  <v-btn variant="text" icon size="small" disabled>
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn variant="text" icon size="small" disabled>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// Reactive data
const searchQuery = ref("");
const itemsPerPage = ref(5);

// Table headers
const headers = [
  {
    title: "操作",
    key: "action",
    sortable: false,
    width: "80px",
    align: "center",
  },
  {
    title: "更新日時",
    key: "updateDate",
    sortable: true,
    width: "200px",
  },
  {
    title: "システム名",
    key: "system",
    sortable: true,
    width: "150px",
  },
  {
    title: "バージョン",
    key: "version",
    sortable: true,
    width: "120px",
  },
  {
    title: "適用アップデートバージョン",
    key: "featureUpdate",
    sortable: true,
    minWidth: "200px",
  },
];

// Table items
const items = [
  {
    id: 1,
    updateDate: "2024/05/31 16:22",
    system: "SHIRUSHI App",
    version: "2.0.0",
    featureUpdate: "2.0.0",
  },
  {
    id: 2,
    updateDate: "2024/04/11 10:01",
    system: "SBC",
    version: "1.00",
    featureUpdate: "1.00",
  },
  {
    id: 3,
    updateDate: "2024/04/06 12:45",
    system: "SMB2",
    version: "2.00.00",
    featureUpdate: "2.00.00",
  },
  {
    id: 4,
    updateDate: "2024/04/06 12:44",
    system: "SMB",
    version: "1.00.00",
    featureUpdate: "1.00.00",
  },
  {
    id: 5,
    updateDate: "2024/04/06 12:44",
    system: "SMA",
    version: "1.00.00",
    featureUpdate: "1.00.00",
  },
  {
    id: 6,
    updateDate: "2024/04/01 09:11",
    system: "SMF",
    version: "1.03.09",
    featureUpdate: "1.00.00",
  },
];

// Methods
const updateItemsPerPage = (value) => {
  itemsPerPage.value = value;
};

// Functions for external use
const updateVersionData = (newData) => {
  items.value = newData;
};

const addVersionEntry = (entry) => {
  items.unshift({ ...entry, id: Date.now() });
};

const updateVersionEntry = (id, updatedEntry) => {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...updatedEntry };
  }
};

// Expose functions
defineExpose({
  updateVersionData,
  addVersionEntry,
  updateVersionEntry,
});
</script>