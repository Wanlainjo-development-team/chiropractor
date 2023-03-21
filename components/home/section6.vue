<template>
  <v-container class="py-16">
    <v-card flat>
      <v-card-subtitle class="px-0 text-body-1">OUR BLOG</v-card-subtitle>
      <v-card-title class="px-0 text-grey-darken-3 text-h5 text-sm-h4">
        <span class="font-weight-bold">Recent Articles and News</span>
      </v-card-title>
      <v-card-text class="px-0 text-body-2 pb-0">Since its founding over 30 years ago, Metronet Chiropractic Clinic has
        been providing tips and tricks on chiropractic care:</v-card-text>
    </v-card>
    <v-divider class="my-5" />

    <v-row justify="space-between">
      <v-col cols="12" sm="6" v-for="(blog, i) in [blog.posts[0], blog.posts[1]]" :key="i">
        <v-card flat>
          <v-row justify="space-between" no-gutters>
            <v-col cols="12" sm="5">
              <v-img
                :src="blog.image"
                lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg"
                class="rounded-lg" aspect-ratio="1.5" cover />
            </v-col>
            <v-col cols="12" sm="7">
              <v-card flat>
                <v-card-text class="text-body-2 font-weight-bold pb-0">{{ blog.title }}</v-card-text>
                <v-card-text>
                  <span class="text-caption text-grey-darken-3">{{ (blog.body).slice(1, 140) }}...</span>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { useBlogStore } from '@/store/blog'

const blog = useBlogStore()
</script>