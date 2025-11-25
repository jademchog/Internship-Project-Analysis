<template>
  <v-app>
    <v-container>
      <v-col>
        <v-row>
          <v-card height="20vh" width="120vh" border rounded color="red" class="welcome">
            <h1>Home</h1>
          </v-card>
        </v-row>
        <v-card title="Menu Items" subtitle="Navigate pages here or using the sidebar" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum">
          <v-row>
            <v-col>
              <MenuItemDashboard />
            </v-col>
            <v-col>
              <MenuItemGraphs />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <MenuItemTable />
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