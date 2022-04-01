<template>
  <q-page class="pa-4 text-left align-center">
    <div class="align-center">
      <div class="q-gutter-md">
        <q-carousel
          v-model="action.slide1"
          transition-prev="scale"
          transition-next="scale"
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="300px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="introduction" class="column no-wrap flex-center text-left">
            <q-icon name="key" size="28px" /><br>

            <p v-html="contentData.presentation"></p>
          </q-carousel-slide>
        </q-carousel>

        <q-carousel
          v-model="action.slide2"
          transition-prev="scale"
          transition-next="scale"
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="300px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="cryptographie1" class="column no-wrap flex-center text-left">
            <h2>1.1.1 Cryptographie</h2>

            <q-icon name="key" size="28px" /><br>

            <p v-html="contentData.cryptographie1"></p>
          </q-carousel-slide>

          <q-carousel-slide name="cryptographie2" class="column no-wrap flex-center text-left">
            <q-icon name="key" size="28px" /><br>

            <p v-html="contentData.cryptographie2"></p>
          </q-carousel-slide>
        </q-carousel>

        <q-carousel
          v-model="action.slide3"
          transition-prev="scale"
          transition-next="scale"
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="300px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="cryptanalyse1" class="column no-wrap flex-center text-left">
            <h2>1.1.2 Cryptanalyse</h2>

            <q-icon name="key" size="28px" /><br>

            <p v-html="contentData.cryptanalyse1"></p>
          </q-carousel-slide>

          <q-carousel-slide name="cryptanalyse2" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p v-html="contentData.cryptanalyse2"></p>
          </q-carousel-slide>

          <q-carousel-slide name="cryptanalyse3" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p v-html="contentData.cryptanalyse3"></p>
          </q-carousel-slide>

          <q-carousel-slide name="cryptanalyse4" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p v-html="contentData.cryptanalyse4"></p>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <q-page-scroller expand position="top" :scroll-offset="-1" :offset="[0, 0]">
      <div class="col cursor-pointer q-pa-sm bg-secondary text-white text-center">
        <font size="4">1.1 Introduction (retourner au début de la page)</font>
      </div>
    </q-page-scroller>
  </q-page>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import content from 'src/json/introContent.json'

const contentData = ref(content.introduction)

let action = reactive({
  slide1: ref('introduction'),
  slide2: ref('cryptographie1'),
  slide3: ref('cryptanalyse1')
})
</script>