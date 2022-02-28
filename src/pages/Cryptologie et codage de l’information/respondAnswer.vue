<template>
    <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 1050px">
        <q-input bottom-slots v-model="myQuestions.exercice1" label="Réponse :" counter maxlength="56" :dense="dense" style='text-transform:uppercase'>
            <template v-slot:append>
            <q-icon v-if="input1 !== ''" name="close" @click="input1 = ''" class="cursor-pointer" />
            </template>
            <template v-slot:hint>
            <p>{{respondAnswer()}}</p>
            </template>
        </q-input>
        </div>
    </div>

    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 1050px">
        <q-input bottom-slots v-model="myQuestions.exercice2" label="Réponse :" counter maxlength="13" :dense="dense" style='text-transform:uppercase'>
          <template v-slot:append>
            <q-icon v-if="input2 !== ''" name="close" @click="input2 = ''" class="cursor-pointer" />
          </template>
          <template v-slot:hint>
          <p>{{respondAnswer()}}</p>
          </template>
        </q-input>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const myQuestions = reactive([
  {
    exercice1: rodolphe,
    input1: '',
    correctAnswer1: 'JETINVITEAUCINEMADEMAINSOIRAVINGTHEURESREJOINSMOIALAGARE'
  },
  {
    exercice2: cesar4,
    input2: '',
    correctAnswer2: 'GVCTXSKVETLMI'
  }
])

const seeResults = []

}) 

    if (myQuestions.exercice.length === myQuestions.maxLength) {
        if (myQuestions.exercice.toUpperCase() === myQuestions.correctAnswer) {
            return "Bonne réponse"
        }
    else if (myQuestions.exercice.toUpperCase() !== myQuestions.correctAnswer) {
        return "Mauvaise réponse"
    }
}

  else if (myQuestions.exercice.length !== myQuestions.maxLength) {
    return "..."
  }
}
</script>

<style lang="scss" scoped></style>