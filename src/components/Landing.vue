<script setup>
import { ref, watchEffect } from 'vue'

let id = 0
const newSum = ref('')
const summary = ref([
  { 'id': id++, 'title': 'AI Agents', summary: 'The common theme among the texts is the introduction and discussion of AI software engineers, such as Devin, and their impact on software development.' },
  { 'id': id++, 'title': 'Leo Varadkar', summary: 'Leo Varadkar has resigned as prime minister of Ireland' },
  { 'id': id++, 'title': 'Whats better react or vue?', summary: 'The never ending discussion about which javascript framework is better' }
])
async function onAddSum(event) {
  console.log("adding summary")
  const results = await event
  if (!results.valid) return
  summary.value.push({ 'id': id++, 'title': newSum.value })
  newSum.value = ''
}
const rules = [
  value => {
    if (value && value !== "") return true
    return 'Theme is required'
  },
]

const THEME_API_URL = 'http://127.0.0.1:3000/api/themes'

const top_themes = ref([])
const latest_themes = ref([])

watchEffect(async () => {
latest_themes.value = await (await fetch(THEME_API_URL + '?sortField=createdDate')).json()
})

watchEffect(async () => {
top_themes.value = await (await fetch(THEME_API_URL + '?sortField=top')).json()
})


</script>
<template>

  <v-container class="fill-height">
    <v-responsive>
      <v-sheet height="200px">
        <v-container class="fill-height">
          <v-row align="center" justify="center">
            <h1 class="text-center display-1">Welcome, I've organised some themes for you</h1>
          </v-row>
        </v-container>
      </v-sheet>
      <v-row>
        <v-col cols="6">
          <ThemeList :themes="latest_themes" heading="Latest Themes" />
          <v-form @submit.prevent="onAddSum">
            <v-text-field variant="outlined" v-model="newSum" placeholder="new theme" :rules="rules" />
            <v-btn class="mt-2" type="submit" block>Add</v-btn>
          </v-form>
        </v-col>
        <v-col cols="6">
          <ThemeList :themes="top_themes" heading="Top Themes" />
        </v-col>

      </v-row>

    </v-responsive>
  </v-container>
</template>
