<template>
    <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 1050px">
          <q-input bottom-slots v-model="myQuestions.rodolphe" label="Réponse :" counter maxlength="56" :dense="dense" style='text-transform:uppercase'>
            <template v-slot:hint>
            <p>{{respondAnswer(myQuestions.rodolphe, myQuestions.correctAnswer1, 56)}}</p>
            </template>
          </q-input>
        </div>
    </div>

    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 1050px">
        <q-input bottom-slots v-model="myQuestions.cesar4" label="Réponse :" counter maxlength="13" :dense="dense" style='text-transform:uppercase'>
          <template v-slot:hint>
          <p>{{respondAnswer(myQuestions.cesar4, myQuestions.correctAnswer2, 13)}}</p>
          </template>
        </q-input>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const myQuestions = reactive({
  rodolphe: '',
  correctAnswer1: 'JETINVITEAUCINEMADEMAINSOIRAVINGTHEURESREJOINSMOIALAGARE',
  counterLength1: 56,
  cesar4: '',
  correctAnswer2: 'GVCTXSKVETLMI',
  counterLength2: 13
})

function respondAnswer(exercice, correctAnswer, maxLength){

  if (exercice.length === maxLength) {
    if (exercice.toUpperCase() === correctAnswer) {
      return "Bonne réponse"
    }
    else if (exercice.toUpperCase() !== correctAnswer) {
      return "Mauvaise réponse"
    }
  }

  else if (exercice.length !== maxLength) {
    return "..."
  }
}
</script>

<style lang="scss" scoped></style>