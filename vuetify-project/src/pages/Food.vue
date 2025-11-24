<template>
  <v-container>
    <v-card link title="meow" @click="playmeow">            
      <v-img
        src="@/assets/car_eat.jpeg"
        height="50%"
      ></v-img>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import meowSound from "@/assets/meow.wav"

const meow = new Audio(meowSound)

function playmeow() {
  meow.play()
}
</script>