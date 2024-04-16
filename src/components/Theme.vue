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
    messages: [
        { 'id': mid++,'origin':'bot', 'message': 'Hey ask me anything about AI in Software' },
        { 'id': mid++,origin:'human', 'theme': 'why' },
        { 'id': mid++, origin:'bot','theme': "I've got access to your brower history so I know what you know" }
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
                    <v-list >
                        <v-list-item v-for="theme in detail.themes" :key="theme.id" :title="theme.title" href="info/bob" link></v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card title="Disagreements">
                    <v-list >
                        <v-list-item v-for="theme in detail.disagreements" :key="theme.id" :title="theme.title" :href="theme.title"></v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-row cols="12">
            <v-textarea label="Label" variant="outlined"></v-textarea>
        </v-row>
    </v-container>
</template>