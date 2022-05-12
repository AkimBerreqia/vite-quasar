<template>
  <q-page class="py-4 text-center bg-gray-100">
    <CaesarDemo />
    <router-link to="/examples/asset" class="text-light-blue-500">Back to home page</router-link>
  </q-page>
</template>

<script setup lang="ts">
  import { useQuasar } from 'quasar'
  import CaesarDemo from '~/components/CaesarDemo.vue'

  const $q = useQuasar()
</script>

<style lang="scss" scoped>
</style>

<route lang="yaml">
</route>
