<template>
  <q-page class="pa-4 text-center">
    <h1>1.5 Petit lexique de la cryptologie</h1>

    <div class="q-pa-md">
        <q-table
        grid
        :card-container-class="cardContainerClass"
        title="Lexique de la cryptologie"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
        v-model:pagination="pagination"
        :rows-per-page-options="rowsPerPageOptions"
        >
        <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
                <q-icon name="search" />
            </template>
            </q-input>
        </template>

        <template v-slot:item="props">
            <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
            <q-card>
                <q-card-section class="text-center">
                Terme
                <br>
                <strong>{{ props.row.name }}</strong>
                </q-card-section>
                <q-separator />
                <q-card-section class="flex flex-center" :style="{ fontSize: props.row.calories + 'px' }">
                <div>{{ props.row.signification }} signification : </div>
                </q-card-section>
            </q-card>
            </div>
        </template>
        </q-table>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref, computed, watch } from 'vue'

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
    'Art d’inventer et d’appliquer des méthodes de chiffrement (codes secrets) sûrs et pratiques d’utilisation. Il s’agit aussi de vérifier et prouver la sécurité des codes secrets utilisés / proposés.',
    'Art de casser des codes secrets, à savoir déchiffrer des messages chiffrés sans connaître la clé de déchiffrement et / ou la méthode de chiffrement utilisée.',
    'Science des codes secrets qui regroupe la cryptographie ou la cryptanalyse. La cryptologie consiste donc autant à inventer des codes secrets qu’à essayer de casser les codes secrets d’autres personnes.',
    'Un chiffre est un code secret particulier, par exemple le Chiffre de César, le chiffre de Polybe ou le chiffre de Vigenère',
    'Le texte en clair est le message à chiffrer, lisible par tout le monde.',
    'Le texte chiffré est illisible',
    'Transformer un texte en clair en son équivalent chiffré.',
    'Rétablir le texte en clair à partir d’un message chiffré',
    'Pour pouvoir déchiffrer un message, il faut connaître le chiffre à l’aide duquel il a été chiffré (généralement très connu) ainsi qu’une information secrète supplémentaire appelée clé de chiffrement ou tout simplement clé.',
    'Un chiffre par substitution monoalphabétique est un code secret dans lequel chaque caractère du message en clair est remplacé par une autre lettre. Le chiffre de César est un exemple classique de chiffre monoalphabétique qui décale simplement les lettres d’un certain nombre de positions dans l’alphabet.'
]

const rows = []

terme.forEach(name => {
  for (let i = 0; i < 10; i++) {
    rows.push({ name: name })
  }
})

signification.forEach(name => {
  for (let i = 0; i < 10; i++) {
    rows.push({ name: name })
  }
})

export default {
  setup () {
    const $q = useQuasar()

    function getItemsPerPage () {
      if ($q.screen.lt.sm) {
        return 3
      }
      if ($q.screen.lt.md) {
        return 6
      }
      return 9
    }

    const filter = ref('')
    const pagination = ref({
      page: 1,
      rowsPerPage: getItemsPerPage()
    })

    watch(() => $q.screen.name, () => {
      pagination.value.rowsPerPage = getItemsPerPage()
    })

    return {

      filter,
      pagination,

      columns: [
        { name: 'name', label: 'Name', field: 'name' },
        { name: 'signification', label: 'Signification', field: 'signification' }
      ],

      cardContainerClass: computed(() => {
        return $q.screen.gt.xs
          ? 'grid-masonry grid-masonry--' + ($q.screen.gt.sm ? '3' : '2')
          : null
      }),

      rowsPerPageOptions: computed(() => {
        return $q.screen.gt.xs
          ? $q.screen.gt.sm ? [ 3, 6, 9 ] : [ 3, 6 ]
          : [3]
      })
    }
  }
}
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
</style>
