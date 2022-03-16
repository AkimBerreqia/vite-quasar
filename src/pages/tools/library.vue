<template>
    <q-page>
        <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
                <q-icon name="search" />
            </template>
            </q-input>
        </template>

        <q-input v-model="SearchWord.text" filled type="textarea"/>

        <q-btn filled label="recherche" style="color:pink;" @click="trigger()" />

        <p>Résultats pour <strong style="color:red;">{{SearchWord.text}}</strong> : <i v-show="visible.find = true" style="color:green;">{{highLight(Titles, SearchWord.text)}}</i></p>
    
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
    "I love sushi !"
]

function highLight(title, searchWord){

    let research = "<ul>"

    if (visible.find = true) {
        for (let i = 0; i < title.length; i++) {
            if (title[i].includes(searchWord)) {
                
            research += "<li>" + title[i] + "</li>"
            }            
        }

        if (research.length < 0) {
            
        }

        else if (research.length === 0) {
        
            research += "aucun résultat"
        }

        research += "</ul>";

        document.getElementById("list").innerHTML = research;
    }
    

    else if(visible.find = false) {
        return 'tik tak'
    }

    return research
}



const bar = ref(null)

function trigger () {
    visible.find = !visible.find
    const barRef = bar.value
    barRef.start()

    setTimeout(() => {
    const barRef = bar.value
    if (barRef) {
        barRef.stop()
    }
    })
}
</script>