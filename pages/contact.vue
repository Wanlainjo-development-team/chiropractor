<template>
  <Header />
  <v-container>
    <v-row justify="space-between">
      <v-col cols="12" sm="5">
        <v-card color="blue" class="rounded-lg pt-0" flat>
          <v-card-text class="text-h6 text-lg-h6">
            <span style="line-height: 1em">Contact Metronet Chiropractic Clinic Chiropractors</span>
          </v-card-text>
          <v-card-subtitle class="text-white">
            We want to hear from you! Call us at (952) 473-9637.
          </v-card-subtitle>

          <v-divider class="my-5" />

          <v-list lines="2" class="bg-transparent">
            <v-list-item v-for="(info, i) in contactInfo" :key="i" :title="info.title" :subtitle="info.subtitle"
              class="mb-3">
              <template v-slot:prepend>
                <v-avatar color="blue-lighten-5" class="rounded-lg">
                  <v-icon color="blue">{{ info.icon }}</v-icon>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7">
        <ContactForm id="contact" />
      </v-col>
    </v-row>
  </v-container>

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
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/contact/header.vue";
import ContactForm from "@/components/fragments/contactForm.vue";
import Map from '@/components/fragments/map.vue'

const contactInfo = ref([
  {
    icon: "mdi-map-marker",
    title: "1421 Wayzata Blvd E. Suite 100",
    subtitle: "Wayzata, MN 55391",
  },
  {
    icon: "mdi-email",
    title: "cfokumahlah@hotmail.com",
    subtitle: "Need help? Drop us an email.",
  },
  {
    icon: "mdi-phone",
    title: "(952) 473-9637",
    subtitle: "Call us for an appointment.",
  },
  {
    icon: "mdi-star",
    title: "(952)475-1998",
    subtitle: "New Patient Hotline!",
  },
]);

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
