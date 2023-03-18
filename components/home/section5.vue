<template>
  <v-parallax
    src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675335033/chriopractor/hidden-bg_ni0a0r.jpg"
    lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg"
    height="400"
    gradient="rgba(33, 150, 243, 0.9), rgba(33, 150, 243, 0.9)"
    class="d-flex align-center justify-center"
  >
    <v-card color="transparent" class="text-center" flat>
      <v-card-subtitle class="text-white text-body-1"
        >HAPPY & HEALTHY!</v-card-subtitle
      >
      <v-card-title class="text-white text-h5 text-lg-h4 mb-5"
        >What Our Patients Are Saying</v-card-title
      >
    </v-card>
    <v-carousel
      cycle
      height="100%"
      interval="30000"
      hide-delimiters
      :show-arrows="false"
      delimiter-icon="mdi-square"
    >
      <v-carousel-item v-for="(testimonial, i) in testimonials" :key="i">
        <v-sheet
          height="100%"
          class="d-flex align-center"
          color="transparent"
          tile
        >
          <v-card
            width="800"
            max-width="100%"
            class="mx-auto d-flex flex-column align-center justify-center"
            color="transparent"
            flat
          >
            <v-card-text class="text-white text-body-1 text-center"
              >``{{ testimonial.text }}``<span class="font-weight-bold"
                >{{ testimonial.name }}</span
              ></v-card-text
            >
          </v-card>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-parallax>
</template>

<script setup>
import { ref } from "vue";

const slides = ref(["First", "Second", "Third", "Fourth", "Fifth"]);

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
</script>