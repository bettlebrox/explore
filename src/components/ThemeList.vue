<template>
  <v-card :title="heading" outlined>
    <v-list lines="compact?three">
      <v-list-item v-for="theme in themes" :key="theme.id" :title="theme.original_title" :to="themeRoute(theme.title)"
        link>
        <template v-slot:prepend>
          <v-avatar color="grey-lighten-4 ">
            <v-icon icon="fa-pencil-square" v-if="theme.source === 'custom'"></v-icon>
            <v-icon icon="fa-star" v-if="theme.source === 'top'"></v-icon>
          </v-avatar>
        </template>
        <div v-if="!compact">
          <v-list-item-subtitle>{{ formatDate(theme.updated_at) }}
              <v-icon size="x-small" icon="fa-file-text-o"></v-icon>
              1
              <v-icon size="x-small" icon="fa-link"></v-icon>
              1
              <v-icon size="x-small" icon="fa-unlink"></v-icon>
              1
            </v-list-item-subtitle>
            <div class="font-body-1 font-italic font-weight-light">
              {{ theme.summary }}
            </div>
            </div>  
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
    heading: {
      type: String,
      required: true
    },
    compact: {
      type: Boolean,
      required: false,
      default: false
    },
    max: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    formatDate(date) {
      return date.split('T')[0]
    },
    themeRoute(title) {
      return this.$router.resolve({
        name: 'theme',
        params: {
          id: title
        }
      })
    }
  }
}
</script>