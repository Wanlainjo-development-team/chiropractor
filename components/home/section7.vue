<template>
  <v-container class="py-16">
    <v-row>
      <v-col>
        <v-card class="rounded-xl" flat>
          <v-card-text>
            <Map />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-card flat>
          <v-card-title>Location</v-card-title>
          <v-card-subtitle class="font-weight-bold">Address</v-card-subtitle>
          <v-card-text class="pt-0">1421 Wayzata Blvd #100, Wayzata,<br>MN 55391, United States</v-card-text>
          <v-card-subtitle class="font-weight-bold">Phone</v-card-subtitle>
          <v-card-text class="pt-0"><a href="tel:+1-612-296-5143"
              class="text-decoration-none text-grey-darken-4">+1-612-296-5143</a></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" class="py-5">
        <v-row dense justify="space-between">
          <v-col cols="6">
            <span class="font-weight-bold text-grey-darken-3">Monday - Friday</span>
          </v-col>
          <v-col cols="6">
            <span>7:00am - 6:00pm</span>
          </v-col>
          <v-col cols="6">
            <span class="font-weight-bold text-grey-darken-3">Saturday</span>
          </v-col>
          <v-col cols="6">
            <span>7:00am - 1:00pm</span>
          </v-col>
          <v-col cols="6">
            <span class="font-weight-bold text-grey-darken-3">Sunday</span>
          </v-col>
          <v-col cols="6">
            <span>Closed</span>
          </v-col>
          <v-col cols="6">
            <v-btn block flat to="/contact" class="bg-blue text-capitalize rounded-lg mt-2">make an appointment</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import Map from '@/components/fragments/map.vue'

const cards = ref([
  {
    icon: "mdi-trophy-variant-outline",
    title: 34,
    subtitle: "Years of Service",
  },
  {
    icon: "mdi-hand-heart-outline",
    title: 10000,
    subtitle: "Patients Served",
  },
  {
    icon: "mdi-heart-pulse",
    title: 28438,
    subtitle: "Chiropractic Adustments Last Year",
  },
  {
    icon: "mdi-doctor",
    title: 6,
    subtitle: "Doctors of Chiropractic",
  },
  {
    icon: "mdi-calendar-blank-outline",
    title: 6,
    subtitle: "Days a Week Open",
  },
  {
    icon: "mdi-clock-outline",
    title: 64,
    subtitle: "Hours a Week Open",
  },
]);
</script>
