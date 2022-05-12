<!-- Source : COURSES.21-LEARNING.COM, « Contenu de l'introduction à la cryptologie », 2019, consulté le 12 mai 2022, <https://courses.21-learning.com/runestone/books/published/doi-2gy-20-21/crypto/crypto-introduction.html> -->

<template>
    <q-page class="pa-4">
        <div class="q-gutter-md">
            <p v-html="contentData.presentation"></p>
            
            <q-btn unelevated rounded label="Valider la section" v-if="section.first === false" class="align-right" color="primary" @click="section.first = !section.first"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.first === true" class="align-right" color="green" @click="section.first = !section.first"/>
            
            <q-separator inset />

            <h1>1.1.1 Cryptographie</h1>
            
            <p v-html="contentData.cryptographie1"></p>

            <p v-html="contentData.cryptographie2"></p>

            <q-btn unelevated rounded label="Valider la section" v-if="section.second === false" class="align-right" color="primary" @click="section.second = !section.second"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.second === true" class="align-right" color="green" @click="section.second = !section.second"/>
            
            <q-separator inset />

            <h1>1.1.2 Cryptanalyse</h1>

            <p v-html="contentData.cryptanalyse1"></p>

            <p v-html="contentData.cryptanalyse2"></p>

            <p v-html="contentData.cryptanalyse3"></p>

            <p v-html="contentData.cryptanalyse4"></p>
        </div><br><br>

        <q-btn unelevated rounded label="Valider la section" v-if="section.third === false" class="align-right" color="primary" @click="section.third = !section.third"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.third === true" class="align-right" color="green" @click="section.third = !section.third"/>


        <navigatorBtn />
    </q-page>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import content from 'src/json/introContent.json'
import navigatorBtn from 'src/components/navigatorOneToolbar.vue'

const contentData = ref(content.introduction)

let section = reactive ({
    first: ref(false),
    second: ref(false),
    third: ref(false)
})
</script>