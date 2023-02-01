<template>
  <v-app>
    <AppBar />
    <Drawer />

    <v-main>
        <slot />
    </v-main>
  </v-app>
</template>
  
<script setup>
import AppBar from "./AppBar.vue";
import Drawer from "./Drawer.vue";
</script>