<template>
  <v-navigation-drawer v-model="drawer.drawer" location="right" temporary>...</v-navigation-drawer>
</template>

<script setup>
import { useDraerStore } from "@/store/drawer";

const drawer = useDraerStore();
</script>