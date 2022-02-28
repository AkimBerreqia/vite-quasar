<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      
      <q-input bottom-slots v-model="text" label="Réponse" counter maxlength="56" :dense="dense">
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        </template>
        <template v-slot:after>
          <q-btn round dense flat icon="send" @click="text"/>
        </template>
        {{text}}
      </q-input>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false)
    }
  }
}

const ui = ref(false)
</script>
