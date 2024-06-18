<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import ThemeList from './ThemeList.vue';
import Chatbot from './Chatbot.vue';

const THEME_API_URL = 'http://127.0.0.1:3000/api/themes'
let path = useRoute().path.split('/')
const theme = ref({})
let path_theme = path[path.length - 1]
watchEffect(async () => {
    theme.value = await (await fetch(THEME_API_URL + '/' + path_theme)).json()
})
</script>
<template>
    <v-container>
        <v-row cols="12">
            <v-col cols="6">
                <v-card :title="theme.original_title" >
                    <v-card-subtitle>
                            {{ formatDate(theme.created_at) }}
                    </v-card-subtitle>
                    <v-card-text>
                        {{ theme.summary }}
                    </v-card-text>
                <template v-slot:prepend>
                  <v-icon icon="fa-pencil-square" v-if="theme.source === 'custom'" ></v-icon>
                  <v-icon icon="fa-star" v-if="theme.source === 'top'"></v-icon>
                </template>
                </v-card>
            </v-col>
            <v-col cols="3">
                <ThemeList :themes="theme.recurrent" heading="Recurrent" compact />
            </v-col>
            <v-col cols="3">
                <ThemeList :themes="theme.sporadic" heading="Disagreements" compact />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
            <Chatbot :context="theme.related"/>
            </v-col>
        </v-row>
        <v-row cols="12">
            <v-col cols="12">
                <ArticleList :articles="theme.related" heading="Related Articles" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    methods: {
        formatDate(date) {
            return date ? date.split('T')[0] : '';
        }
    }
}
</script>