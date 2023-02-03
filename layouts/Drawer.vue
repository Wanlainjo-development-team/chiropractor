<template>
  <v-navigation-drawer
    v-model="drawer.drawer"
    :location="location"
    border="0"
    :class="rounded"
  >
    <v-card color="transparent" flat>
      <v-card-text class="pa-2">
        <v-list nav>
          <v-list-item
            v-for="(route, i) in drawer.routes"
            :key="i"
            :to="route.to"
            prepend-icon="mdi-email"
            :title="route.title"
            :value="route.title"
          ></v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block class="bg-blue text-capitalize">
          Make an appointment
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { useDraerStore } from "@/store/drawer";
import { computed, onMounted, onBeforeMount } from "vue";
import { useDisplay } from "vuetify";

const { name } = useDisplay();

const drawer = useDraerStore();

const resetDrawer = () => {
  switch (name.value) {
    case "xs":
      return (drawer.drawer = false);
    case "sm":
      return (drawer.drawer = false);
    case "md":
      return (drawer.drawer = false);
    case "lg":
      return (drawer.drawer = false);
    case "xl":
      return (drawer.drawer = false);
    case "xxl":
      return (drawer.drawer = false);
  }
};

onBeforeMount(() => {
  resetDrawer()
});

onMounted(() => {
  resetDrawer()
});

const location = computed(() => {
  switch (name.value) {
    case "xs":
      return "bottom";
    case "sm":
      return "right";
  }

  return undefined;
});

const rounded = computed(() => {
  switch (name.value) {
    case "xs":
      return "rounded-t-xl";
    case "sm":
      return "rounded-0";
  }

  return undefined;
});
</script>