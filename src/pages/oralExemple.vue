<template>
    <q-page>
        <div class="text-center" style="font-weight: bold;">
            <q-btn
            unelevated
            Rounded
            label="Afficher du texte"
            color="green"
            @click="isVisible"
            /><br><br>

            <p v-show="visible === true">Hello World !</p>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

function isVisible() {
  visible.value = !visible.value
}
</script>

<style lang="scss">


p {
    font-family: 'Times New Roman', Times, serif;
}
</style>

