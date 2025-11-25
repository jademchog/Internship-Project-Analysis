<template>
  <v-app>
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
                    <div ref="chartRef2" style="width: 100%; height: 400px"></div>
                    </v-card>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang = "ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chartRef1 = ref<HTMLDivElement | null>(null)
let chartInstance1: echarts.ECharts | null = null
const chartRef2 = ref<HTMLDivElement | null>(null)
let chartInstance2: echarts.ECharts | null = null

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

  if (chartRef2.value) {
    chartInstance2 = echarts.init(chartRef2.value)
    chartInstance2.setOption({
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
                itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]
    })
  }
})
</script>

<style>
.card {
  margin: auto;
  width: 50%;
  height: 20%;
  display: flex;
}

.pg-bg {
  background-image: url("../assets/carhere.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  min-width: 180vh;
}
</style>