<!-- COURSES.21-LEARNING.COM, « contenu du petit lexique de la cryptologie », 2019, consulté le 12 mai 2022, <https://courses.21-learning.com/runestone/books/published/doi-2gy-20-21/crypto/crypto-lexique.html> -->

<template>
  <q-page class="pa-4">
    <div class="q-pa-md">
      <q-table
        grid
        title="Termes"
        :rows="rows"
        row-key="name"
        :filter="filter"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Chercher">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:item="props">
          <div class="card align-center">
            <q-card>
              <q-card-section class="text-center">
                <strong>{{ props.row.titleName }}</strong>
              </q-card-section>
              <q-separator />
              <q-card-section class="flex flex-left" :style="{ fontSize: props.row.articleName + 'px' }">
                <div>Signification : {{ props.row.articleName }} </div>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div><br><br>


    <navigatorBtn />
  </q-page>
  
</template>

<script setup lang="ts">

import { ref } from 'vue'
import navigatorBtn from 'src/components/navigatorSixToolbar.vue'

const filter = ref('')

const terme = [
  'Cryptographie',
  'Cryptanalyse',
  'Cryptologie',
  'Chiffre',
  'Texte en clair',
  'Texte chiffré',
  'Chiffrer / crypter',
  'Déchiffrer / décrypter',
  'Clé de chiffement',
  'Chiffre par substitution monoalphabétique'
]

const signification = [
    'Art d’inventer et d’appliquer des méthodes de chiffrement (codes secrets) sûrs et pratiques d’utilisation. Il s’agit aussi de vérifier et de prouver la sécurité des codes secrets utilisés / proposés.',
    'Art de casser des codes secrets, à savoir déchiffrer des messages chiffrés sans connaître la clé de déchiffrement et / ou la méthode de chiffrement utilisée.',
    'Science des codes secrets qui regroupe la cryptographie ou la cryptanalyse. La cryptologie consiste donc autant à inventer des codes secrets qu’à essayer de casser les codes secrets d’autres personnes.',
    'Un chiffre est un code secret particulier, par exemple le chiffre de César, le chiffre de Polybe ou le chiffre de Vigenère',
    'Le texte en clair est le message à chiffrer, lisible par tout le monde.',
    'Le texte chiffré est illisible',
    'Transformer un texte en clair en son équivalent chiffré.',
    'Rétablir le texte en clair à partir d’un message chiffré',
    'Pour pouvoir déchiffrer un message, il faut connaître le chiffre à l’aide duquel il a été chiffré (généralement très connu) ainsi qu’une information secrète supplémentaire appelée clé de chiffrement ou tout simplement clé.',
    'Un chiffre par substitution monoalphabétique est un code secret dans lequel chaque caractère du message en clair est remplacé par une autre lettre. Le chiffre de César est un exemple classique de chiffre monoalphabétique qui décale simplement les lettres d’un certain nombre de positions dans l’alphabet.'
]

const rows = []

  terme.forEach(titleName => {
    rows.push({ titleName: titleName, articleName: signification[terme.indexOf(titleName)] })
})

</script>

<style lang="sass">
.grid-masonry
  flex-direction: column
  height: 700px

  &--2
    > div
      &:nth-child(2n + 1)
        order: 1
      &:nth-child(2n)
        order: 2

    &:before
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3
    > div
      &:nth-child(3n + 1)
        order: 1
      &:nth-child(3n + 2)
        order: 2
      &:nth-child(3n)
        order: 3

    &:before,
    &:after
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 2

.card
  margin: 10px
</style>
