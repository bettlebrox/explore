<template>
    <v-card :title="heading" outlined>
            <v-list>
              <v-list-item v-for="theme in themes" :key="theme.id" :title="theme.original_title" :to="themeRoute(theme.title)"
                link>
                <div v-if="!compact">
                  <v-list-item-subtitle>{{ theme.summary }}</v-list-item-subtitle>
                  <v-list-item-subtitle>{{ formateDate(theme.created_at) }}</v-list-item-subtitle>
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
    heading:{
        type: String,
        required: true
    },
    compact: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods:{
    formateDate(date){
      return date.split('T')[0]
    },
    themeRoute(title){
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