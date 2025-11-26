<template>
  <v-card height="10vh" width="120vh" border rounded color="red" class="title">
    <h1>Database Query</h1>
  </v-card>

  <v-data-table
    :headers="headers"
    :items="items"
    height="60vh"
    :items-per-page="10"
    fixed-header
  ></v-data-table>

  <v-card 
  class="my-4" 
  title="Query the Database" 
  subtitle="The table will display according to the University Name and Year"
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
        label="Year"
        :model-value="year"
        @update:model-value="year = $event"
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
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const university=ref('')
const year=ref('')

const headers = [
  { title: 'School', value: 'school' },
  { title: 'Employment Rate', value: 'employment_rate_overall' }
]

const items = ref([])

function querydb () {
  axios.get(`http://localhost:8081/api/v1/graduate-employment?university=${university.value}&year=${year.value}`)
    .then(res => {
      console.log(res.data) // check the structure
      items.value = res.data.data || []
    })
}


console.log(items)
</script>

<style>
.search {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title{
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>