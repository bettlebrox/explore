<template>
  <v-card :title="heading" outlined>
    <v-list>
      <v-list-item v-for="article in articles" :key="article.id" :title="article.original_title" :href="article.url"
        link>
        <v-list-item-subtitle >{{ article.url }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ formatDate(article.logged_at) }}</v-list-item-subtitle>
        <span class="font-weight-light">{{ article.summary }}</span>
          <v-chip v-for="theme in article.themes" :to="'theme/' + theme" link>
          {{ theme }}
          </v-chip>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    },
    heading: {
      type: String,
      required: true
    }
  },
  methods:{
    formatDate(date) {
      return date.split('T')[0] + " " + date.split('T')[1].split('.')[0]
    },
  }
}
</script>