<template>
  <v-data-table-virtual
    :items="items"
    height="400"
    item-value="name"
    fixed-header
  >
    <template #header>
      <tr>
        <th>Name</th>
        <th>Value</th>
      </tr>
    </template>

    <template #item="{ item }">
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </template>
  </v-data-table-virtual>
</template>

<script setup>
const items = [
  { name: 'Alice', value: 10 },
  { name: 'Bob', value: 20 },
  { name: 'Charlie', value: 30 },
]
</script>