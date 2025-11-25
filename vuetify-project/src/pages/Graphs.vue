<template>
    <v-container fluid>
        <div class="my-grid">
            <div class="item item1">
                <v-card class="pa-0 h-100"><div ref="chartRef1" class = "chart"></div></v-card>
            </div>

            <div class="item item2">
                <v-card class="pa-0 h-100"><div ref="chartRef2" class = "chart"></div></v-card>
            </div>

            <div class="item item3">
                <v-card class="pa-0 h-100"><div ref="chartRef3" class = "chart"></div></v-card>
            </div>

            <div class="item item4">
                <v-card class="pa-0 h-100"><div ref="chartRef4" class = "chart"></div></v-card>
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

const chartRef1 = ref<HTMLDivElement | null>(null)
let chartInstance1: echarts.ECharts | null = null
const chartRef2 = ref<HTMLDivElement | null>(null)
let chartInstance2: echarts.ECharts | null = null
const chartRef3 = ref<HTMLDivElement | null>(null)
let chartInstance3: echarts.ECharts | null = null
const chartRef4 = ref<HTMLDivElement | null>(null)
let chartInstance4: echarts.ECharts | null = null

onMounted(() => {
    if (chartRef1.value) {
        chartInstance1 = echarts.init(chartRef1.value)
        chartInstance1.setOption({
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
    if (chartRef2.value) {
        chartInstance2 = echarts.init(chartRef2.value)
        chartInstance2.setOption({
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
            data: [567, 767, 677, 367, 267, 67],
            },
            ],
        })
    }
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
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
                }
            ]            
        })
    }
    if (chartRef4.value) {
        chartInstance4 = echarts.init(chartRef4.value)
        chartInstance4.setOption({
            grid: {
            top: 15,
            bottom: 15,
            left: 30,
            right: 10
            },  
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
                }
            ]
        })
    }
})
</script>