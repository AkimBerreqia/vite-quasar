<template>
    <q-page>
        <q-btn label="recherche" style="color:pink;" @click="clicked()" />

        <q-input v-model="text.q1" filled type="textarea"/>

        <p v-show="clicked() === true">{{highLight(Title, Searchword)}}</p>
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
    toShow = true
    return toShow, Searchword
}

function highLight(title, searchWord){

    if(title.includes(this.searchWord)) {

    title = this.searchWord
    return title
    }

    else {

    return title
    }
}
</script>