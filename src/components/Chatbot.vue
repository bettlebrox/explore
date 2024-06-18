<template>
    <v-container>
        <v-card>
            <v-card-title>Chat with</v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item v-for="(message, index) in messages" :key="index" class="message">
                        <v-card :class="{ 'd-flex flex-row-reverse': message.role === 'system' }">
                            <v-chip label style="height:auto;white-space: normal;">
                                <v-card-subtitle>{{ message.name }}</v-card-subtitle>
                                <v-card-text>
                                    <vue-markdown :source="message.content" />
                                    <v-progress-linear indeterminate rounded v-if="message.waiting"></v-progress-linear>
                                </v-card-text>
                            </v-chip>
                        </v-card>
                    </v-list-item>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <v-text-field append-outer-icon="send" v-model="newMessage" placeholder="Type a message"
                    @keyup.enter="sendMessage"></v-text-field>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios';
import VueMarkdown from 'vue-markdown-render'
export default {
    props: {
        context: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            messages: [],
            newMessage: '',
            src: '# header'
        };
    },
    components: {
        VueMarkdown
    },
    methods: {
        async sendMessage() {
            if (this.newMessage.trim() === '') return;

            // Add user's message to the chat
            this.messages.push({ content: this.newMessage, role: 'user', name: 'Me' });

            const userMessage = this.newMessage;
            this.newMessage = '';

            // Call OpenAI API (this is a placeholder - you need to implement the API call)
            this.getBotResponse(userMessage).then(
                (response) => {
                    this.messages.pop()
                    this.messages.push({ content: response, role: 'system', name: 'Dassie' });
                }
            )
            this.messages.push({ content: '...', role: 'system', waiting: true, name: 'Dassie' });
        },
        async getBotResponse(userMessage) {
            try {
                var completion = [{ role: "system", content: "You are an expert research assistant. answer questions based on the following articles. if the answer can't be found answer 'not found'" + this.context.map(a => a.text).join('---') }]
                this.messages.forEach(element => {
                    completion.push(element)
                });
                const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                    messages: completion,
                    max_tokens: 2000,
                    model: 'gpt-4o'
                }, {
                    headers: {
                        'Authorization': `Bearer ` + import.meta.env.VITE_OPENAI_API_KEY,
                        'Content-Type': 'application/json'
                    }
                });

                return response.data.choices[0].message.content.trim();
            } catch (error) {
                console.error('Error fetching response from OpenAI:', error);
                return 'Sorry, there was an error processing your request.';
            }
        }
    }
};
</script>

<style scoped>
.message {
    margin-bottom: 10px;
}

.user {
    text-align: right;
}

.bot {
    text-align: left;
}
</style>