<template>
    <v-app>
        <v-app-bar rounded>
            <v-app-bar-title>Application Bar</v-app-bar-title>
        </v-app-bar>
        <v-navigation-drawer app permanent expand-on-hover rail>
            <v-list>
                <v-list-item
                v-for="item in menuItems"
                :key="item.to"
                :to="item.to"
                link
                :active="isActive(item.to)"
                @click="navigate(item.to)"
                style="height: 10vh;"
                prepend-avatar="./assets/carhere.jpg"
                >
                    <v-list-item-title><h3>{{ item.title }}</h3></v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <router-view />
        </v-main>
    </v-app>

</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const menuItems = [
  { title: 'Home', to: '/home' },
  { title: 'Dashboard', to: '/dashboard'},
  { title: 'Food', to: '/food'},
  { title: 'Graphs', to: '/graphs'},
  { title: 'Data Table', to: '/table'}
]

function navigate(to: string) {
  if (route.path !== to) {
    router.push(to)
  }
}

function isActive(to: string) {
  return route.path === to
}
</script>

<style scoped>
.v-application {
  min-height: 100vh;
}
</style>