<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <v-img src="https://www.sedona-chiromatrix.com/storage/app/media/_SHARED/staff_1.jpg" aspect-ratio="1"
          contain></v-img>
      </v-col>

      <v-col cols="12" sm="9">
        <v-card-text class="text-body-2">
          Nathan Anderson is a San Diego chiropractor who serves San Diego and the surrounding communities in CA
        </v-card-text>
        <v-card-text class="text-body-2">
          Dr. Nathan Anderson uses chiropractic care to improve the health and wellness in all areas of patient's lives,
          whether they are having problems with back pain or neck pain, or just want to start feeling better when they
          wake up in the morning. Dr. Anderson takes a "whole person" approach in chiropractic care, which means looking
          for the underlying causes of disease, discomfort, and pain, as opposed to just treating the symptoms. Many
          seemingly unrelated symptoms often arise from imbalances in the spinal column, and Dr. Anderson will be able to
          determine the root of the pain and create a personalized chiropractic and wellness plan to suit each patient's
          individual needs. Under the supervision and care of our caring and skilled chiropractor, patients report higher
          functioning in all areas of their lives.
        </v-card-text>
        <v-card-text class="text-body-2">
          If you have any questions about our San Diego chiropractor, or would like to learn more about chiropractic care
          at Anderson Chiropractic Clinic, please call us at 800-462-8749 today!
        </v-card-text>
      </v-col>

      <v-col cols="12">
        <Map />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Map from '@/components/fragments/map.vue'
</script>
