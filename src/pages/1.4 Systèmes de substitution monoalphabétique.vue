<template>
  <q-page class="pa-4 ">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <p>
        Le chiffre de César est un exemple de <strong>chiffre monoalphabétique</strong> car il consiste à remplacer chaque lettre du message toujours par la même lettre chiffrée. 
        Par exemple, pour un décalage de <i>d = 1</i>, tous les A, sont remplacés par des B, tous les B par des C etc.
        </p><br>

        <p>
        Il n’est cependant pas nécessaire que le chiffrement soit le résultat d’un décalage constant dans l’alphabet.<br> 
        En effet, au lieu d’utiliser un décalage de <i>d = 3</i> et obtenir la substitution.
        </p><br>

        <p class="text-center bg-info rounded-borders">
        Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
        Alphabet chiffré : D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
        </p><br>

        <p>
        On peut très bien mélanger complètement les lettres de l’alphabet chiffré.
        </p><br>

        <p class="text-center bg-info rounded-borders">
        Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
        Alphabet chiffré : Q O L W N X T M G D K B P R S E U V F Z H J I Y C A
        </p><br>

        <p>
        Ce chiffre remplace tous les A par des Q, les B par des O etc. Pour créer l’alphabet chiffré, on a mélangé l’alphabet dans un ordre totalement aléatoire.
        </p>

        <q-btn unelevated rounded label="Valider la section" v-if="section.first === false" class="align-right" color="primary" @click="section.first = !section.first"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.first === true" class="align-right" color="green" @click="section.first = !section.first"/>



        <q-separator inset />


        <h2>1.4.1 Énigme 2</h2>

        <h3>Short Answer</h3>

        <p>
        Q-1: Cindy utilise la substitution...
        </p><br>

        <p class="text-center bg-info rounded-borders">
        Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
        Alphabet chiffré : Q O L W N X T M G D K B P R S E U V F Z H J I Y C A
        </p><br>

        <p>
        ... pour chiffrer un message. Voici le message chiffré par Cindy.
        </p><br>

        <p class="text-center bg-info rounded-borders">
        DQGPNBNUHGZQZGSR
        </p><br>

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

        <q-btn unelevated rounded label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond1 = true" />

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
        </q-dialog><br><br>

        <q-btn unelevated rounded label="Valider la section" v-if="section.second === false" class="align-right" color="primary" @click="section.second = !section.second"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.second === true" class="align-right" color="green" @click="section.second = !section.second"/>
        
        <q-separator inset />



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

        <q-btn unelevated rounded label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond2 = true" />

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

                <p class="text-center bg-info rounded-borders">
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
        </q-dialog>

        <h3>Short Answer</h3>

        <p>
        Q-3: Combien de clés de chiffrement différentes existe-t-il ?
        </p>

        <q-input
            v-model="text.q3"
            filled
            type="textarea"
        /><br>

        <q-btn unelevated rounded label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond3 = true" />

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
                Combien de tels “mots de passe” existe-t-il ?<br><br>
                Pour “essayer” toutes les clés (force brute), il faut imaginer des cases vides.
                </p><br>

                <p class="text-center bg-info rounded-borders">
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                </p><br>

                <p>
                Pour la première “case” vide, on a 26 possibilités.
                </p><br>

                <p class="text-center bg-info rounded-borders">
                A _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br>
                B _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br>
                C _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br>
                D _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br>
                ...<br>
                Z _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _<br>
                </p><br>

                <p>
                Pour la deuxième “case vide”, il ne reste plus que 25 lettres possibles puisqu’une lettre a déjà été choisie pour la première “case vide” et qu’on ne peut utiliser chaque lettre qu’une seule fois.<br><br>
                Le nombre total de clés vaut donc:<br><br>

                26 * 25 * 24 * ... * 1<br><br>

                Il s’agit d’un nombre colossal!!
                </p>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond3 = false" />
            </q-card-actions>
            </q-card>
        </q-dialog><br><br>

        <q-btn unelevated rounded label="Valider la section" v-if="section.third === false" class="align-right" color="primary" @click="section.third = !section.third"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.third === true" class="align-right" color="green" @click="section.third = !section.third"/>
        
        <q-separator inset />



        <h2>1.4.3 Génération de permutations aléatoires</h2>

        <p>
        Pour exploiter cette méthode de chiffrement, vous aurez besoin de générer des clés de chiffrement aléatoires. 
        Vous pouvez utiliser le programme ci-dessous pour générer des permutations de l’alphabet latin (ou tout autre alphabet en cas de besoin).
        </p>

        <h3>Exemple</h3>

        <p>
        Pour la fonction python suivante:
        </p><br><br>

        <p class=" bg-info rounded-borders" style="color:black;" padding margin>
        <span style="color:purple;">from</span> random <span style="color:purple;">import</span> shuffle<br>
        <br>
        alphabet = <span style="color:brown;">'ABCDEFGHIJKLMNOPQRSTUVWXYZ'</span><br>
        chars = <span style="color:purple;">list</span>(alphabet)<br>
        shuffle(chars)<br>
        permutation = <span style="color:brown;">""</span>.join(chars)<br>
        <span style="color:purple;">print</span>(<span style="color:brown;">"Permutation aléatoire:"</span>, permutation)<br>
        </p><br>

        <p>
        Les résultats du code peuvent varier, par exemple:
        </p><br><br>

        <p class=" bg-info rounded-borders" style="color:black;">
        Permutation aléatoire: MOAFGNYRJVXCSHQWUIPKTBEDLZ<br>
        Permutation aléatoire: GLVNZMROSAHFQWCKDTYXIPBEUJ<br>
        Permutation aléatoire: KFZSUDHMQYVXBNRAEGLJTIPOWC<br>
        Permutation aléatoire: QMIGDKNJPWRHUEYVBCLSTFXZAO<br>
        ...
        </p>

        <h3>Remarque</h3>

        <p>
        Il n’est pas nécessaire d’essayer de comprendre ce programme qui contient des éléments encore non étudiés. 
        Il vous est juste donné pour générer des permutations aléatoires. 
        Dans le chapitre sur les listes, nous reviendrons sur ce programme.
        </p>

        <q-btn unelevated rounded label="Valider la section" v-if="section.fourth === false" class="align-right" color="primary" @click="section.fourth = !section.fourth"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.fourth === true" class="align-right" color="green" @click="section.fourth = !section.fourth"/>
        
        <q-separator inset />

        <!-- 
        <h2>1.4.4 Activité 1</h2>
        <h2>1.4.5 Activité 2</h2>
        -->


        <h2>1.4.4.1 Stratégie de résolution (vidéo)</h2>

        <iframe class="align-center" width="500" height="315"
        src="https://www.youtube.com/embed/aPo5WKqB74U"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

        <q-btn unelevated rounded label="Valider la section" v-if="section.fifth === false" class="align-right" color="primary" @click="section.fifth = !section.fifth"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.fifth === true" class="align-right" color="green" @click="section.fifth = !section.fifth"/>
        
        <q-separator inset />


        <h2>1.4.4.2 Aide / blocs</h2>

        <p>
        Q-4: Si vous ne parvenez pas à implémenter le décryptage, vous pouvez vous aider des blocs ci-dessous qu'il faut choisir et réorganiser. 
        Après avoir réussi à organiser les blocs correctement, essayez de comprendre la solution (par exemple avec le débogueur de Thonny), cachez la solution et essayez de résoudre l'exercice sans aide.
        </p>

        <!-- Faire cartes que l'on peut bouger -->
        <q-btn unelevated rounded label="Valider la section" v-if="section.sixth === false" class="align-right" color="primary" @click="section.sixth = !section.sixth"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.sixth === true" class="align-right" color="green" @click="section.sixth = !section.sixth"/>
        
        <q-separator inset />


        <!--
        <h2>1.4.6 Activité 3</h2>
        <h2>1.4.7 Activité 4 (factorielle)</h2>
        <h2>1.4.8 Activité 5 (number_permutations)</h2>
        -->


        <h2>1.4.5 Activité 5</h2>

        <h3>Short Answer</h3>

        <p>
        Q-5: En admettant que l’ordinateur soit assez puissant pour essayer 100 millions (108) de clés par seconde dans une attaque par force brute, combien de temps faudrait-il pour tester toutes les clés possibles ?
        </p>

        <q-input
            v-model="text.q5"
            filled
            type="textarea"
        /><br>

        <q-btn unelevated rounded label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond4 = true" />

        <q-dialog v-model="dialogVisible.respond4" @hide="onHide">
            <q-card>
            <q-card-section class="row items-center q-pb-none">
                <strong class="text-h6" style="color:orange;">Q-5: Réponse</strong>
                <q-space />
            </q-card-section>

            <q-card-section style="color:orange;">
                <ul>
                <li>
                Nombre de secondes :<br>
                (4.0329146 * (10 ** 26)) / (10 ** 8) ≈ 4 * (10 ** 18) secondes<br><br>
                </li>
                
                <li>
                Nombre d’heures :<br>
                (4.0329146 * (10 ** 26)) / ((10 ** 8) * 3600) ≈ 4 * (10 ** 18) = 1120254058685015.8 heures<br><br>
                </li>

                <li>
                Nombre d’années :<br>
                (4.0329146 * (10 ** 26) / ((10 ** 8) * 3600 *24 * 365.25) ≈ 4 * (10 ** 18) = 127795352348.27924 années<br><br>
                </li>
                </ul>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond4 = false" />
            </q-card-actions>
            </q-card>
        </q-dialog><br><br>

        <q-btn unelevated rounded label="Valider la section" v-if="section.seventh === false" class="align-right" color="primary" @click="section.seventh = !section.seventh"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.seventh === true" class="align-right" color="green" @click="section.seventh = !section.seventh"/>
        
        <q-separator inset />



        <h2>1.4.6 À retenir</h2>

        <p>
        Dès que la clé de chiffrement est une permutation d’un alphabet donné, le nombre de clés possibles devient très grand, même avec un alphabet relativement modeste. 
        Si l’alphabet contient <i>n</i> caractères, le nombre de clé qu’il est possible de créer à partir de cet alphabet est donné par le produit.<br><br>

        <p class="text-center bg-info rounded-borders">
            <strong>n * (n - 1) * (n - 2) * ... * 2 * 1 = n!</strong>
        </p><br><br>

        Le nombre <strong>n!</strong> s’appelle en mathématiques “n factorielle” ou “la factorielle de n”. 
        Vos calculatrices disposent d’une touche <span style="color:red;">n!</span> pour calculer facilement ce produit sans devoir écrire un programme comme nous l’avons fait plus haut.
        </p><br>

        <p>
        Dès que le nombre de clés devient important, il est totalement illusoire de vouloir casser un code secret par force brute. 
        Il faut faire preuve d’astuce et utiliser des informations supplémentaire sur le message codé. 
        Dans la prochaine section, nous allons voir comment casser des chiffres de substitution monoalphabétique par une attaque fréquentielle qui tient compte des spécificités de la langue dans lequel le message en clair est écrite.
        </p>

        <q-btn unelevated rounded label="Valider la section" v-if="section.eighth === false" class="align-right" color="primary" @click="section.eighth = !section.eighth"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.eighth === true" class="align-right" color="green" @click="section.eighth = !section.eighth"/>
      </div>
    </div>

    <h2>1.3.4 Quiz 2</h2>
    <div class="text-center">
      <div v-show="index === counter" v-for="(question, index) in myQuizQuestions" :key="question.id">
        <h3>Question numéro {{index + 1}}</h3>

        <p class="question">
        {{question.question}}
        </p>

        <div class="q-pa-md">
          <div v-for="(value, key) in question.answers" class="q-gutter-sm">
            <q-radio v-model="answers[index]" :key="key" :val="value" :label="value"/>
          </div>
          
          <div v-show="isClick === true">
            <div v-if="myQuizQuestions[index].correctAnswer === answers[index]">
              <p class="q-px-sm" style="color:green;">Bonne réponse</p>
            </div>

            <div v-else>
              <p class="q-px-sm" style="color:red;">Mauvaise réponse</p>
            </div>
          </div>   
        </div>  
      </div>
      <q-btn rounded label="Valider" @click="changeClick()"/>
    </div><br>

    <q-btn unelevated rounded label="Valider la section" v-if="section.fifth === false" class="align-right" color="primary" @click="section.fifth = !section.fifth"/>
    <q-btn unelevated rounded label="Section validée" v-if="section.fifth === true" class="align-right" color="green" @click="section.fifth = !section.fifth"/><br><br><br>


    <q-page-sticky position="bottom-left" :offset="[5, 5]" class="text-primary bg-#cccccccc">
      <q-btn icon="home" to="/"></q-btn>
      <q-btn icon="keyboard_arrow_left" to="/1.3 Attaque par force brute">1.3 Attaque par force brute</q-btn>
      <q-btn icon="keyboard_arrow_right" to="/1.5 Attaque par fréquence">1.5 Attaque par fréquence</q-btn>
    </q-page-sticky>
    
    <q-page-sticky position="top" expand class="bg-positive text-white text-center">
      <q-toolbar>
        <q-toolbar-title>1.4 Systèmes de substitution monoalphabétique</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

//Changer contenu
const myQuizQuestions = reactive([
  {
      id: ref(0),
    question: "En quoi consiste le système de substitution monoalphabétique ?",
    answers: {
      a: "Il consiste à mélanger les lettres de l'alphabet chiffré.",
      b: "Il consiste à se servir d'un mot, par lequel le texte chiffré sera fait à partir du décalage entre la lettre de la clé qui correspond à la lettre en clair.",
      c: "Il consiste à se servir d'un baton autour ducoup une tranche de cuir est enroulée pour former le texte en clair."

    },
    choice: ref(''),
    correctAnswer: "Il consiste à mélanger les lettres de l'alphabet chiffré."
  }
])

const answers = reactive([])

const isClick = ref(false)

function changeClick() {
  isClick.value = !isClick.value
}

const counter = ref(0)

let dialogVisible = reactive({
  respond1: ref(false),
  respond2: ref(false),
  respond3: ref(false),
  respond4: ref(false)
})

function onHide(order) {
  dialogVisible.order.value = false
}

let text = reactive({
  q2: ref(''),
  q5: ref('')
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

let section = reactive ({
    first: ref(false),
    second: ref(false),
    third: ref(false),
    fourth: ref(false),
    fifth: ref(false),
    sixth: ref(false),
    seventh: ref(false),
    eighth: ref(false)
})
</script>

<style lang="scss" scoped></style>