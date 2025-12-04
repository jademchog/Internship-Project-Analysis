<template>
  <v-app>
    <v-container class="pg-bg">
      <v-row>
          <v-col>
              <v-card title="Employment" subtitle="Employment Against Year">
                  <v-card variant="tonal">
                  <div ref="chartRef1" style="width: 90%; height: 400px"></div>
                  </v-card>
              </v-card>
          </v-col>
          <v-col>
              <v-card title="graph" subtitle="a graph of smt against smt">
                  <v-card variant="tonal">
                  <div ref="chartRef2" style="width: 90%; height: 400px"></div>
                  </v-card>
              </v-card>
          </v-col>
      </v-row>
      <v-card 
    class="my-4" 
    title="Query the Database" 
    subtitle="The table will display according to the University Name and Degree"
    min-height="30%">
      <v-row>
        <v-col>
          <v-text-field
          label="University Name"
          :model-value="university"
          @update:model-value="university = $event"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
          label="Degree"
          :model-value="degree"
          @update:model-value="degree = $event"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn
        class="search"
        variant="tonal"
        @click="querydb"
        >Search</v-btn>
      </v-row>
    </v-card>
    </v-container>
  </v-app>
  <p>{{ items }}</p>
</template>

<script setup lang = "ts">
import axios from 'axios'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chartRef1 = ref<HTMLDivElement | null>(null)
let chartInstance1: echarts.ECharts | null = null
const chartRef2 = ref<HTMLDivElement | null>(null)
let chartInstance2: echarts.ECharts | null = null

//user inputs
const university = ref("")
const degree = ref("")

//outputs
const items = ref([])
const years = ref([])
const employment_rates = ref([])

function querydb() {
  axios.get(`http://localhost:8081/api/v1/degree-employment?university=${university.value}&degree=${degree.value}`)
    .then(res => {
      items.value = res.data.data || [];
      years.value = items.value.map(item => item.year);
      employment_rates.value = items.value.map(item => item.employment_rate_overall);

      // update chart
      if (chartInstance1) {
        chartInstance1.setOption({
          xAxis: { data: years.value },
          series: [{ data: employment_rates.value }]
        });
      }
    });
}


onMounted(() => {
  if (chartRef1.value) {
    chartInstance1 = echarts.init(chartRef1.value)
    chartInstance1.setOption({
      title: { text: 'Employment' },
      tooltip: {},
      xAxis: {
        data: years.value,
      },
      yAxis: {
        min: 60,
        max:100
      },
      series: [
        {
          name: 'number',
          type: 'line',
          data: employment_rates.value,
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

.search {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>