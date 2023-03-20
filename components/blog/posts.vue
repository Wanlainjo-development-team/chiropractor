<template>
  <v-container>
    <v-row>
      <v-col v-for="(post, index) in blog.posts" :key="index" cols="12">
        <v-row>
          <v-col cols="12" sm="3">
            <v-img :src="post.image" :alt="post.title" class="rounded-lg" />
          </v-col>
          <v-col cols="12" sm="9">
            <v-card flat>
              <v-card-text class="text-h6 font-weight-bold">
                {{ post.title }}
              </v-card-text>
              <v-card-text>
                <p>{{ post.body }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn :to="`blog/${index}`" variant="text" class="text-body-2 text-blue">Read More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useBlogStore } from '@/store/blog'

const blog = useBlogStore()
</script>
