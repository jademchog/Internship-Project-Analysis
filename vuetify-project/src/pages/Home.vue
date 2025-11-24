<template>
    <v-container class="pg-bg">
        <v-row>
            <v-col>
                <v-card title="graph" subtitle="a graph of smt against smt">
                    <v-card variant="tonal">
                    <div ref="chartRef1" style="width: 100%; height: 400px"></div>
                    </v-card>
                </v-card>
            </v-col>
            <v-col>
                <v-card title="graph" subtitle="a graph of smt against smt">
                    <v-card variant="tonal">
                    <div ref="chartRef1" style="width: 100%; height: 400px"></div>
                    </v-card>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chartRef1 = ref<HTMLDivElement | null>(null)
let chartInstance1: echarts.ECharts | null = null

onMounted(() => {
  if (chartRef1.value) {
    chartInstance1 = echarts.init(chartRef1.value)
    chartInstance1.setOption({
      title: { text: 'graph' },
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

<style>
.pg-bg {
  background-image: url("../assets/carhere.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  min-width: 180vh;
}
</style>