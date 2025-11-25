<template>
    <v-container fluid>
        <div class="my-grid">
            <div class="item item1">
                <v-card class="pa-0 h-100"><v-card-text>1</v-card-text></v-card>
            </div>

            <div class="item item2">
                <v-card class="pa-0 h-100"><div ref="chartRef3" class = "chart"></div></v-card>
            </div>

            <div class="item item3">
                <v-card class="pa-0 h-100"><v-card-text>3</v-card-text></v-card>
            </div>

            <div class="item item4">
                <v-card class="pa-0 h-100"><v-card-text>4</v-card-text></v-card>
            </div>
        </div>
    </v-container>
</template>
<style>
.chart {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.my-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* → 2 columns */
  grid-template-rows: 27.5vh 55vh; /* ← CONTROL HEIGHT HERE */
  gap: 16px;
}

.item1 { grid-column: 1; grid-row: 1; }
.item2 { grid-column: 2; grid-row: 1; }

.item3 { grid-column: 1; grid-row: 2; }
.item4 { grid-column: 2; grid-row: 2; }
</style>
<script setup lang = "ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chartRef3 = ref<HTMLDivElement | null>(null)
let chartInstance3: echarts.ECharts | null = null

onMounted(() => {
  if (chartRef3.value) {
    chartInstance3 = echarts.init(chartRef3.value)
    chartInstance3.setOption({
        grid: {
        top: 15,
        bottom: 15,
        left: 30,
        right: 10
        },  
        tooltip: {},
        xAxis: {
            data: ['A', 'B', 'C', 'D', 'E', 'F'],
        },
        yAxis: {},
        series: [
        {
          name: 'number',
          type: 'line',
          data: [67, 267, 367, 677, 767, 567],
        },
      ],
    })
  }
})
</script>