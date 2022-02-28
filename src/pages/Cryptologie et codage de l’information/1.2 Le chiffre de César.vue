<template>
  <q-page class="pa-4 text-center">

    <h1>1.2 Le chiffre de César</h1>
    <p>Le premier code secret que l’on va aborder est le <b>chiffre de César</b>. 
    En cryptographie, un <b>chiffre</b> est en réalité un synonyme de <b>code secret</b>. 
    Il s’agit d’une <b>méthode de chiffrement</b> qui permet de transformer un message intelligible et facilement lisible (<b>texte en clair</b>) en un <b>texte chiffré</b> inintelligible.</p>
    
    <h2>1.2.1 Énigme 1</h2>
    <p>Robert utilise le chiffre de César pour chiffrer le message <p style="color:red;">RENDEZVOUSAUKIOSKATROISHEURES</p> et obtient le message chiffré <p style="color:red;">SFOEFAWPVTBVLJPTLBUSPJTIFVSFT</p>. 
    Vous remarquerez que le message chiffré est écrit en majuscules, sans accent, sans espace ni ponctuation. 
    Cela permet d’une part de faciliter le chiffrement et, d’autre part, de révéler moins d’information (notamment la longueur des mots formant le message).</p>

    <p class="Message">
    Message en clair: RENDEZVOUSAUKIOSKATROISHEURES<br>
    Message chiffré : SFOEFAWPVTBVLJPTLBUSPJTIFVSFT
    </p>

    <h3>Short Answer</h3>
    <h4>Q-1: Sauriez-vous expliquer comment fonctionne cette méthode de chiffrement?</h4>
    <input v-model="textArea">
    <q-btn @click="showtext" style="color:darkblue;">Afficher la réponse</q-btn>
    <p v-if="isClick === true" style="color:darkblue;">Il y a un décalage qui se forme pour chaque lettre entre les deux messages. Par exemple, la lettre <i>R</i> devient la lettre <i>S</i>.</p>

    <p>Rodolphe utilise la même méthode de chiffrement que Robert pour chiffrer un message. Voici le message chiffré qu’il envoie à Julie. Essayez de déchiffrer ce message:</p>
    <p class="Message">
    KFUJOWJUFBVDJOFNBEFNBJOTPJSBWJOHUIFVSFTSFKPJOTNPJBMBHBSF
    </p>
    <q-input v-model="answers.rodolphe" />
    <q-btn @click="returnResult">Valider</q-btn>
    
    <!-- Finir Ex. réponse Rodolphe -->
    <div v-show="answers.rodolphe !== ''">
    <p v-if="answers.rodolphe === correctAnswer">Bonne réponse !</p>
    <p v-if="answers.rodolphe !== correctAnswer">Mauvaise réponse...</p>
    </div>
    
    <h2>1.2.2 Fonctionnement</h2>
    <p>Comme vous avez sans doute pu le deviner, le chiffre de César est très simple. 
    Il suffit de décaler toutes les lettres d’un certain nombre de positions dans l’alphabet. 
    En observant le message en clair et le message chiffré de Robert</p>

    <p class="Message">
    Message en clair: RENDEZVOUSAUKIOSKATROISHEURES<br>
    Message chiffré : SFOEFAWPVTBVLJPTLBUSPJTIFVSFT
    </p>

    <p>on peut constater que le message chiffré n’est rien d’autre que le message en clair où chaque lettre a été “décalée de 1 position vers la droite dans l’alphabet”. 
    Autrement dit, le A est chiffré par B, le B par C etc jusqu’au Z qui est chiffré par A. 
    On peut représenter cela par le schéma suivant:</p>

    <!-- Si besoin, image de décalage César -->

    <p>
    Fonctionnement du chiffre Cesar(1) qui décale toutes les lettres de 1 position dans l’alphabet latin.<br><br>
    La première ligne correspond à l’alphabet en clair et la deuxième ligne montre par quelle lettre chaque lettre de la première ligne est chiffrée.
    </p>

    <div class="Remarque">
    <h4>Remarque</h4>
    <p>Vous remarquerez qu’une fois arrivé à la fin de l’alphabet, on recommence au début. 
    Ainsi, le Z est chiffré par le A.</p>
    </div>

    <div class="Nouvelle notion">
    <h4>Nouvelle notion (chiffrement monoalphabétique)</h4>
    <p>Le chiffre de César est un exemple typique de chiffre monoalphabétique. 
    Les codes secrets ou chiffres monoalphabétiques consistent à remplacer chaque lettre du message en clair par une autre lettre de l’alphabet. 
    La particularité des chiffres monoalphabétiques tels que le chiffre de César est que chaque lettre du message en clair est toujours chiffré par la même lettre.</p>
    </div>

    <p>On peut aussi représenter le chiffre de César(1) de la manière suivante avec deux “roues”. 
    Si le décalage vaut d, on tourne la roue extérieure de d crans vers la gauche. 
    Dans le cas présent, on a tourné la roue extérieure de 1 cran vers la gauche. 
    L’alphabet du centre correspond aux lettres en clair et celles du cercle extérieur aux lettres chiffrées.</p>

    <!-- Si besoin, image roue César -->

    <h2>1.2.3 Cryptosystèmes et clés de chiffrement</h2>
    <p>Il existe en réalité 25 chiffres de César différents correspondant aux 25 décalages possibles dans l’alphabet. 
    Ces différents chiffres forment ce que l’on appelle un <b>cryptosystème</b>. 
    Un cryptosystème est un ensemble de chiffres qui fonctionnent tous de la même manière à un paramètre près. 
    Dans le cas du chiffre de César, le paramètre est le décalage <i>d</i> dans l’alphabet. 
    Ce paramètre est appelé <b>clé de chiffrement</b> car il détermine comment le chiffre fonctionne. 
    Pour déchiffrer un message chiffré à l’aide d’un cryptosystème, il faut connaître le cryptosystème utilisé, en l’occurrence <p style="color:red;">CESAR</p> et la clé de chiffrement (ici le décalage d dans l’alphabet). 
    On désigne donc ce chiffre par le nom du cryptosystème et la clé de chiffrement <b>CESAR</b>(<i>d</i>).</p><br>

    <p>Le chiffre <b>CESAR(2)</b> décale toutes les lettres de 2 positions vers la droite dans l’alphabet</p>
    <p class="Alphabet">
    Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
    Alphabet chiffré : C D E F G H I J K L M N O P Q R S T U V W X Y Z A B
    </p><br>

    <p>Et voici la correspondance pour le chiffre <b>CESAR(24)</b></p>
    <p class="Alphabet">
    Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
    Alphabet chiffré : Y Z A B C D E F G H I J K L M N O P Q R S T U V W X
    </p><br>

    <p>Le chiffre <b>CESAR(26)</b> n’est pas un chiffre utile puisqu’il décale toutes les lettres de 26 positions dans l’alphabet et qu’elles sont donc toutes chiffrées par elle-même (tour complet dans l’alphabet).</p>
    <p class="Alphabet">
    Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
    Alphabet chiffré : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    </p><br>

    <h2>1.2.4 Activité 1</h2>
    <!-- Activité-1: Reprendre la même fonction que pour la Q-1 mais en l'adaptant à l'exercice, pour une clé de CESAR(4) [chiffrement] -->

    <!-- 1.2.5 Activité-2: Reprendre la même fonction que pour la Q-1 mais en l'adaptant à l'exercice, pour une clé de CESAR(4) [déchiffrement] -->

    <!-- 1.2.6 Activité-3A (Implémentation du chiffrement de César): Demander aide à DONNER pour faire correcteur de code pour fonction "cesar_encrypt(text, d)"
    + Afficher Indice-n si bouton-n est appuyé -->

    <!-- 1.2.7 Activité 3B (Implémentation du déchiffrement de César): Demander aide à DONNER pour faire correcteur de code pour fonction "cesar_encrypt(text, d)" -->

    <!-- 1.2.8 Activité 4 (Cryptanalyse): Reprendre la même fonction que pour la Q-1 mais en l'adaptant à l'exercice
    + Refaire correcteur pour vérifier fonction cryptanalyse CESAR
    + Q-4: Reprendre la même fonction que pour la Q-1 mais en l'adaptant à l'exercice -->



  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isClick = ref(false)

function showtext() {
  isClick.value = !isClick.value
}

  const correctAnswer = 'JETINVITEAUCINEMADEMAINSOIRAVINGTHEURESREJOINSMOIALAGARE'

const myQuestions = reactive([
  {
    id: 0,
    question: 'What is 10/2?',
    answers: {
      a: '3',
      b: '5',
      c: '115',
    },
    correctAnswer: 'b',
  },
  {
    id: 1,
    question: 'What is 30/3?',
    answers: {
      a: '3',
      b: '5',
      c: '10',
    },
    correctAnswer: 'c',
  },
])

const answers = reactive({
  rodolphe: '',
})
</script>

<style lang="scss" scoped></style>