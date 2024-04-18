<script setup>
import { ref } from 'vue'
let mid = 0
const detail = ref({
    'id': 1,
    'title': 'AI in software',
    "summary": "The common theme among the texts is the introduction and discussion of AI software engineers, such as Devin, and their impact on software development.",
    "disagreement": "There are disagreements regarding the capabilities and implications of AI software engineers like Devin, with some questioning their ability to replace human software engineers.",
    "themes": [
        { id: 1, title: "Introduction of AI software engineers like Devin" },
        { id: 2, title: "Discussion on the impact of AI software engineers on software development" }
    ],
    "disagreements": [
        { id: 1, title: "Debate on whether AI software engineers can replace human software engineers" }
    ],
    "articles": [
        { id: mid++, title: 'Introducing Devin, the first AI software engineer', url: 'https://www.cognition-labs.com/introducing-devin', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: mid++, title: 'Write less, Ship more', url: 'https://sourcegraph.com/demo/cody', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: mid++, title: 'Github Copilot - Your AI pair programmer', url: 'https://github.com/features/copilot', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },

    ]
})
</script>
<template>
    <v-container>
        <v-row cols="12">
            <v-col cols="12">
                <v-card :title="detail.title" :text="detail.summary"> </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-card title="Themes">
                    <v-list>
                        <v-list-item v-for="theme in detail.themes" :key="theme.id" :title="theme.title" href="info/bob"
                            link></v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card title="Disagreements">
                    <v-list>
                        <v-list-item v-for="theme in detail.disagreements" :key="theme.id" :title="theme.title"
                            :href="theme.title"></v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-row cols="12">
            <v-col cols="12">
                <v-card title="Related Articles" outlined>
                    <v-list>
                        <v-list-item v-for="article in detail.articles" :key="article.id" :title="article.title" :href="article.url" link>
                            <v-list-item-subtitle>{{ article.text }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>