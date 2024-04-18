<script setup>
import { ref } from 'vue'

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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
          <v-card title="Recent Themes" outlined>
            <v-list>
              <v-list-item v-for="theme in summary" :key="theme.id" :title="theme.title" :to="'theme/' + theme.title"
                link>
                <v-list-item-subtitle>{{ theme.summary }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
            <li>
              <v-form @submit.prevent="onAddSum">
                <v-text-field variant="outlined" v-model="newSum" placeholder="new theme" :rules="rules" />
                <v-btn class="mt-2" type="submit" block>Add</v-btn>
              </v-form>
            </li>
          </v-card>
        </v-col>
        <v-col cols="6">
          <ThemeList :themes="summary" heading="Top Themes" />
        </v-col>
      </v-row>

    </v-responsive>
  </v-container>
</template>
