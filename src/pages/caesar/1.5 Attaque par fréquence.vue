<!--
Source : https://fr.acervolima.com/programme-pour-effectuer-une-attaque-de-frequence-de-lettres-sur-un-chiffrement-de-substitution-monoalphabetique/
-->
<template>
    <q-page class="pa-4 align-center">
        <div class="q-pa-md q-gutter-sm">
            <q-breadcrumbs unelevated rounded>
            <q-breadcrumbs-el icon="home" label="1 Cryptologie et codage de l'informatation" to="/" />
            <q-breadcrumbs-el label="1.1 Introduction"/>
            <q-breadcrumbs-el label="1.2 Le chiffre de César"/>
            <q-breadcrumbs-el label="1.3 Attaque par force brute"/>
            <q-breadcrumbs-el label="1.4 Systèmes de substitution monoalphabétique"/>
            <q-breadcrumbs-el label="1.5 Attaque par fréquence"/>
            </q-breadcrumbs>
        </div>
        <p>
        {{text[0]}}<br><br>
        {{text[1]}}
        <strong>{{text[2]}}</strong><br><br>
        {{text[3]}}<br><br>
        {{text[4]}}<br><br>
        {{text[5]}}<br><br>
        {{text[6]}}<br>
        {{text[7]}}<br><br>
        </p>
    </q-page>
</template>

<script setup lang="ts">
const text = [
"L'attaque par fréquence est l'une des attaque les plus connues dans le domaine de la cryptanalyse pour le chiffrement de substitution monoalphabétique. \
Il faut savoir que dans chaque langue, il y a des fréquences au niveau des suites de lettre.",

"Par exemple, en français, les suites les plus courantes, sont :",

" « ent », « que », « les », « ese », « des », « ela » ou « ign ».",

"Il en existe d'autre encore, mais celles-ci font partie des fréquences, appelées « Trigrammes », qui reviennent le plus souvent.",

"Pour un chiffre de substitution monalphabétique, il est possible d'essayer plusieurs clés pour trouver celle qui correspond. \
L'inconvénient est que cette méthode n'est pas très efficace pour la plupart des chiffrements, mais pour César, cela fera l'affaire. \
Etant donné que le nombre de clés pour César est limité, le nombre d'essaies est limité au nombre de clés César.",

"Une manière de procéder serait d'essayer chaque clé, jusqu'à avoir trouver le texte cliar. \
Pour le texte suivant, cherchez le texte en clair avec l'attaque par fréquence.",

"YNCERFRAPRQRXSPQNAFYRZBAQRSNVGQRY'RAFRVTARHAQRFPURSFQRSVYRVAGREANGVBANHKQNAFY'VAQHFGEVRQRYNERFGNHENGVBAENCVQR.",
"FNFCRPVSVPVGRRFGQRCEBCBFREHAVDHRZRAGQRFCERCNENGVBAFNONFRQRCBHYRG.",

"Réponse : LAPRESENCEDEKFCDANSLEMONDEFAITDEL'ENSEIGNEUNDESCHEFSDEFILEINTERNATIONAUXDANSL'INDUSTRIEDELARESTAURATIONRAPIDE.\
SASPECIFICITEESTDEPROPOSERUNIQUEMENTDESPREPARATIONSABASEDEPOULET."
]
</script>