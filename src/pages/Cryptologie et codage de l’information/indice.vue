<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Indice" color="primary" @click="indice = true" />
    <q-dialog v-model="indice">
      <q-card>
        <q-card-section>
          <div class="text-h6">Déchiffrement</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p>labore</p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="ok" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let indice = ref(false)
</script>
