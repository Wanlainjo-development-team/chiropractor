<template>
  <v-container class="mt-16">
    <v-card width="800" max-width="100%" class="text-center mx-auto" flat>
      <v-card-subtitle class="text-grey-darken-3 text-body-1"
        >OUR SERVICES</v-card-subtitle
      >
      <v-card-text class="text-grey-darken-3 text-h5 text-sm-h4">
        <span class="font-weight-bold">Metronet Chiropractic Health Care</span>
      </v-card-text>
      <v-card-text class="text-body-2 text-grey-darken-3">
        At Metronet Chiropractic, we specialize in providing comprehensive care
        for patients who have sustained injuries due to automobile accidents,
        work-related accidents, and sports injuries. We understand the physical,
        emotional, and financial toll that personal injury can take on a person,
        which is why we are dedicated to providing effective and compassionate
        care to help you recover as quickly as possible.
      </v-card-text>
    </v-card>

    <v-row justify="space-between" class="mt-5">
      <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="4">
        <v-card elevation="5">
          <v-img :src="card.image" :lazy-src="card.lazy" cover />
          <v-card-title class="text-grey-darken-3">
            {{ card.title }}
          </v-card-title>
          <v-card-text class="text-grey-darken-3">
            {{ card.text }}
          </v-card-text>
          <v-card-actions>
            <Nuxt-link
              color="blue"
              flat
              class="text-body-2 font-weight-bold text-uppercase text-decoration-none text-blue"
              :to="card.to"
              >Read More</Nuxt-link
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1677425949/chriopractor/diana-polekhina-SwWjCbIIoFE-unsplash_rjtous.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Personal Injury Treatment",
    text: "We provide chiropractic care for auto, work, or sports injuries. Our customized plans relieve pain, reduce inflammation, and enhance mobility for a quicker return to daily activities.",
    to: "/servicesPage",
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1677425775/chriopractor/christopher-campbell-kFCdfLbu6zA-unsplash_mq1apb.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Wellness Care",
    text: "We aim to enhance your health and wellness with our services, such as nutrition counseling, exercise advice, and lifestyle changes.",
    to: "/services/services/acupuncture",
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1677425774/chriopractor/christina-victoria-craft-ZHys6xN7sUE-unsplash_rkcrl5.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Functional Medicine",
    text: "Our healthcare approach is holistic, considering your lifestyle, environment, and genetics. With functional medicine, we can identify underlying issues and create tailored treatment plans targeting the root cause of your health problems.",
    to: "/services/services/spinalDecompression",
  },
]);
</script>
