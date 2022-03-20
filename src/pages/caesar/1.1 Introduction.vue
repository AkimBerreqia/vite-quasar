<template>
    <q-page class="pa-4 text-left align-left">
        <div class="q-pa-md q-gutter-sm">
            <q-breadcrumbs unelevated rounded>
            <q-breadcrumbs-el icon="home" label="1 Cryptologie et codage de l'informatation" to="/" />
            <q-breadcrumbs-el label="1.1 Introduction"/>
            </q-breadcrumbs>
        </div>
        <div>
        <div class="q-gutter-md">
            <p>
            La cryptologie est la science des codes secrets et utlise des techniques propres à l’informatique et aux mathématiques. 
            Dans ce cours, nous n’aborderons pas les aspects mathématiques des techniques de cryptographie modernes. 
            La cryptologie englobe d’une part la <b>cryptographie</b> qui consiste à développer des codes secrets permettant de chiffrer des messages pour qu’ils soient incompréhensibles pour les personnes à qui ils ne sont pas destinés et la <b>cryptanalyse</b> qui consiste à <i>casser les codes secrets</i> utilisés par d’autres personnes pour tenter d’accéder aux informations chiffrées.
            </p>
            
            <q-btn unelevated rounded label="Valider la section" v-if="section.first === false" class="align-right" color="primary" @click="section.first = !section.first"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.first === true" class="align-right" color="green" @click="section.first = !section.first"/>
            
            <q-separator inset />

            <h2>1.1.1 Cryptographie</h2>

            <p>
            Les codes secrets sont utilisés depuis l’invention de l’écriture pour communiquer des informations de manière secrète et sécurisée, notamment lors des grandes campagnes militaires. 
            Le code de César est un exemple assez simple utilisé dans l’Antiquité que nous allons aborder au cours.<br><br>
            </p>

            <p>
            Plus le nombre d’informations représentées sous forme digitale a augmenté, plus les codes secrets ont gagné en importance. 
            Depuis l’avènement des technologies de télécommunication telles que la radio ou le télégraphe, les codes secrets jouent un rôle majeur pour le commerce et sur le champ de bataille. 
            Le commerce électronique (e-commerce) ou les réseaux sociaux ne seraient absolument pas possibles sans les avancées modernes de la cryptographie, notamment le code RSA. 
            À chaque fois que vous vous rendez sur un réseau social ou que vous effectuez un achat en ligne, vous utilisez des techniques modernes de cryptographie pour chiffrer les communications avec le serveur, permettant d’éviter que des tiers se procurent les informations communiquées ou ne détournent le paiement effectué.
            </p>

            <q-btn unelevated rounded label="Valider la section" v-if="section.second === false" class="align-right" color="primary" @click="section.second = !section.second"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.second === true" class="align-right" color="green" @click="section.second = !section.second"/>
            
            <q-separator inset />

            <h2>1.1.2 Cryptanalyse</h2>

            <p>
            Depuis l’avènement de la cryptographie, qui vise à communiquer ou stocker des informations sensibles de manière chiffrée pour les rendre inintelligibles, les personnes désireuses d’accéder à ces informations chiffrées ont du chercher des stratégies pour casser ces codes secrets. 
            Comme nous le verrons, les codes secrets élaborés durant l’Antiquité sont tous relativement faciles à casser, du moins avec la puissance de calcul des ordinateurs actuels.
            </p>

            <p>
            Lors de la deuxième guerre mondiale, une des raisons principales de la victoire des alliés sur la Wehrmacht est que les Anglais ont réussi à casser le code Enigma utilisé par les Allemands dans toutes leurs communications militaires.
            </p>

            <p>
            Les techniques de cryptographie modernes permettent de créer des codes secrets beaucoup plus difficiles à casser. 
            C’est la raison pour laquelle toutes les grandes puissances commerciales et militaires actuelles dépensent des sommes colossales pour engager les meilleurs mathématiciens, physiciens et informaticiens du monde et financer les services secrets responsables de percer les codes secrets utilisés par les adversaires pour en tirer un avantage commercial ou militaire.
            </p>

            <p>
            Dans ce cours, vous allez découvrir quelques-uns des codes secrets les plus célèbres inventés dans l’Antiquité et vous allez également chercher à casser ces codes secrets à l’aide de vos compétences en Python lors de travaux pratiques. 
            Vous pourrez ainsi renforcer les compétences de programmation avec les chaînes de caractères.
            </p>

            <q-btn unelevated rounded label="Valider la section" v-if="section.third === false" class="align-right" color="primary" @click="section.third = !section.third"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.third === true" class="align-right" color="green" @click="section.third = !section.third"/>
        </div>
        </div>

        <q-page-scroller :scroll-offset="-1">
            <div class="col cursor-pointer q-pa-sm bg-secondary text-white text-center">
                <font size="4">Retourner au début de la page</font>
            </div>
        </q-page-scroller>
    </q-page>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'

let section = reactive ({
    first: ref(false),
    second: ref(false),
    third: ref(false)
})
</script>