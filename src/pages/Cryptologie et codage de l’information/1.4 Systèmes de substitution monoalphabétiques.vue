<template>
    <q-page class="pa-4 text-center">
        <h1>1.4 Systèmes de substitution monoalphabétiques</h1>

        <p>
        Le chiffre de César est un exemple de <strong>chiffre monoalphabétique</strong> car il consiste à remplacer chaque lettre du message toujours par la même lettre chiffrée. 
        Par exemple, pour un décalage de <i>d = 1</i>, tous les A, sont remplacés par des B, tous les B par des C etc.<br><br>

        Il n’est cependant pas nécessaire que le chiffrement soit le résultat d’un décalage constant dans l’alphabet. 
        En effet, au lieu d’utiliser un décalage de <i>d = 3</i> et obtenir la substitution.
        </p>

        <p class="Message">
        Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
        Alphabet chiffré : D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
        </p>

        <p>
        On peut très bien mélanger complètement les lettres de l’alphabet chiffré.
        </p>

        <p class="Message">
        Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
        Alphabet chiffré : Q O L W N X T M G D K B P R S E U V F Z H J I Y C A
        </p>

        <p>
        Ce chiffre remplace tous les A par des Q, les B par des O etc. Pour créer l’alphabet chiffré, on a mélangé l’alphabet dans un ordre totalement aléatoire.
        </p>


        <h2>1.4.1 Énigme 2</h2>

    </q-page>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped></style>