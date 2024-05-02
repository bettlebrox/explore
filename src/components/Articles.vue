<script setup>
import { ref, watchEffect } from 'vue'

const ARTICLES_API_URL = 'http://127.0.0.1:3000/api/articles'

const latest_articles = ref([])

watchEffect(async () => {
latest_articles.value = await (await fetch(ARTICLES_API_URL + '?sortField=createdDate')).json()
})



</script>
<template>

  <v-container class="fill-height">
    <v-responsive>
      <v-sheet height="200px">
        <v-container class="fill-height">
          <v-row align="center" justify="center">
            <h1 class="text-center display-1">Welcome, here's your latest articles</h1>
          </v-row>
        </v-container>
      </v-sheet>
      <v-row>
        <v-col cols="6">
          <ArticleList :articles="latest_articles" heading="Latest Articles" />
        </v-col>

      </v-row>

    </v-responsive>
  </v-container>
</template>
