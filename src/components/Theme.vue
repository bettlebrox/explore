<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import ThemeList from './ThemeList.vue';

const THEME_API_URL = 'http://127.0.0.1:3000/api/themes'
let path = useRoute().path.split('/')
const theme = ref({title:path[path.length-1], summary:null})
const path_theme = ref(path[path.length-1])
watchEffect(async () => {
    theme.value = await (await fetch(THEME_API_URL + '/'+path_theme.value)).json()
})
let mid = 0
</script>
<template>
    <v-container>
        <v-row cols="12">
            <v-col cols="8">
                <v-card :title="theme.original_title" :subtitle="theme.created_at" :text="theme.summary"> </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <ArticleList :articles="theme.related" heading="Related Artilces" />
            </v-col>
            <v-col cols="6">
                <ThemeList :themes="theme.disagrements" heading="Disagreements" />
            </v-col>
        </v-row>
        <v-row cols="12">
            <v-col cols="12">
                <v-card title="Related Articles" outlined>
                    <v-list>
                        <v-list-item v-for="article in theme.articles" :key="article.id" :title="article.title" :href="article.url" link>
                            <v-list-item-subtitle>{{ article.text }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>