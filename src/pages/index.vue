<template>
  <q-page>    
    <div class="column flex-center pa-4">
      <h2></h2>

      <div class="q-gutter-md">
        <q-carousel
          v-model="action.slide1"
          animated
          padding
          height="250px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="presentation" class="column no-wrap">
              <h2>1.0.1 Présentation</h2>

              <p>Bienvenue au cours interctif de cryptologie. Pour commencer votre apprentissage, cliquez sur le bouton ci-dessous, ou alors, servez vous du sommaire pour naviguer entre les sections.</p><br>
      
              <q-btn elevated rounded><router-link to="/1.1 Introduction">Commencer le cours</router-link></q-btn>
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
              <h2>1.0.2 Sommaire</h2>

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


    <q-page-sticky position="bottom-left" :offset="[5, 5]" class="bg-#cccccccc">
      <q-btn icon="keyboard_arrow_right" to="/1.1 Introduction">1.1 Introduction</q-btn>
    </q-page-sticky>
    
    <q-page-sticky position="top" expand class="bg-positive text-white text-center">
      <q-toolbar>
        <q-toolbar-title>1.0 Index</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

let action = reactive({
  slide1: ref('presentation'),
  slide2: ref('sommaire')
})
</script>

<style lang="scss" scoped></style>
