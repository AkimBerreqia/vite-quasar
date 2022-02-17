<template>
  <h1>Chiffrement de César</h1>

    <q-input outlined v-model="key" label="Clé de chiffrement" />
    <q-input outlined v-model="message" label="Texte en clair" />
    <q-btn color="primary" label="Primary" @click="encryptMessage"/>

  <div>Message traité: {{processedMessage}}</div>
  Message chiffré : {{encryptedMessage}}
  
  
</template>

<script setup>

import {ref} from "vue"

const firstName = ref("")
const showMessage = ref(false)

const key = ref(6)
const message = ref("")
const processedMessage = ref('')
const encryptedMessage = ref('')
const answer = ref("")

const ceasarEncrypt = (msg, key) => {
    let result = ''

    Array.from(msg).forEach(c => {
        const code = c.charCodeAt()
        const x = (code - 'A'.charCodeAt() + key) % 26
        const new_c = String.fromCharCode(x + 'A'.charCodeAt())
        result += new_c
    })


    return result
}

const hallo = () => {
    alert("lkdajflkj")
}

const encryptMessage = () => {
    processedMessage.value = message.value.toUpperCase().replaceAll(' ', '')
    encryptedMessage.value = ceasarEncrypt(processedMessage.value, key.value)
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
    margin-left: 1em;
}
</style>