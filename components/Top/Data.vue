<template>
  <v-sheet class="d-flex flex-wrap">
    <!-- First Box (Red) -->
    <v-sheet class="pa-4" style="background-color: #f44336; flex: 1 1 100%;" min-height="200px">
      <h3 class="white--text">リワード (Reward)</h3>
      <v-data-table
        :headers="rewardHeaders"
        :items="rewardData"
        item-value="name"
        class="elevation-2"
        hide-default-footer
        dense
      >
        <template v-slot:items="props">
          <tr :key="props.item.id">
            <td>{{ props.item.since }}</td>
            <td>{{ props.item.date }}</td>
            <td>{{ props.item.amount }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-sheet>

    <!-- Second Box (Green) -->
    <v-sheet class="pa-4" style="background-color: #4caf50; flex: 1 1 100%;" min-height="200px">
      <h3 class="white--text">マーケティングログ (Marketing Log)</h3>
      <v-data-table
        :headers="marketingHeaders"
        :items="marketingData"
        item-value="name"
        class="elevation-2"
        hide-default-footer
        dense
      >
        <template v-slot:items="props">
          <tr :key="props.item.id">
            <td>{{ props.item.date }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.location }}</td>
            <td>{{ props.item.error }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-sheet>

    <!-- Third Row: Two side-by-side Boxes (Blue & Yellow) -->
    <v-sheet class="d-flex flex-wrap" style="width: 100%; justify-content: space-between">
      <!-- Box 1 (Blue) -->
      <v-sheet class="pa-4" style="background-color: #2196f3; flex: 1 1 48%;" min-height="200px">
        <h3 class="white--text">未決済注文 (Pending Orders)</h3>
        <v-data-table
          :headers="orderHeaders"
          :items="orderData"
          item-value="id"
          class="elevation-2"
          hide-default-footer
          dense
        >
          <template v-slot:items="props">
            <tr :key="props.item.id">
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.company }}</td>
              <td>{{ props.item.count }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-sheet>

      <!-- Box 2 (Yellow) -->
      <v-sheet class="pa-4" style="background-color: #ffeb3b; flex: 1 1 48%;" min-height="200px">
        <h3 class="black--text">ワーカー情報 (Worker Information)</h3>
        <v-data-table
          :headers="workerHeaders"
          :items="workerData"
          item-value="status"
          class="elevation-2"
          hide-default-footer
          dense
        >
          <template v-slot:items="props">
            <tr :key="props.item.id">
              <td>{{ props.item.service }}</td>
              <td>{{ props.item.status }}</td>
              <td>{{ props.item.workers }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-sheet>
    </v-sheet>
  </v-sheet>
</template>

<script setup>
// Sample Data for Tables
const rewardHeaders = [
  { text: 'シンボル', align: 'start', value: 'since' },
  { text: '発生日', value: 'date' },
  { text: '金額', value: 'amount' }
]

const rewardData = [
  { id: 1, since: '2023', date: '2023/01/01', amount: '500' },
  { id: 2, since: '2023', date: '2023/02/01', amount: '300' }
]

const marketingHeaders = [
  { text: '日付', value: 'date' },
  { text: 'マーケティング名称', value: 'name' },
  { text: '取引場所', value: 'location' },
  { text: 'エラー', value: 'error' }
]

const marketingData = [
  { id: 1, date: '2023/01/01', name: 'マーケティング1', location: '東京', error: 'なし' },
  { id: 2, date: '2023/02/01', name: 'マーケティング2', location: '大阪', error: 'エラー1' }
]

const orderHeaders = [
  { text: '注文ID', value: 'id' },
  { text: '会社名', value: 'company' },
  { text: '注文数', value: 'count' }
]

const orderData = [
  { id: 6290, company: '令和アーバントラスト株式会社', count: 3 },
  { id: 6301, company: '芳野美知子', count: 1 }
]

const workerHeaders = [
  { text: 'サービス名', value: 'service' },
  { text: 'ワーカー ステータス', value: 'status' },
  { text: 'ワーカー数', value: 'workers' }
]

const workerData = [
  { service: '全体', status: '稼働中', workers: 13776 },
  { service: '全体', status: '停止中', workers: 138 }
]
</script>

<style scoped>
.v-sheet {
  margin: 10px;
}

.pa-4 {
  padding: 16px;
}

.white--text {
  color: white;
}

.black--text {
  color: black;
}
</style>
