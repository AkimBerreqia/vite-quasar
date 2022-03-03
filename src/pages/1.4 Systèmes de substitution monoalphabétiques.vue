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
          <q-carousel-slide name="ssm1" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p>
            Le chiffre de César est un exemple de <strong>chiffre monoalphabétique</strong> car il consiste à remplacer chaque lettre du message toujours par la même lettre chiffrée. 
            Par exemple, pour un décalage de <i>d = 1</i>, tous les A, sont remplacés par des B, tous les B par des C etc.
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="ssm2" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p>
            Il n’est cependant pas nécessaire que le chiffrement soit le résultat d’un décalage constant dans l’alphabet.<br> 
            En effet, au lieu d’utiliser un décalage de <i>d = 3</i> et obtenir la substitution.
            </p><br>

            <p class="text-left bg-info rounded-borders">
            Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
            Alphabet chiffré : D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="ssm3" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p>
            On peut très bien mélanger complètement les lettres de l’alphabet chiffré.
            </p><br>

            <p class="text-left bg-info rounded-borders">
            Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
            Alphabet chiffré : Q O L W N X T M G D K B P R S E U V F Z H J I Y C A
            </p><br>

            <p>
            Ce chiffre remplace tous les A par des Q, les B par des O etc. Pour créer l’alphabet chiffré, on a mélangé l’alphabet dans un ordre totalement aléatoire.
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
          height="600px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="enigme2" class="column no-wrap flex-center text-center">
            <h2>1.4.1 Énigme 2</h2>

            <q-icon name="key" size="28px" /><br>

            <h3>Short Answer</h3>

            <p>
            Q-1: Cindy utilise la substitution...
            </p><br>

            <p class="text-left bg-info rounded-borders">
            Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
            Alphabet chiffré : Q O L W N X T M G D K B P R S E U V F Z H J I Y C A
            </p><br>

            <p>
            ... pour chiffrer un message. Voici le message chiffré par Cindy.
            </p><br>

            <p class="text-left bg-info rounded-borders">
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
            </q-dialog>
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
          height="500px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="qc1" class="column no-wrap flex-center text-center">
            <h2>1.4.2 Question de compréhension</h2>

            <q-icon name="key" size="28px" /><br>

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
          </q-carousel-slide>

          <q-carousel-slide name="qc2" class="column no-wrap flex-center text-center">
            <h3>Short Answer</h3>
            
            <q-icon name="key" size="28px" /><br>

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
                  Combien de tels “mots de passe” existe-t-il ?<br><br>
                  Pour “essayer” toutes les clés (force brute), il faut imaginer des cases vides.
                  </p><br>

                  <p class="text-left bg-info rounded-borders">
                  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                  </p><br>

                  <p>
                  Pour la première “case” vide, on a 26 possibilités.
                  </p><br>

                  <p class="text-left bg-info rounded-borders">
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
            </q-dialog>
          </q-carousel-slide>
        </q-carousel>


        <q-carousel
          v-model="action.slide4"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="600px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="permutations1" class="column no-wrap flex-center text-center">
            <h2>1.4.3 Génération de permutations aléatoires</h2>
            
            <q-icon name="key" size="28px" /><br>

            <p>
            Pour exploiter cette méthode de chiffrement, vous aurez besoin de générer des clés de chiffrement aléatoires. 
            Vous pouvez utiliser le programme ci-dessous pour générer des permutations de l’alphabet latin (ou tout autre alphabet en cas de besoin).
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="permutations2" class="column no-wrap flex-center text-center">
            <h3>Exemple</h3>
            
            <q-icon name="key" size="28px" /><br>

            <p>
            Pour la fonction python suivante:
            </p><br><br>

            <p class="text-left bg-info rounded-borders" style="color:black;" padding margin>
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

            <p class="text-left bg-info rounded-borders" style="color:black;">
            Permutation aléatoire: MOAFGNYRJVXCSHQWUIPKTBEDLZ<br>
            Permutation aléatoire: GLVNZMROSAHFQWCKDTYXIPBEUJ<br>
            Permutation aléatoire: KFZSUDHMQYVXBNRAEGLJTIPOWC<br>
            Permutation aléatoire: QMIGDKNJPWRHUEYVBCLSTFXZAO<br>
            ...
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="permutations3" class="column no-wrap flex-center text-center">
            <h3>Remarque</h3>
            
            <q-icon name="key" size="28px" /><br>

            <p>
            Il n’est pas nécessaire d’essayer de comprendre ce programme qui contient des éléments encore non étudiés. 
            Il vous est juste donné pour générer des permutations aléatoires. 
            Dans le chapitre sur les listes, nous reviendrons sur ce programme.
            </p>
          </q-carousel-slide>
        </q-carousel>

        <!-- 
        <h2>1.4.4 Activité 1</h2>
        <h2>1.4.5 Activité 2</h2>
        -->

        <q-carousel
          v-model="action.slide5"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="500px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="video" class="column no-wrap flex-center text-center">
            <h2>1.4.4.1 Stratégie de résolution (vidéo)</h2>

            <q-icon name="key" size="28px" /><br>

            <iframe width="560" height="315"
            src="https://www.youtube.com/embed/aPo5WKqB74U"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          </q-carousel-slide>
        </q-carousel>

        <q-carousel
          v-model="action.slide6"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="500px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="aide" class="column no-wrap flex-center text-center">
            <h2>1.4.4.2 Aide / blocs</h2>

            <q-icon name="key" size="28px" /><br>

            <p>
            Q-4: Si vous ne parvenez pas à implémenter le décryptage, vous pouvez vous aider des blocs ci-dessous qu'il faut choisir et réorganiser. 
            Après avoir réussi à organiser les blocs correctement, essayez de comprendre la solution (par exemple avec le débogueur de Thonny), cachez la solution et essayez de résoudre l'exercice sans aide.
            </p>

            <!-- Faire cartes que l'on peut bouger -->
          </q-carousel-slide>
        </q-carousel>

        <!--
        <h2>1.4.6 Activité 3</h2>
        <h2>1.4.7 Activité 4 (factorielle)</h2>
        <h2>1.4.8 Activité 5 (number_permutations)</h2>
        -->

        <q-carousel
          v-model="action.slide6"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="500px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="aide" class="column no-wrap flex-center text-center">
            <h2>1.4.5 Activité 6</h2>

            <q-icon name="key" size="28px" /><br>

            <h3>Short Answer</h3>

            <p>
            Q-6: En admettant que l’ordinateur soit assez puissant pour essayer 100 millions (108) de clés par seconde dans une attaque par force brute, combien de temps faudrait-il pour tester toutes les clés possibles ?
            </p>

            <q-input
              v-model="text.q6"
              filled
              type="textarea"
            /><br>

            <q-btn label="AFFICHER LA RÉPONSE" style="color:orange;" @click="dialogVisible.respond6 = true" />

            <q-dialog v-model="dialogVisible.respond6" @hide="onHide">
              <q-card>
                <q-card-section class="row items-center q-pb-none">
                  <strong class="text-h6" style="color:orange;">Q-2: Réponse</strong>
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
                  <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond6 = false" />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </q-carousel-slide>
        </q-carousel>

        <q-carousel
          v-model="action.slide8"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="500px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="retenir1" class="column no-wrap flex-center text-center">
            <h2>1.4.6 À retenir</h2>

            <q-icon name="key" size="28px" /><br>

            <p>
            Dès que la clé de chiffrement est une permutation d’un alphabet donné, le nombre de clés possibles devient très grand, même avec un alphabet relativement modeste. 
            Si l’alphabet contient <i>n</i> caractères, le nombre de clé qu’il est possible de créer à partir de cet alphabet est donné par le produit.<br><br>

            <strong>n * (n - 1) * (n - 2) * ... * 2 * 1 = n!</strong><br><br>

            Le nombre <strong>n!</strong> s’appelle en mathématiques “n factorielle” ou “la factorielle de n”. 
            Vos calculatrices disposent d’une touche <span style="color:red;">n!</span> pour calculer facilement ce produit sans devoir écrire un programme comme nous l’avons fait plus haut.
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="retenir2" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p>
            Dès que le nombre de clés devient important, il est totalement illusoire de vouloir casser un code secret par force brute. 
            Il faut faire preuve d’astuce et utiliser des informations supplémentaire sur le message codé. 
            Dans la prochaine section, nous allons voir comment casser des chiffres de substitution monoalphabétique par une attaque fréquentielle qui tient compte des spécificités de la langue dans lequel le message en clair est écrite.
            </p>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>


    <q-page-scroller expand position="top" :scroll-offset="-1" :offset="[0, 0]">
      <div class="col cursor-pointer q-pa-sm bg-secondary text-white text-center">
        1.4 Systèmes de substitution monoalphabétiques (retourner au début de la page)
      </div>
    </q-page-scroller>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

let action = reactive({
  slide1: ref('ssm1'),
  slide2: ref('enigme2'),
  slide3: ref('qc1'),
  slide4: ref('permutations1'),
  slide5: ref('video'),
  slide6: ref('aide'),
  slide7: ref('activ6'),
  slide8: ref('retenir1')
})

let dialogVisible = reactive({
  respond1: ref(false),
  respond2: ref(false),
  respond6: ref(false),
  exemple1: ref(false),
  remarque: ref(false)
})

function onHide(order) {
  dialogVisible.order.value = false
}

let text = reactive({
  q2: ref(''),
  q6: ref('')
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