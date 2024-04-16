<script setup>
import { ref } from 'vue'

let id = 0
const newSum = ref('')
const summary = ref([
  { 'id': id++, 'title': 'AI Agents' },
  { 'id': id++, 'title': 'Leo Varadkar' },
  { 'id': id++, 'title': 'Whats better react or vue?' }
])
async function onAddSum(event) {
  console.log("adding summary")
  const results = await event
  if(!results.valid) return
  summary.value.push({ 'id': id++, 'title': newSum.value })
  newSum.value = ''
}
const rules = [
  value => {
    if (value && value !== "")  return true
    return 'Theme is required'
  },
]
</script>
<template>
  <v-container class="fill-height">
    <v-responsive>
      <v-row cols="12">
          <v-col cols="12">
              <v-img class="mb-4" height="150" src="@/assets/dassie_trans.png" />
              <v-card title="welcome" text="Welcome to Dassie"> </v-card>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12">
              <v-card title="Themes">
                  <v-list >
                      <v-list-item v-for="theme in summary" :key="theme.id" :title="theme.title" :to="'theme/'+ theme.title" link></v-list-item>
                  </v-list>
                    <li>
                      <v-form @submit.prevent="onAddSum">
                        <v-text-field variant="outlined" v-model="newSum" placeholder="new theme"
                          :rules="rules" />
                        <v-btn class="mt-2" type="submit" block>Add</v-btn>
                      </v-form>
                    </li>
                </v-card>
            </v-col>
        </v-row>

      </v-responsive>
    </v-container>
  </template>
