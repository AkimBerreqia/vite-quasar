<template>
  <q-page>    
    <div class="column flex-center pa-4">
      <h2></h2>

      <div class="q-gutter-md">
        <q-carousel
          v-model="action.slide"
          transition-prev="scale"
          transition-next="scale"
          animated
          control-color="white"
          navigation
          padding
          arrows
          height="250px"
          class="text-primary shadow-1 rounded-borders"
        >
          <q-carousel-slide name="cryptographie1" class="column no-wrap">
              <h2>1.0.1 Présentation</h2>

              <p>Bienvenue au cours interctif de cryptographie. Pour commencer votre apprentissage, cliquez sur le bouton ci-dessous, ou alors, servez vous du sommaire pour naviguer entre les sections.</p><br>
      
              <q-btn elevated rounded><router-link to="/caesar/1.1 Introduction">Commencer le cours</router-link></q-btn>
          </q-carousel-slide>
        </q-carousel>

        <q-carousel
          v-model="action.slide"
          transition-prev="scale"
          transition-next="scale"
          animated
          control-color="white"
          navigation
          padding
          arrows
          height="250px"
          class="text-primary shadow-1 rounded-borders"
        >
          <q-carousel-slide name="cryptographie1" class="column no-wrap">
              <h2>1.0.2 Sommaire</h2>

              <ul class="text-blue">
                <li><router-link to="/caesar/1.1 Introduction">1.1 Introduction</router-link></li>
                <li><router-link to="/caesar/1.2 Le chiffre de César">1.2 Le chiffre de César</router-link></li>
                <li><router-link to="/caesar/1.3 Attaque par force brute">1.3 Attaque par force brute</router-link></li>
                <li><router-link to="/caesar/1.4 Systèmes de substitution monoalphabétique">1.4 Systèmes de substitution monoalphabétique</router-link></li>
                <li><router-link to="/caesar/1.5 Attaque par fréquence">1.5 Attaque par fréquence</router-link></li>
                <li><router-link to="/caesar/1.6 Petit lexique de la cryptologie">1.6 Petit lexique de la cryptologie</router-link></li>
              </ul>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'

let action = reactive({
    slide: ref('cryptographie1')
})

let text = reactive({
  q1: ref(''),
  q3: ref(''),
  q4: ref('')
})
</script>

<style lang="scss" scoped></style>
