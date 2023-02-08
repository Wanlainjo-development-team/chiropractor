<template>
  <v-app>
    <v-navigation-drawer
      color="#F9FAFA"
      class="pa-4"
      border="0"
      width="300"
      floating
      permanent
    >
      <v-list density="compact">
        <v-list-item density="compact" to="/servicesPage">
          <v-list-item-title class="text-body-2"
            >Chiropractic Services</v-list-item-title
          >
        </v-list-item>
      </v-list>

      <v-row justify="space-between" dense>
        <v-col cols="1"></v-col>
        <v-col cols="11">
          <v-list density="compact">
            <v-list-item density="compact">
              <v-list-item-title class="text-body-2"
                >Back Pain Treatment</v-list-item-title
              >
            </v-list-item>
            <v-list-item density="compact">
              <v-list-item-title class="text-body-2"
                >Sciatica</v-list-item-title
              >
            </v-list-item>
            <v-list-item density="compact">
              <v-list-item-title class="text-body-2"
                >Headache Treatment</v-list-item-title
              >
            </v-list-item>
            <v-list-item density="compact">
              <v-list-item-title class="text-body-2"
                >Lower Extremity Pain</v-list-item-title
              >
            </v-list-item>
            <v-list-item density="compact">
              <v-list-item-title class="text-body-2"
                >Upper Extremity Pain</v-list-item-title
              >
            </v-list-item>
            <v-list-item density="compact">
              <v-list-item-title class="text-body-2"
                >Car Accident Injury</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-list density="compact">
        <v-list-item density="compact">
          <v-list-item-title class="text-body-2"
            >Other Services</v-list-item-title
          >
        </v-list-item>
      </v-list>

      <v-row justify="space-between" dense>
        <v-col cols="1"></v-col>
        <v-col cols="11">
          <v-list density="compact">
            <v-list-item density="compact">
              <v-list-item-title class="text-body-2"
                >Acupuncture
              </v-list-item-title>
            </v-list-item>
            <v-list-item density="compact">
              <v-list-item-title class="text-body-2"
                >Massage Therapy</v-list-item-title
              >
            </v-list-item>
            <v-list-item density="compact">
              <v-list-item-title class="text-body-2"
                >Spinal Decompression</v-list-item-title
              >
            </v-list-item>
            <v-list-item density="compact">
              <v-list-item-title class="text-body-2"
                >Rehabilitation</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
    