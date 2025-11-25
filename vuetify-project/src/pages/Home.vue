<template>
  <v-app>
    <v-container>
      <v-sheet :height="200" :width="200" border rounded color="red" class="welcome"><h1>Welcome</h1></v-sheet>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style>
.welcome{
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>