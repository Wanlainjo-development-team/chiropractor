<template>
  <v-parallax
    src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675309154/chriopractor/logo-circle-bg_oudvpl.png"
    class="d-flex align-center justify-center"
  >
    <v-container class="mt-16 pt-0">
      <v-row justify="space-between">
        <v-col cols="12" sm="5">
          <v-card flat class="pa-0 ma-0" color="transparent">
            <v-img
              cover
              class="pa-0 ma-0 d-flex align-center text-center"
              src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675310178/chriopractor/chiropractor-video-thumbnail_a6kjzz.png"
            >
              <v-btn icon color="blue" size="large" elevation="10">
                <v-icon>mdi-play</v-icon>

                <!-- <v-dialog
                  v-model="dialog"
                  activator="parent"
                  width="500"
                  height="500"
                  scrollable
                >
                  <v-card height="500">
                    <v-card-text class="ma-0 pa-0" style="max-height: 600px">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/cplYgrvLrks"
                        title="Welcome to Metronet Chiropractic Clinic.  Chiropractic, Acupuncture, and Natural Healthcare."
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn class="bg-blue" block text @click="dialog = false">
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog> -->
              </v-btn>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="7">
          <v-card flat color="transparent">
            <v-card-subtitle class="text-grey-darken-3"
              >Metronet Chiropractic Clinic</v-card-subtitle
            >
            <v-card-title class="font-weight-bold text-grey-darken-3"
              >Welcome to Wellness</v-card-title
            >
            <v-card-text class="text-body-2 text-grey-darken-3">
              Welcome to Metronet Chiropractic, the premier chiropractic clinic
              serving the Twin Cities metro area. Led by Dr. Chris Fokumlah, our
              team of experienced professionals is dedicated to providing
              exceptional care to patients of all ages, with a special focus on
              those who have been injured in automobile accidents, work-related
              accidents, and sports injuries. Dr. Chris is a highly trained and
              skilled chiropractor who uses a range of techniques to address
              acute and chronic injuries, as well as to promote overall
              wellness.
            </v-card-text>
            <v-card-text class="pt-0 text-body-2 text-grey-darken-3">
              With a background in microbiology and functional medicine
              training, Dr. Chris brings a scientific and holistic approach to
              his chiropractic practice, with a commitment to resolving symptoms
              and promoting long-term healing. We are passionate about the
              health and wellbeing of our patients, and we look forward to
              helping you achieve optimal health and vitality.
            </v-card-text>
          </v-card>
          <v-card flat color="transparent">
            <v-card-title class="font-weight-bold text-grey-darken-3"
              >Metronet Chiropractic Clinic Treatments</v-card-title
            >
            <v-card-text>
              <v-row justify="space-between" dense>
                <v-col
                  v-for="(link, i) in links"
                  :key="i"
                  cols="12"
                  sm="6"
                  class="d-flex align-start"
                >
                  <v-icon size="18" color="blue" class="mr-2"
                    >mdi-arrow-right-bold-circle</v-icon
                  >
                  <v-hover>
                    <template v-slot:default="{ isHovering, props }">
                      <span
                        v-bind="props"
                        class="font-weight-bold"
                        :class="isHovering ? 'text-blue' : 'text-grey-darken-3'"
                        >{{ link.title }}</span
                      >
                    </template>
                  </v-hover>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <div class="d-flex align-center justify-sart">
                <v-icon color="blue" size="30">mdi-calendar-month</v-icon>
                <span class="text-h6 text-grey-darken-3"
                  >Book an appointment</span
                >
              </div>
              <v-spacer />
              <div class="d-flex align-center justify-sart">
                <v-icon color="blue" size="30">mdi-star</v-icon>
                <span class="text-h6 text-grey-darken-3"
                  >New patients Offer!</span
                >
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";

const dialog = ref(false);
const { name } = useDisplay();

const links = ref([
  { title: "Low Back Pain" },
  { title: "Sciatica" },
  { title: "Neck Pain" },
  { title: "Fibromyalgia" },
  { title: "Headaches" },
  { title: "Work Accident Injuries" },
  { title: "Extremity Pain" },
  { title: "Pinched Nerves" },
  { title: "Car Accident Injuries" },
  { title: "Herniated or Slipped Disc Pain" },
  { title: "Migraines" },
  { title: "TMJ Disorders" },
  { title: "Neuropathy" },
  { title: "Pregnancy related back pain" },
  { title: "Sports injuries" },
  { title: "Arm pain and numbness" },
  { title: "Childhood injuries including birth trauma colic and earaches" },
]);

const height = computed(() => {
  switch (name.value) {
    case "xs":
      return "100%";
    case "sm":
      return "100%";
    case "md":
      return "100%";
    case "lg":
      return "100vh";
    case "xl":
      return "100vh";
    case "xxl":
      return "100vh";
  }

  return undefined;
});
</script>