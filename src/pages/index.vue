<template>
  <q-page>    
    <div class="column flex-center pa-4">
      <div class="q-gutter-md">
        <q-carousel
          v-model="action.slide1"
          animated
          padding
          height="250px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="presentation" class="column no-wrap">
              <h1>1.0.1 Présentation</h1>

              <p>Bienvenue au cours interactif de cryptologie. Pour commencer votre apprentissage, cliquez sur le bouton ci-dessous, ou alors, servez vous du sommaire pour naviguer entre les sections.</p><br>
      
              <q-btn elevated rounded><router-link style="color:#33abd6;" to="/1.1 Introduction">Commencer le cours</router-link></q-btn>
          </q-carousel-slide>
        </q-carousel>

        <q-carousel
          v-model="action.slide2"
          animated
          padding
          height="250px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="sommaire" class="column no-wrap">
              <h1>1.0.2 Sommaire</h1>

              <ul style="color:darkblue;">
                <li><router-link to="/1.1 Introduction">1.1 Introduction</router-link></li>
                <li><router-link to="/1.2 Le chiffre de César">1.2 Le chiffre de César</router-link></li>
                <li><router-link to="/1.3 Attaque par force brute">1.3 Attaque par force brute</router-link></li>
                <li><router-link to="/1.4 Systèmes de substitution monoalphabétique">1.4 Systèmes de substitution monoalphabétique</router-link></li>
                <li><router-link to="/1.5 Attaque par fréquence">1.5 Attaque par fréquence</router-link></li>
                <li><router-link to="/1.6 Petit lexique de la cryptologie">1.6 Petit lexique de la cryptologie</router-link></li>
              </ul>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>


    <navigatorBtn />
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import navigatorBtn from 'src/components/navigatorIndexToolbar.vue'

let action = reactive({
  slide1: 'presentation',
  slide2: 'sommaire'
})
</script>
