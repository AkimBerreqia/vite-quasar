<template>
    <q-page>
        <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
                <q-icon name="search" />
            </template>
            </q-input>
        </template>

        <q-btn label="recherche" style="color:pink;" @click="highLight(text.q1, Searchword)" />

        <q-input v-model="text.q1" filled type="textarea"/>

        <p>{{text.q1}} {{highLight(text.q1, Searchword)}}</p>
        <p>Exemple singe : {{highLight(Searchword, Title)}}</p>
    </q-page>
</template>


<script setup lang="ts">

import { ref, reactive } from 'vue'

let text = reactive({
  q1: ref('')
})

let Searchword = "Monkey King"

let Title = "five hundred years ago, the monkey king caused havoc in heaven"

function clicked() {
    Searchword = text.q1
    return Searchword
}

function highLight(title, searchWord){

    title.toLowerCase()
    searchWord.toLowerCase()

    if(title.includes(searchWord)) {

    return title
    }

    else {

    return "aucun résultat"
    }
}
</script>