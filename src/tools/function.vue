<script>
import { ref } from 'vue'

export default {
  setup () {
    const loading = ref([
      false
    ])

    const progress = ref(false)

    function simulateProgress (number) {
      // we set loading state
      loading.value[ number ] = true

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value[ number ] = false
      }, 3000)
    }

    return {
      loading,
      progress,
      simulateProgress
    }
  }
}
</script>

<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn :loading="progress" color="primary" @click="progress = true">
      Controlled from outside
      <template v-slot:loading>
        <q-spinner-radio class="on-left" />
        Click "Stop" Button
      </template>
    </q-btn>
    <q-btn :disable="!progress" color="negative" @click="progress = false" label="Stop" />
    </div>
</template>