<template>
    <q-page class="pa-4">
        <div class="q-gutter-md">
            <p v-html="contentData.presentation"></p>
            
            <q-btn unelevated rounded label="Valider la section" v-if="section.first === false" class="align-right" color="primary" @click="section.first = !section.first"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.first === true" class="align-right" color="green" @click="section.first = !section.first"/>
            
            <q-separator inset />

            <h2>1.1.1 Cryptographie</h2>
            
            <p v-html="contentData.cryptographie1"></p>

            <p v-html="contentData.cryptographie2"></p>

            <q-btn unelevated rounded label="Valider la section" v-if="section.second === false" class="align-right" color="primary" @click="section.second = !section.second"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.second === true" class="align-right" color="green" @click="section.second = !section.second"/>
            
            <q-separator inset />

            <h2>1.1.2 Cryptanalyse</h2>

            <p v-html="contentData.cryptanalyse1"></p>

            <p v-html="contentData.cryptanalyse2"></p>

            <p v-html="contentData.cryptanalyse3"></p>

            <p v-html="contentData.cryptanalyse4"></p>

            <q-btn unelevated rounded label="Valider la section" v-if="section.third === false" class="align-right" color="primary" @click="section.third = !section.third"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.third === true" class="align-right" color="green" @click="section.third = !section.third"/>
        </div><br><br>

        <q-page-sticky position="bottom-left" :offset="[5, 5]" class="text-primary bg-#cccccccc">
            <q-btn icon="home" to="/"></q-btn>
            <q-btn icon="keyboard_arrow_right" to="/1.2 Le chiffre de César">1.2 Le chiffre de César</q-btn>
        </q-page-sticky>
        
        <q-page-sticky position="top" expand class="bg-positive text-white text-center">
            <q-toolbar>
                <q-toolbar-title>1.1 Introduction</q-toolbar-title>
            </q-toolbar>
        </q-page-sticky>
    </q-page>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import content from 'src/json/introContent.json'

const contentData = ref(content.introduction)

let section = reactive ({
    first: ref(false),
    second: ref(false),
    third: ref(false)
})
</script>