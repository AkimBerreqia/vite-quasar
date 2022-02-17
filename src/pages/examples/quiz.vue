<template>
  <q-page class="pa-4 text-center">
    <h1>Exemple de quiz</h1>
    <div v-for="(question, index) in myQuestions" :key="question.id">
        <h2>Question numéro {{index + 1}}</h2>
        <pre v-if="false">{{question}}</pre>
        <p class="question">
        {{question.question}}
        </p>
        <div class="q-pa-md">
            <div class="q-gutter-sm">
                <q-radio v-for="(value, key) in question.answers" v-model="answers[index]" :key="key" :val="value" :label="value" />
            </div>

            <div class="q-px-sm">
            Your selection is: <strong>{{ answers[index] }}</strong>
            </div>
        </div>
    </div>
    <pre>{{myQuestions}}</pre>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

const myQuestions = reactive([
  {
      id: 0,
    question: "What is 10/2?",
    answers: {
      a: '3',
      b: '5',
      c: '115',

    },
    correctAnswer: 'b'
  },
  {
      id: 1,
    question: "What is 30/3?",
    answers: {
      a: '3',
      b: '5',
      c: '10'
    },
    correctAnswer: 'c',
  }
])

const answers = reactive([])

</script>

<style lang="scss" scoped></style>
