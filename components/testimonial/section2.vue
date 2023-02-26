<template>
  <v-container>
    <v-card width="800" max-width="100%" class="text-center mx-auto my-16" flat>
      <v-card-subtitle class="text-grey-darken-3 text-body-1"
        >OUR REVIEWS</v-card-subtitle
      >
      <v-card-title class="text-grey-darken-3 text-h5 text-sm-h4">
        <span class="font-weight-bold">Testimonials</span>
      </v-card-title>

      <v-card-text>
        <v-carousel
          v-model="model"
          hide-delimiters
          show-arrows="hover"
          cycle
          interval="5000"
          height="200"
        >
          <v-carousel-item
            v-for="(testimonial, i) in testimonials"
            :key="i"
            :value="i"
          >
            <v-sheet class="d-flex align-center" color="transparent" tile>
              <v-card
                width="800"
                max-width="100%"
                class="mx-auto d-flex flex-column"
                color="transparent"
                flat
              >
                <v-card-text class="text-grey-darken-3 text-body-1 text-left"
                  >``{{ testimonial.text }}``</v-card-text
                >
                <v-card-actions>
                  <span class="font-weight-bold text-body-1">{{
                    testimonial.name
                  }}</span>
                </v-card-actions>
              </v-card>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card-text>
      <v-card-text>
        <v-row justify="space-between">
          <v-col v-for="(social, i) in socials" :key="i" cols="12" sm="4">
            <v-card flat>
              <v-avatar size="150" rounded="0">
                <v-img :src="social.image" />
              </v-avatar>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const colors = ref([
  "primary",
  "secondary",
  "yellow darken-2",
  "red",
  "orange",
]);

const model = ref(0);

const testimonials = ref([
  {
    text: "I was involved in a car accident and suffered from neck and back pain. Dr. Chris was able to provide relief through his chiropractic treatments. I highly recommend Metronet Chiropractic for anyone dealing with pain from an accident.",
    name: "- Sarah L",
  },
  {
    text: "Dr. Chris is a knowledgeable and caring chiropractor. He took the time to understand my concerns and created a personalized treatment plan that helped me manage my chronic pain. I'm grateful for his expertise and highly recommend him.",
    name: "- John K",
  },
  {
    text: "After suffering from a sports injury, I was unable to continue playing my favorite sport. Dr. Chris was able to help me get back on the field through his chiropractic treatments. I highly recommend him for anyone dealing with sports injuries.",
    name: "- Rachel S",
  },
  {
    text: "I have been seeing Dr. Chris for wellness care for years and I always leave feeling great. He is attentive and provides great care. I highly recommend him for anyone looking for chiropractic care.",
    name: "- Mark B",
  },
  {
    text: "Dr. Chris is a true professional who is passionate about helping his patients. He provided me with exceptional care after my work-related injury and helped me manage my pain. I highly recommend Metronet Chiropractic for anyone dealing with work-related injuries.",
    name: "- Lisa H",
  },
  {
    text: "Dr. Chris is an amazing chiropractor who is dedicated to his patients. He helped me manage my pain after a car accident and provided me with excellent care. I highly recommend him to anyone dealing with pain from an accident.",
    name: "- Tom W",
  },
  {
    text: "Dr. Chris is an excellent chiropractor who is passionate about his work. He helped me recover from my sports injury and provided me with great care. I highly recommend him to anyone dealing with sports injuries.",
    name: "- David L",
  },
  {
    text: "I have been seeing Dr. Chris for my chronic back pain and he has been able to provide me with relief through his chiropractic treatments. He is knowledgeable and attentive, and I highly recommend him.",
    name: "- Angela M",
  },
  {
    text: "I have been seeing Dr. Chris for wellness care and he has been able to help me maintain my overall health. He is friendly and provides great care. I highly recommend him.",
    name: "- Emily G",
  },
  {
    text: "Dr. Chris is a skilled chiropractor who is passionate about helping his patients. He helped me manage my pain after a work-related injury and provided me with exceptional care. I highly recommend him for anyone dealing with work-related injuries.",
    name: "- Mike S",
  },
]);

const socials = ref([
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675816422/chriopractor/facebook-5-stars_eg2njk.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675816421/chriopractor/google-5-star_g8hu2t.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675816419/chriopractor/yelp-5-star_jqxhyg.jpg",
  },
]);
</script>