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
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/contact/header.vue";
import ContactForm from "@/components/fragments/contactForm.vue";

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
</script>
