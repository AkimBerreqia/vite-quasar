<template>
    <q-page>
        <q-input v-model="SearchWord.text" onKeyPress="isClick = false" filled/>

        <q-btn filled label="rechercher" style="color:accent;" @click="trigger()" />

        <p v-show="isClick === true">{{researchSmth(Titles, SearchWord.text)}}<strong>{{SearchWord.text}}</strong> <i v-show="visible.find === true" style="color:grey;">{{highLight(Titles, SearchWord.text)}}</i></p>
        
        <div class="q-pa-md">
            <q-ajax-bar
            ref="bar"
            position="bottom"
            color="accent"
            size="10px"
            skip-hijack
            />
        </div>
    </q-page>
</template>


<script setup lang="ts">

import { ref, reactive } from 'vue'

let visible = reactive ({
    find: ref(false)
})

let SearchWord = reactive({
  text: ref('')
})

const Titles = [
    "five hundred years ago, the monkey king caused havoc in heaven",
    "I love you colonel Sanders",
    "le chiffrement"
]

function researchSmth(title, searchWord) {
    if (highLight(title, searchWord) !== "aucun résultat") {
        return "Résultat pour "
    }
}

function highLight(title, searchWord){

    let research = ""

    if (visible.find = true) {

        research += ""
        
        if (searchWord.length > 0) {
            for (let i = 0; i < title.length; i++) {

                if (title[i].toLowerCase().includes(searchWord)) {
                    
                research += title[i] + " // "
                }
            }
        }
        

        if (searchWord.length === 0) {
            research += "aucun résultat"
        }   
    }

    return research
}

const bar = ref(null)

function trigger () {
    changeClick()
    const barRef = bar.value
    barRef.start()

    setTimeout(() => {
    const barRef = bar.value
    if (barRef) {
        barRef.stop()
    }
    })
}

const isClick = ref(false)

function changeClick() {
  isClick.value = !isClick.value
}
</script>