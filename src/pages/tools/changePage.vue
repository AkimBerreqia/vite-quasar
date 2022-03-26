<script setup>
import { ref, computed } from 'vue'
import Home from '~/components/HelloWorld.vue'
import Introduction from '~/pages/caesar/1.1 Introduction.vue'

const routes = {
    '/': Home,
    '/Introduction': Introduction
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
    <q-page>
        <q-btn><router-link to="/">Home</router-link></q-btn>
        <q-btn><router-link to="/caesar/1.1 Introduction">Intro</router-link></q-btn>
    </q-page> 
</template>