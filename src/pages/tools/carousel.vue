<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="action.slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="400px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="cryptographie1" class="column no-wrap flex-center text-center">
            <h2>1.1.1 Cryptographie</h2>

            <q-icon name="key" size="28px" /><br>

            <p>
            Les codes secrets sont utilisés depuis l’invention de l’écriture pour communiquer des informations de manière secrète et sécurisée, notamment lors des grandes campagnes militaires. 
            Le code de César est un exemple assez simple utilisé dans l’Antiquité que nous allons aborder au cours.<br><br>
            </p>

            <q-input
            v-model="text.q1"
            filled
            type="textarea"
            />
        </q-carousel-slide>

        <q-carousel-slide name="cryptographie2" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p>
            Plus le nombre d’informations représentées sous forme digitale a augmenté, plus les codes secrets ont gagné en importance. 
            Depuis l’avènement des technologies de télécommunication telles que la radio ou le télégraphe, les codes secrets jouent un rôle majeur pour le commerce et sur le champ de bataille. 
            Le commerce électronique (e-commerce) ou les réseaux sociaux ne seraient absolument pas possibles sans les avancées modernes de la cryptographie, notamment le code RSA. 
            À chaque fois que vous vous rendez sur un réseau social ou que vous effectuez un achat en ligne, vous utilisez des techniques modernes de cryptographie pour chiffrer les communications avec le serveur, permettant d’éviter que des tiers se procurent les informations communiquées ou ne détournent le paiement effectué.
            </p>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'

let action = reactive({
    slide: ref('cryptographie1')
})

let text = reactive({
  q1: ref(''),
  q3: ref(''),
  q4: ref('')
})
</script>