<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated class="bg-primary text-white text-left">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawerLeft = !drawerLeft" />
        <q-toolbar-title>
          <router-link to="/">1 Cryptologie et codage de l’information</router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawerLeft" side="left" overlay class="bg-grey-5 text-white" bordered>
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
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <q-page-scroller position="bottom-right" :offset="[0, 0]" :scroll-offset="0">
        <div class="col cursor-pointer q-pa-sm text-white">
          <q-btn round icon="arrow_forward" class="rotate-270" color="positive"></q-btn>
        </div>
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  import generatedRoutes from 'virtual:generated-pages'
  const router = useRouter()

  const drawerLeft = ref<boolean>(false)
</script>

<style lang="scss">

  html { 
    background-color: #e6e6e6;
  }
  
  h1 {
    font-style: oblique;
    color: rgb(50, 50, 50); 
    background-color: #c0c0c0;
  }

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
    margin: auto;
    margin-top: 50px;
    text-align: left;
    align-content: center;
    color: #4d443a;
    background-color: #dedcdc;
    max-width:40em;
  }

  .img {
    max-width: 50%;
  }
</style>
