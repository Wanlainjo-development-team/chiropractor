<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="5">
        <v-parallax
          cover
          width="100%"
          src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675350855/chriopractor/room1-1_h3kdhe.jpg"
        />
      </v-col>
      <v-col cols="12" sm="7">
        <v-card flat>
          <v-card-title>Make an Appointment</v-card-title>
          <v-card-text>
            Contact us and make an appointment using the form below and we will
            get back to you as soon as possible with a time that fits your
            scheduled.
          </v-card-text>
          <v-card-text>
            <v-row justify="space-between">
              <v-col cols="12" sm="6">
                <v-text-field
                  density="compact"
                  variant="outlined"
                  label="First Name"
                  hide-details
                  color="blue"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  density="compact"
                  variant="outlined"
                  label="Last Name"
                  hide-details
                  color="blue"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  density="compact"
                  variant="outlined"
                  label="Email"
                  hide-details
                  color="blue"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  density="compact"
                  variant="outlined"
                  label="Phone"
                  hide-details
                  color="blue"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  density="compact"
                  variant="outlined"
                  label="Select Treatment"
                  hide-details
                  color="blue"
                  :items="[
                    'Low Back Pain',
                    'Sciatica',
                    'Neck Pain',
                    'Fibromyalgia',
                    'Headaches',
                    'Work Accident Injuries',
                    'Extremity Pain',
                    'Pinched Nerves',
                    'Car Accident Injuries',
                    'Herniated or Slipped Disc Pain',
                    'Migraines',
                    'TMJ Disorders',
                    'Neuropathy',
                    'Pregnancy related back pain',
                    'Sports injuries',
                    'Arm pain and numbness',
                    'Childhood injuries including birth trauma colic and earaches',
                    'Other',
                  ]"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  density="compact"
                  variant="outlined"
                  label="Preferred Day"
                  hide-details
                  color="blue"
                  :items="[
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                  ]"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  density="compact"
                  variant="outlined"
                  label="Preferred Time Of Day"
                  hide-details
                  color="blue"
                  :items="['Morning', 'Afternoon']"
                />
              </v-col>
            </v-row>
            <v-card-actions class="px-0 mt-4">
              <v-btn class="text-body-2 bg-blue">Book Apointment</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>
