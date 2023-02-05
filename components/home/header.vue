<template>
  <v-card
    image="https://res.cloudinary.com/rukkiecodes/image/upload/v1675304373/chriopractor/image1_zzxvji.jpg"
  >
    <v-container>
      <v-card
        height="500"
        max-width="100%"
        color="transparent"
        class="d-flex align-center"
        flat
      >
        <v-card-text class="white--text d-flex flex-column align-start">
          <span
            class="text-h5 text-sm-h4 text-lg-h3 text-white font-weight-bold"
            >Our Team Welcomes You</span
          >
          <span class="text-white text-lg-body-1"
            >chiropractic and wellness clinic</span
          >
          <v-btn
            color="blue"
            flat
            class="mt-4 text-body-2 font-weight-bold text-capitalize"
            to="/contact"
            >Make an appointment</v-btn
          >
        </v-card-text>
      </v-card>
    </v-container>
  </v-card>
  <!-- <v-carousel
    hide-delimiters
    show-arrows="hover"
    height="500"
    cycle
    interval="20000"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-parallax
        :src="item"
        gradient="to bottom, rgba(0,0,0,.6), rgba(0,0,0,.6)"
      >
        <v-container class="pa-0">
          <v-card
            height="500"
            max-width="100%"
            color="transparent"
            class="d-flex align-center"
            flat
          >
            <v-card-text class="white--text d-flex flex-column align-start">
              <span
                class="
                  text-h5 text-sm-h4 text-lg-h3 text-white
                  font-weight-bold
                "
                >Our Team Welcomes You</span
              >
              <span class="text-white text-lg-body-1"
                >chiropractic and wellness clinic</span
              >
              <v-btn
                color="blue"
                flat
                class="mt-4 text-body-2 font-weight-bold text-capitalize"
                to="/contact"
                >Make an appointment</v-btn
              >
            </v-card-text>
          </v-card>
        </v-container>
      </v-parallax>
    </v-carousel-item>
  </v-carousel> -->
</template>

<script setup>
import { ref } from "vue";
const items = ref([
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675304373/chriopractor/image1_zzxvji.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675304370/chriopractor/image3_drbfmf.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675304362/chriopractor/image5_dqdc6w.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675304357/chriopractor/image2_j6umx7.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675304356/chriopractor/image4_nfash2.jpg",
]);
</script>