<template>
    <v-app-bar>
        <a href="/" style="height: 50px;width: 50px;">
            <v-img height="150" src="@/assets/dassie_trans.png" position="left"/>
        </a>
        <v-app-bar-title position="left">Dassie, your research agent</v-app-bar-title>
        <v-toolbar-items>
            <v-btn to="/" color="primary" text small>
                Home
            </v-btn>
            <v-btn to="/about" color="primary" text small>
                About
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>