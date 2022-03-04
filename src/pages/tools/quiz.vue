<template>
  <q-page class="pa-4 text-center">
    <h1>Exemple de quiz</h1>
    <div v-show="index === counter" v-for="(question, index) in myQuizQuestions" :key="question.id">
        <h2>Question numéro {{index + 1}}</h2>
        <pre v-if="false">{{question}}</pre>
        <p class="question">
        {{question.question}}
        </p>
        <div class="q-pa-md">
          <div v-for="(value, key) in question.answers" class="q-gutter-sm">
            <q-radio v-model="answers[index]" :key="key" :val="value" :label="value"/>
          </div>
          
          <div v-show="isClick === true">
            <div v-if="myQuizQuestions[index].correctAnswer === answers[index]">
              <p class="q-px-sm" style="color:green;">Bravo</p>
            </div>

            <div v-else>
              <p class="q-px-sm" style="color:red;">Dommage</p>
            </div>
          </div>

            
        </div>
    </div>
    <q-btn-group>
      <q-btn :disable="counter === 0" label="Précédent" @click="previous()"/>
      <q-btn :disable="counter === 1" label="Suivant" @click="next()"/>
      <q-btn v-if="counter > 0" label="Recommencer" @click="restart()"/>
      <q-btn label="Valider" @click="changeClick()"/>
    </q-btn-group>
    <pre>{{myQuizQuestions.question}}</pre>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

const myQuizQuestions = reactive([
  {
      id: ref(0),
    question: "What is 10/2?",
    answers: {
      a: '3',
      b: '5',
      c: '115',

    },
    choice: ref(''),
    correctAnswer: '5'
  },
  {
      id: ref(1),
    question: "What is 30/3?",
    answers: {
      a: '3',
      b: '5',
      c: '10'
    },
    choice: ref(''),
    correctAnswer: '10'
  }
])

const answers = reactive([])

const isClick = ref(false)

function changeClick() {
  isClick.value = !isClick.value
}

const counter = ref(0)

function restart() {
  counter.value = 0
  isClick.value = false
}

function next() {
  counter.value++
  isClick.value = false
}

function previous() {
  counter.value--
  isClick.value = false
}

</script>

<style lang="scss" scoped></style>