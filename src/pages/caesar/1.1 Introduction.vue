<template>
    <q-page class="pa-4 text-left align-left">
        <div class="q-pa-md q-gutter-sm">
            <q-breadcrumbs unelevated rounded>
            <q-breadcrumbs-el icon="home" label="1 Cryptologie et codage de l'informatation" to="/" />
            <q-breadcrumbs-el label="1.1 Introduction"/>
            </q-breadcrumbs>
        </div>
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
        </div><br>

        <q-btn unelevated rounded label="1.2 le chiffre de César (page suivante)" href="#/caesar/1.2 le chiffre de césar" color="black" class="text-white"></q-btn>

        <q-page-scroller position="top-right" :scroll-offset="0">
            <div class="col cursor-pointer q-pa-sm bg-secondary text-white text-center">
                <font size="4">Retourner au début de la page</font>
            </div>
        </q-page-scroller>
    </q-page>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import content from '~/json/exemple.json'

const contentData = ref(content.introduction)

let section = reactive ({
    first: ref(false),
    second: ref(false),
    third: ref(false)
})
</script>