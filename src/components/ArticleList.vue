<template>
    <v-card :title="heading" outlined>
            <v-list>
              <v-list-item v-for="article in articles" :key="article.id" :title="article.original_title" :href="article.url"
                link>
                <v-list-item-subtitle wrap>{{ article.summary }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ article.url }}</v-list-item-subtitle>
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
    heading:{
        type: String,
        required: true
    }
  }
}
</script>