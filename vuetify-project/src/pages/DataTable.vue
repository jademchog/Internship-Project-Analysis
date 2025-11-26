<template>
  <v-data-table
    :headers="headers"
    :items="items"
    height="80vh"
    :items-per-page="10"
    fixed-header
  ></v-data-table>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const headers = ref([
  { text: 'School', value: 'school' },
  { text: 'Employment Rate', value: 'employment_rate_overall' }
])
const items = ref([])

axios.get("http://localhost:8081/api/v1/graduate-employment?university=Nanyang Technological University&year=2023")
  .then(res => {
    console.log(res.data) // check the structure
    items.value = res.data.data || []
  })
</script>
