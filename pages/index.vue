<template>
  <Header />
  <Section1 />
  <Section2 />
  <Section3 />
  <Section4 />
  <Section5 />
  <ContactForm />
  <Section6 />
  <Section7 />
</template>

<script setup>
import Header from "~~/components/home/header.vue";
import Section1 from "~~/components/home/section1.vue";
import Section2 from "~~/components/home/section2.vue";
import Section3 from "~~/components/home/section3.vue";
import Section4 from "~~/components/home/section4.vue";
import Section5 from "~~/components/home/section5.vue";
import ContactForm from "~~/components/fragments/contactForm.vue";
import Section6 from "~~/components/home/section6.vue";
import Section7 from "~~/components/home/section7.vue";
</script>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
}
</style>