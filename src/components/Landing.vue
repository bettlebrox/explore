<script setup>
import axios from 'axios';
import { ref, watchEffect } from 'vue'

let id = 0
const newSum = ref('')
const THEME_API_URL = 'http://127.0.0.1:3000/api/themes'
const top_themes = ref([])
const latest_themes = ref([])
const custom_themes = ref([])
const loading_state = ref(false)
const error_state = ref(false)

async function onAddSum(event) {
  console.log("adding theme")
  loading_state.value = true
  error_state.value = false
  const results = await event
  if (!results.valid) return
  const theme = { 'title': newSum.value}
  axios.post(THEME_API_URL, theme).then(
    response =>
    custom_themes.value= [...custom_themes.value,...response.data.themes]
  ).catch(function(error){
    if(error.response){
      error_state.value = true
    }
  })
  .finally(() => {
    loading_state.value = false
  })
}
const rules = [
  value => {
    if (value && value !== "") return true
    return 'Theme is required'
  },
]



watchEffect(async () => {
  latest_themes.value = await (await fetch(THEME_API_URL + '?sortField=updated_at&max=3')).json()
})

watchEffect(async () => {
  top_themes.value = await (await fetch(THEME_API_URL + '?sortField=count_association&max=3')).json()
})

watchEffect(async() => {
  custom_themes.value = await (await fetch(THEME_API_URL + '?sortField=updated_at&source=custom&max=3')).json()
})

</script>
<template>

  <v-container class="fill-height">
    <v-responsive>
      <v-row>
        <v-col cols="6">
          <ThemeList :themes="latest_themes" heading="Latest Themes" />
        </v-col>
        <v-col cols="6">
          <ThemeList :themes="top_themes" heading="Top Themes" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <ThemeList :themes="custom_themes" heading="Custom Themes" />
          <v-card>
            <v-form @submit.prevent="onAddSum">
              <v-alert v-if="error_state === true" type="error">Failed to add</v-alert>
              <v-card-actions>
                
              <v-text-field :disabled="loading_state===true" variant="outlined" v-model="newSum" placeholder="Add a new theme" :rules="rules" clearable />
              <v-progress-circular v-if="loading_state" indeterminate></v-progress-circular>
              </v-card-actions>
            </v-form>

          </v-card>
        </v-col>

      </v-row>

    </v-responsive>
  </v-container>
</template>
