<template>
    <q-page>
        <q-btn unelevated rounded label="Valider la section" v-if="section.first === false" class="align-right" color="primary" @click="section.first = !section.first"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.first === true" class="align-right" color="green" @click="section.first = !section.first"/>

        <br><br>

        <q-btn unelevated rounded label="Valider la section" v-if="section.second === false" class="align-right" color="primary" @click="section.second = !section.second"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.second === true" class="align-right" color="green" @click="section.second = !section.second"/><br><br>

        <q-separator inset />
    </q-page>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'

let section = reactive ({
    first: ref(false),
    second: ref(true)
})
</script>