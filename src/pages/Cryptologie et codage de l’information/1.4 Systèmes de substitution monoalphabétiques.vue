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
    </p><br><br>



    <h2>1.4.1 Énigme 2</h2>

    <h3>Short Answer</h3>

    <p>
    Q-1: Cindy utilise la substitution...
    </p>

    <p class="Message">
    Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
    Alphabet chiffré : Q O L W N X T M G D K B P R S E U V F Z H J I Y C A
    </p>

    <p>
    ... pour chiffrer un message. Voici le message chiffré par Cindy.
    </p>

    <p class="Message">
    DQGPNBNUHGZQZGSR
    </p>

    <p>
    Déchiffrez ce message secret et écrivez le texte en clair dans le champ ci-dessous.
    </p>

    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 1050px">
        <q-input bottom-slots v-model="myQuestions.q1" label="Réponse :" counter maxlength="16" :dense="dense" style='text-transform:uppercase'>
          <template v-slot:hint>
          <p>{{respondAnswer(myQuestions.q1, myQuestions.q1CorrectAnswer, 16)}}</p>
          </template>
        </q-input>
      </div>
    </div>

    <q-btn label="AFFICHER LA RÉPONSE" style="color:orange;" @click="dialogVisible.respond1 = true" />

    <q-dialog v-model="dialogVisible.respond1" @hide="onHide">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <strong class="text-h6" style="color:orange;">Q-1: Réponse</strong>
          <q-space />
        </q-card-section>

        <q-card-section style="color:orange;">
          <p>
          JAIMELEQUITATION
          </p>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond1 = false" />
          </q-card-actions>
      </q-card>
    </q-dialog><br><br><br>


    <h2>1.4.2 Question de compréhension</h2>

    <h3>Short Answer</h3>

    <p>
    Q-2: Quelle est la clé de chiffrement du message dans ce cas ?
    </p>

    <q-input
      v-model="text.q2"
      filled
      type="textarea"
    /><br>

    <q-btn label="AFFICHER LA RÉPONSE" style="color:orange;" @click="dialogVisible.respond2 = true" />

    <q-dialog v-model="dialogVisible.respond2" @hide="onHide">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <strong class="text-h6" style="color:orange;">Q-2: Réponse</strong>
          <q-space />
        </q-card-section>

        <q-card-section style="color:orange;">
          <p>
          La clé de chiffrement est le secret qu’il faut connaître pour déchiffrer le message en connaissant la méthode de chiffrement utilisée. 
          En l’occurrence, on a utilisé un chiffrement monoalphabétique où chaque lettre en clair est toujours remplacée par une même lettre chiffrée.<br>
          La clé de chiffrement est donc la permutation des lettres de l’alphabet se trouvant sur la deuxième ligne:
          </p><br>

          <p class="Message">
          <strong>Clé de chiffrement</strong><br>
          QOLWNXTMGDKBPRSEUVFZHJIYCA
          </p><br>

          <p>
          On peut considérer la clé de chiffrement comme une sorte de mot de passe sans lequel on ne peut pas déchiffrer facilement le message chiffré.
          </p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond2 = false" />
        </q-card-actions>
      </q-card>
    </q-dialog><br><br><br>


    <h3>Short Answer</h3>

    <p>
    Q-3: Combien de clés de chiffrement différentes existe-t-il ?
    </p>

    <q-input
      v-model="text.q3"
      filled
      type="textarea"
    /><br>

    <q-btn label="AFFICHER LA RÉPONSE" style="color:orange;" @click="dialogVisible.respond3 = true" />

    <q-dialog v-model="dialogVisible.respond3" @hide="onHide">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <strong class="text-h6" style="color:orange;">Q-3: Réponse</strong>
          <q-space />
        </q-card-section>

        <q-card-section style="color:orange;">
          <p>
          Le nombre de clés possibles est équivalent au nombre de permutations possibles de l’alphabet. 
          On peut voir les choses ainsi: la clé de chiffrement est comme un mot de passe de 26 lettres toutes différentes. 
          Combien de tels “mots de passe” existe-t-il ? 
          Pour “essayer” toutes les clés (force brute), il faut imaginer des cases vides.
          </p><br>

          <p class="Message">
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          </p><br>

          <p>
          Pour la première “case” vide, on a 26 possibilités.
          </p>

          <p class="Message">
          A _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br>
          B _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br>
          C _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br>
          D _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br>
          ...<br>
          Z _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br>
          </p><br>

          <p>
          Pour la deuxième “case vide”, il ne reste plus que 25 lettres possibles puisqu’une lettre a déjà été choisie pour la première “case vide” et qu’on ne peut utiliser chaque lettre qu’une seule fois.<br>
          Le nombre total de clés vaut donc<br><br>

          26⋅25⋅24⋅...⋅1<br><br>

          Il s’agit d’un nombre colossal!!
          </p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond3 = false" />
        </q-card-actions>
      </q-card>
    </q-dialog><br><br><br>


    <h2>1.4.3 Génération de permutations aléatoires</h2>

    <p>
    Pour exploiter cette méthode de chiffrement, vous aurez besoin de générer des clés de chiffrement aléatoires. 
    Vous pouvez utiliser le programme ci-dessous pour générer des permutations de l’alphabet latin (ou tout autre alphabet en cas de besoin).
    </p><br>

    <q-btn label="Exemple" style="color:lightblue;" @click="dialogVisible.exemple1 = true" />

    <q-dialog v-model="dialogVisible.exemple1" @hide="onHide">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <strong class="text-h6" style="color:lightblue;">Exemple: Génération de permutations aléatoires</strong>
          <q-space />
        </q-card-section>

        <q-card-section style="color:lightblue;">
          <p>
          Pour la fonction python suivante:
          </p><br><br>

          <p class="foncion python" style="color:black;">
          1 <span style="color:purple;">from</span> random <span style="color:purple;">import</span> shuffle<br>
          2 alphabet = <span style="color:brown;">'ABCDEFGHIJKLMNOPQRSTUVWXYZ'</span><br>
          3 chars = <span style="color:purple;">list</span>(alphabet)<br>
          4 shuffle(chars)<br>
          5 permutation = <span style="color:brown;">""</span>.join(chars)<br>
          6 <span style="color:purple;">print</span>(<span style="color:brown;">"Permutation aléatoire:"</span>, permutation)
          </p><br>

          <p>
          Les résultats du code peuvent varier, par exemple:
          </p><br><br>

          <p class="fonction python" style="color:black;">
          Permutation aléatoire: MOAFGNYRJVXCSHQWUIPKTBEDLZ<br>
          Permutation aléatoire: GLVNZMROSAHFQWCKDTYXIPBEUJ<br>
          Permutation aléatoire: KFZSUDHMQYVXBNRAEGLJTIPOWC<br>
          Permutation aléatoire: QMIGDKNJPWRHUEYVBCLSTFXZAO<br>
          ...
          </p>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.exemple1 = false" />
          </q-card-actions>
      </q-card>
    </q-dialog><br><br><br>


    <q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]">
      <div class="col cursor-pointer q-pa-sm bg-accent text-white text-center">
      Retourner au début de la page
      </div>
    </q-page-scroller>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

let dialogVisible = reactive({
  respond1: ref(false),
  respond2: ref(false),
  exemple1: ref(false)
})

function onHide(order) {
  dialogVisible.order.value = false
}

let text = reactive({
  q2: ref('')
})

const dense = ref(false)

const myQuestions = reactive({
    q1: '',
    q1CorrectAnswer: 'JAIMELEQUITATION'
})

function respondAnswer(exercice, correctAnswer, maxLength){
  if (exercice.length === maxLength) {
    if (exercice.toUpperCase() === correctAnswer) {
      return "Bonne réponse"
    }
    else if (exercice.toUpperCase() !== correctAnswer) {
      return "Mauvaise réponse"
    }
  }

  else if (exercice.length !== maxLength) {
    return "..."
  }
}

</script>

<style lang="scss" scoped></style>