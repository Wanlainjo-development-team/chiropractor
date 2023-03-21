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
          <v-col cols="12" sm="4">
            <v-btn block flat to="/contact" class="bg-blue text-capitalize rounded-lg mt-2">make an appointment</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <v-footer color="blue-darken-4" dark>
    <v-container class="my-16">
      <v-row justify="space-between">
        <v-col cols="12" sm="6">
          <v-card color="transparent" flat>
            <v-card-title class="font-weight-bold">About Metronet Chiropractic Clinic</v-card-title>
            <v-card-text class="text-body-2">
              Metronet Chiropractic, founded in 2003 by Dr. Chris Fokumlah,
              offers natural care for all ages in the Twin Cities metro area.
              Dr. Chris has 20+ years of experience in treating acute and
              chronic injuries from automobile accidents, work-related
              accidents, sports injuries, and providing wellness care, with a
              focus on helping patients achieve optimal health.
            </v-card-text>
            <v-card-text class="text-body-2">
              Metronet Chiropractic uses scientific-based natural care to
              decrease presenting symptoms, and also offers personal injury
              services for accident victims. The clinic's resolution-focused
              approach has helped many patients recover and resume their daily
              activities. For personalized treatment plans and natural care,
              Metronet Chiropractic is the right choice.
            </v-card-text>

            <v-card-text>
              <v-btn v-for="(social, i) in socials" :key="i" icon flat size="x-small" class="mr-2"
                @click="redirect(social.link)">
                <v-icon size="x-large" color="indigo" class="pa-0">{{
                  social.icon
                }}</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card color="transparent" flat>
            <v-card-title class="font-weight-bold">Contact Info</v-card-title>
            <v-card-text class="text-body-2">
              Metronet Chiropractic Clinic Ltd. <br />
              1421 Wayzata Blvd #100, Wayzata, MN 55391, United States
              <br />
              <br />
              Phone:
              <a href="tel:+1-612-296-5143" class="text-decoration-none text-white">+1-612-296-5143</a>
              <br />
              <br />
              Fax:
              <a href="tel:763-560-9182" class="text-decoration-none text-white">763-560-9182</a>
              <br />
              <br />
              Email:
              <a href="mailto:cfokumahlah@hotmail.com" class="text-decoration-none text-white">cfokumahlah@hotmail.com</a>
              <br />
              <br />
              <span @click="
                redirect(
                  'https://www.google.com/maps/place/1421+Wayzata+Blvd+%23+100,+Wayzata,+MN+55391,+USA/@44.9716411,-93.4965792,17z/data=!3m1!4b1!4m5!3m4!1s0x52b34b6597a903a7:0x868f61454e06b908!8m2!3d44.9716373!4d-93.4943905'
                )
              " class="text-white" style="cursor: pointer">Find Us on Google Maps</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card color="transparent" flat>
            <v-card-title class="font-weight-bold">Clinic Hours</v-card-title>
            <v-card-text class="text-body-2">
              Monday 7:00 am - 6:00 pm
              <br />
              <br />
              Tuesday 7:00 am - 8:00 pm
              <br />
              <br />
              Wednesday 7:00 am - 6:00 pm
              <br />
              <br />
              Thursday 7:00 am - 8:00 pm
              <br />
              <br />
              Friday 7:00 am - 6:00 pm
              <br />
              <br />
              Saturday 8:00 am - 1:00 pm
              <br />
              <br />
              Sunday Closed
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from "vue"
import Map from '@/components/fragments/map.vue'

const socials = ref([
  {
    icon: "mdi-facebook",
    link: "https://www.facebook.com/metronetchiropracticclinic",
  },
  {
    icon: "mdi-twitter",
    link: "https://twitter.com/metronetchiro",
  },
  {
    icon: "mdi-instagram",
    link: "https://www.instagram.com/metronetchiro/",
  },
  {
    icon: "mdi-youtube",
    link: "https://www.youtube.com/channel/UCY8YQZ1ZQZ1ZQZ1ZQZ1ZQZ1",
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

const redirect = (location) => {
  window.open(location);
};
</script>