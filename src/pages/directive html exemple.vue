<template>
    <q-page>
        <p v-html="text"></p><br>
        <p> {{ text }} </p>
    </q-page>
</template>

<script setup lang="ts">
const text = '\
<p>\
<span style="color:red; font-weight:bold;">Hello </span>\
<span style="color:blue; font-style:italic;">World !</span>\
</p>'
</script>