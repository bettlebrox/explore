<template>
    <v-card title="Top Themes" outlined>
            <v-list>
              <v-list-item v-for="theme in themes" :key="theme.id" :title="theme.title" :to="'theme/' + theme.title"
                link>
                <v-list-item-subtitle>{{ theme.summary }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
</template>
<script>
export default {
  props: {
    themes: {
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