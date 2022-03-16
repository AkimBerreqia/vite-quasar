<template>
    <q-page>
        <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
                <q-icon name="search" />
            </template>
            </q-input>
        </template>

        <q-input v-model="SearchWord.text" onKeyPress="isClick = false" filled/>

        <q-btn filled label="recherche" style="color:accent;" @click="trigger()" />

        <p v-show="isClick === true"><strong>Résultats pour <strong>{{SearchWord.text}}</strong> :</strong> <i v-show="visible.find = true" style="color:grey;">{{highLight(Titles, SearchWord.text)}}</i></p>
    
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
    "I love sushi !",
    "le chiffrement"
]

function highLight(title, searchWord){

    let research = ""

    if (visible.find = true) {
        research += ""
        for (let i = 0; i < title.length; i++) {
            if (title[i].includes(searchWord)) {
                
            research += title[i]
            }            
        }

        if (title.length < 0) {
            
        }

        else {
        
            research += "aucun résultat"
        }
    }
    

    else if(searchWord.length === 0) {
        research += 'tik tak'
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