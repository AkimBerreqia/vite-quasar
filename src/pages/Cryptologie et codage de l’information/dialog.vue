<template>
  <q-page class="q-ma-md">
    <!--  <q-btn label="Close Icon" color="primary" @click="icon = true" /> -->
    <q-btn label="AFFICHER LA RÉPONSE" color="primary" @click="dialogVisible = true" />

    <q-dialog v-model="dialogVisible" @hide="onHide">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Clé de chiffrement</div>
          <q-space />
          <q-btn v-close-popup icon="close" flat round dense />
        </q-card-section>

        <q-card-section>
          Il y a un décalage qui se forme pour chaque lettre entre les deux messages. 
          Par exemple, la lettre <i>R</i> devient la lettre <i>S</i>.
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  let dialogVisible = ref(false)

  function onHide() {
    dialogVisible.value = false
  }
</script>

<style></style>
