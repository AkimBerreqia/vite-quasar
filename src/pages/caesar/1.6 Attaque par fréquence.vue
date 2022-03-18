<!--
Source : https://fr.acervolima.com/programme-pour-effectuer-une-attaque-de-frequence-de-lettres-sur-un-chiffrement-de-substitution-monoalphabetique/
-->
<template>

    <q-page class="pa-4 text-left align-center">
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

        <q-page-scroller expand position="top" :scroll-offset="-1" :offset="[0, 0]">
            <div class="col cursor-pointer q-pa-sm bg-secondary text-white text-center">
                <font size="4">1.6 Attaque par fréquence (retourner au début de la page)</font>
            </div>
        </q-page-scroller>
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