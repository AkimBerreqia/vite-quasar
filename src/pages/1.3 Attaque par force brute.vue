<template>
    <q-page class="pa-4 text-center">
        <div class="q-pa-md">
            <div class="q-gutter-md">
                <q-carousel
                v-model="action.slide1"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="primary"
                navigation
                padding
                arrows
                height="300px"
                class="shadow-1 rounded-borders"
                >
                    <q-carousel-slide name="attaque" class="column no-wrap flex-center text-center">
                        <h1>1.3 Attaque par force brute</h1>

                        <q-icon name="key" size="28px" /><br>

                        <p>
                        Comme vous avez pu le constater dans le dernier exercice de la section <a href="http://localhost:3001/cryptologie%20et%20codage%20de%20l%E2%80%99information/1.2%20le%20chiffre%20de%20c%C3%A9sar" style="color:darkblue;">Le chiffre de César</a>, il est très facile de casser le chiffre de César avec un ordinateur en essayant tour à tour chaqune des clés possibles. 
                        Dans le cas du chiffre de César, très rudimentaire, il n’y a que 25 clés de chiffrement à tester (les 25 décalages possibles dans l’alphabet). 
                        Le procédé consistant à essayer bêtement toutes les clés possibles est appelé <strong>attaque par force brute</strong> (brute force attack en anglais).
                        </p>
                    </q-carousel-slide>
                </q-carousel>


                <q-carousel
                v-model="action.slide2"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="primary"
                navigation
                padding
                arrows
                height="300px"
                class="shadow-1 rounded-borders"
                >
                    <q-carousel-slide name="exemple1" class="column no-wrap flex-center text-center">
                        <h2>1.3.1 Exemple (casser César par la force brute)</h2>

                        <q-icon name="key" size="28px" /><br>

                        <p>
                        Le programme suivant réalise une attaque par force brute sur le chiffre de César en testant successivement toutes les clés de chiffrement.
                        </p>

                        <!-- Rajouter exemple comme au 1.4 -->
                    </q-carousel-slide>

                    <q-carousel-slide name="exemple2" class="column no-wrap flex-center text-center">
                        <q-icon name="key" size="28px" /><br>

                        <p>
                        En exécutant le programme, on constate que la clé <span style="color:red;">d = 16</span> permet de décrypter correctement le texte chiffré pour obtenir le texte en clair.
                        </p><br><br>

                        <p class="text-left bg-info rounded-borders">
                        PLUSONDESIREUNECHOSEPLUSELLESEFAITATTENDRE
                        </p><br><br>

                        <p>
                        Il faut bien entendu parcourir tous les essais jusqu’à ce que l’on tombe sur un texte qui a du sens en français (ou dans une autre langue connue).
                        </p>
                    </q-carousel-slide>
                </q-carousel>


                <q-carousel
                v-model="action.slide3"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="primary"
                navigation
                padding
                arrows
                height="300px"
                class="shadow-1 rounded-borders"
                >
                    <q-carousel-slide name="retenir1" class="column no-wrap flex-center text-center">
                        <h2>1.3.2. À retenir</h2>

                        <q-icon name="key" size="28px" /><br>

                        <p>
                        Une attaque par force brute sur un code secret consiste à essayer de déchiffrer un message en essayant systématiquement toutes les clés de chiffrement possible de manière “stupide”. 
                        Ceci est très facile à réaliser avec le chiffre de César puisqu’il ne dispose que de 25 clés de chiffrement différentes.<br><br>

                        Dans la prochaine section, nous allons aborder un cryptosystème qui résiste un peu mieux à une attaque aussi naïve. 
                        Pour cela, il suffit d’augmenter le nombre de clés possibles.
                        </p>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>


        <q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]">
        <div class="col cursor-pointer q-pa-sm bg-secondary text-white text-center">
            Retourner au début de la page
        </div>
        </q-page-scroller>
    </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

let action = reactive({
  slide1: ref('attaque'),
  slide2: ref('exemple1'),
  slide3: ref('retenir1')
})
</script>

<style lang="scss" scoped></style>