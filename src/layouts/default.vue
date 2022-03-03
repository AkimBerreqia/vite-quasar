<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white text-left">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          1 Cryptologie et codage de l’information 
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="bg-grey-5 text-white" bordered>
      <!-- drawer content -->
      <q-list bordered separator class="min-w-25 pa-4">
        <template v-for="(item, index) in generatedRoutes">
          <q-item clickable :key="index" v-if="item.name != 'index'" class="flex-col">
            <q-item-section class="cursor-pointer" @click="router.push({ path: item.path })">
              {{ item.name }}
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div v-if="false" class="py-2 mx-auto text-center text-sm">[Default Layout]</div>
      <pre v-if="false">
      {{generatedRoutes}}
      </pre>
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  import generatedRoutes from 'virtual:generated-pages'
  const router = useRouter()

  const pages = generatedRoutes.sort((p1, p2) => {
    if (p1.name < p2.name) {
      
    }
  })

  const leftDrawerOpen = ref<boolean>(false)
  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
</script>

<style lang="scss">
  .slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.2s ease;
  }

  .slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }

  .q-page-container {
    max-width:1500px;
    margin:50px;
    
  }
</style>
