<template>
    <v-carousel hide-delimiters :show-arrows="false" height="70vh" cycle interval="3600000">
        <v-carousel-item>
            <v-parallax :src="blog.posts[$route.params.id].image"
                lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg"
                gradient="to bottom, rgba(0,0,0,.6), rgba(0,0,0,.6)">
                <v-container class="pa-0">
                    <v-card height="70vh" max-width="100%" color="transparent" class="d-flex align-center" flat>
                        <v-card-text class="white--text d-flex flex-column align-start">
                            <span class="
                      text-h5 text-sm-h4 text-lg-h3 text-white
                      font-weight-bold
                    ">Recent Blogs</span>
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-parallax>
        </v-carousel-item>
    </v-carousel>

    <v-container>
        <v-row>
            <v-col cols="12" sm="3">
                <v-img :src="blog.posts[$route.params.id].image" cover class="rounded-lg" />
            </v-col>
            <v-col cols="12" sm="9">
                <v-card flat>
                    <v-card-text class="text-h6 font-weight-bold">
                        {{ blog.posts[$route.params.id].title }}
                    </v-card-text>

                    <v-card-text>
                        <p>{{ blog.posts[$route.params.id].body }}</p>
                    </v-card-text>

                    <v-card-text class="px-0 pt-0">
                        <v-list-item density="compact" v-for="(reason, i) in blog.posts[$route.params.id].reasons" :key="i">
                            <v-list-item-title>
                                <v-icon color="blue" size="small" class="mr-2">mdi-check</v-icon>
                                {{ reason }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup>
import { useBlogStore } from '@/store/blog'

const blog = useBlogStore()
</script>
