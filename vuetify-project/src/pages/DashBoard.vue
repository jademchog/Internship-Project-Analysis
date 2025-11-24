<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card variant="tonal" class="card">i eat food</v-card>
            </v-col>
            <v-col>
                <v-card variant="tonal" class="card">me too</v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <div ref="chartRef2" style="width: 100%; height: 400px"></div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang = "ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chartRef2 = ref<HTMLDivElement | null>(null)
let chartInstance2: echarts.ECharts | null = null

onMounted(() => {
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
