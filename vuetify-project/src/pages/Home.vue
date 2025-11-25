<template>
  <v-app>
    <v-container>
      <v-col>
        <v-row>
          <v-sheet :height="200" :width="200" border rounded color="red" class="welcome">
            <h1>Home</h1>
          </v-sheet>
        </v-row>
        <v-card title="Menu Items" subtitle="Navigate pages here or using the sidebar">
          <v-row>
            <v-col>
              <MenuItemDashboard />
            </v-col>
            <v-col>
              <MenuItemDashboard />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <MenuItemDashboard />
            </v-col>
            <v-col>
              <MenuItemFood />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
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