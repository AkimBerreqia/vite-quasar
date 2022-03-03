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
          <q-carousel-slide name="chifferCesar" class="column no-wrap flex-center text-center">
            <h1>1.2 Le chiffre de César</h1>

            <q-icon name="key" size="28px" /><br>

            <p>
            Le premier code secret que l’on va aborder est le <strong>chiffre de César</strong>. 
            En cryptographie, un <strong>chiffre</strong> est en réalité un synonyme de <strong>code secret</strong>. 
            Il s’agit d’une <strong>méthode de chiffrement</strong> qui permet de transformer un message intelligible et facilement lisible (<b>texte en clair</b>) en un <b>texte chiffré</b> inintelligible.
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
          height="450px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="enigme11" class="column no-wrap flex-center text-center">
            <h2>1.2.1 Énigme 1</h2>

            <q-icon name="key" size="28px" /><br>

            <p>
            Robert utilise le chiffre de César pour chiffrer le message <span style="color:red;">RENDEZVOUSAUKIOSKATROISHEURES</span> et obtient le message chiffré <span style="color:red;">SFOEFAWPVTBVLJPTLBUSPJTIFVSFT</span>. 
            Vous remarquerez que le message chiffré est écrit en majuscules, sans accent, sans espace ni ponctuation. 
            Cela permet d’une part de faciliter le chiffrement et, d’autre part, de révéler moins d’information (notamment la longueur des mots formant le message).
            </p><br>

            <p class="text-left bg-info rounded-borders">
            Message en clair: RENDEZVOUSAUKIOSKATROISHEURES<br>
            Message chiffré : SFOEFAWPVTBVLJPTLBUSPJTIFVSFT
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="enigme12" class="column no-wrap flex-center text-center">
            <h3>Short Answer</h3>
            
            <q-icon name="key" size="28px" /><br>

            <h4>Q-1: Sauriez-vous expliquer comment fonctionne cette méthode de chiffrement?</h4>
            <!-- Stoquer la réponse -->
            
            <q-input
              v-model="text.q1"
              filled
              type="textarea"
            /><br>

            <q-btn label="AFFICHER LA RÉPONSE" style="color:orange;" @click="dialogVisible.respond1 = true" />

            <q-dialog v-model="dialogVisible.respond1" @hide="onHide">
              <q-card>
                <q-card-section class="row items-center q-pb-none">
                  <strong class="text-h6" style="color:orange;">Q-1: Réponse</strong>
                  <q-space />
                </q-card-section>

                <q-card-section style="color:orange;">
                  <p>
                  Il y a un décalage qui se forme pour chaque lettre entre les deux messages. 
                  Par exemple, la lettre <i>R</i> devient la lettre <i>S</i>.
                  </p>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond1 = false" />
                  </q-card-actions>
              </q-card>
            </q-dialog>
          </q-carousel-slide>

          <q-carousel-slide name="enigme13" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p>
            Rodolphe utilise la même méthode de chiffrement que Robert pour chiffrer un message. 
            Voici le message chiffré qu’il envoie à Julie. 
            Essayez de déchiffrer ce message:
            </p><br>
            
            <p class="text-left bg-info rounded-borders">
            KFUJOWJUFBVDJOFNBEFNBJOTPJSBWJOHUIFVSFTSFKPJOTNPJBMBHBSF
            </p><br>
            
            <div class="q-pa-md">
                <div class="q-gutter-y-md column" style="max-width: 1050px">
                  <q-input bottom-slots v-model="myQuestions.rodolphe" label="Réponse :" counter maxlength="56" :dense="dense" style='text-transform:uppercase'>
                    <template v-slot:hint>
                    <p>{{respondAnswer(myQuestions.rodolphe, myQuestions.rodolpheCorrectAnswer, 56)}}</p>
                    </template>
                  </q-input>
                </div>
            </div>

            <q-btn-group>
              <q-btn label="Indices" style="color:green;" @click="dialogVisible.indice1 = true" />

              <q-dialog v-model="dialogVisible.indice1" @hide="onHide">
                <q-card>
                  <q-card-section class="row items-center q-pb-none">
                    <strong class="text-h6" style="color:green;">Q-Rodolphe: Indices</strong>
                    <q-space />
                  </q-card-section>

                  <q-card-section style="color:green;">
                    <ul style="color:green;">
                      <li>Toutes les lettres se suivent sans espace.</li><br>
                      <li>Il te sera plus simple de décrypter cette phrase en te servant d'une feuille et d'un crayon.</li><br>
                      <li>Le début du texte en clair est : "<strong>JETINVITE</strong>".</li>
                    </ul>
                  </q-card-section>
                  <q-card-actions align="right">
                      <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.indice1 = false" />
                    </q-card-actions>
                </q-card>
              </q-dialog>

              <q-btn label="AFFICHER LA RÉPONSE" style="color:orange;" @click="dialogVisible.respond2 = true" />

              <q-dialog v-model="dialogVisible.respond2" @hide="onHide">
                <q-card>
                  <q-card-section class="row items-center q-pb-none">
                    <strong class="text-h6" style="color:orange;">Q-Rodolphe: Réponse</strong>
                    <q-space />
                  </q-card-section>

                  <q-card-section style="color:orange;">
                    <strong>JETINVITEAUCINEMADEMAINSOIRAVINGTHEURESREJOINSMOIALAGARE</strong>
                  </q-card-section>
                  <q-card-actions align="right">
                      <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond2 = false" />
                    </q-card-actions>
                </q-card>
              </q-dialog>
            </q-btn-group>
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
          <q-carousel-slide name="fonctionnement1" class="column no-wrap flex-center text-center">
            <h2>1.2.2 Fonctionnement</h2>

            <q-icon name="key" size="28px" /><br>

            <p>
            Comme vous avez sans doute pu le deviner, le chiffre de César est très simple. 
            Il suffit de décaler toutes les lettres d’un certain nombre de positions dans l’alphabet. 
            En observant le message en clair et le message chiffré de Robert...
            </p><br>

            <p class="text-left bg-info rounded-borders">
            Message en clair: RENDEZVOUSAUKIOSKATROISHEURES<br>
            Message chiffré : SFOEFAWPVTBVLJPTLBUSPJTIFVSFT
            </p><br>

            <p>
            ... on peut constater que le message chiffré n’est rien d’autre que le message en clair où chaque lettre a été “décalée de 1 position vers la droite dans l’alphabet”. 
            Autrement dit, le A est chiffré par B, le B par C etc jusqu’au Z qui est chiffré par A. 
            On peut représenter cela par le schéma suivant:
            </p><br>

            <!-- Si besoin, image de décalage César -->

            <p>
            Fonctionnement du chiffre Cesar(1) qui décale toutes les lettres de 1 position dans l’alphabet latin.<br><br>
            La première ligne correspond à l’alphabet en clair et la deuxième ligne montre par quelle lettre chaque lettre de la première ligne est chiffrée.
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="fonctionnement2" class="column no-wrap flex-center text-center">
            <h3>Remarque</h3>

            <q-icon name="key" size="28px" /><br>

            <p>
            Vous remarquerez qu’une fois arrivé à la fin de l’alphabet, on recommence au début. 
            Ainsi, le Z est chiffré par le A.
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="fonctionnement3" class="column no-wrap flex-center text-center">
            <h3>Nouvelle notion</h3>

            <q-icon name="key" size="28px" /><br>

            <p>
            Le chiffre de César est un exemple typique de <strong>chiffre monoalphabétique</strong>. 
            Les codes secrets ou chiffres monoalphabétiques consistent à remplacer chaque lettre du message en clair par une autre lettre de l’alphabet. 
            particularité des chiffres monoalphabétiques tels que le chiffre de César est que chaque lettre du message en clair est toujours chiffré par la même lettre.
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="fonctionnement4" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p>
            On peut aussi représenter le chiffre de César(1) de la manière suivante avec deux “roues”. 
            Si le décalage vaut d, on tourne la roue extérieure de d crans vers la gauche. 
            Dans le cas présent, on a tourné la roue extérieure de 1 cran vers la gauche. 
            L’alphabet du centre correspond aux lettres en clair et celles du cercle extérieur aux lettres chiffrées.
            </p>

            <!-- Si besoin, image roue César -->
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
          height="400px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="cryptosystèmes1" class="column no-wrap flex-center text-center">
            <h2>1.2.3 Cryptosystèmes et clés de chiffrement</h2>
            
            <q-icon name="key" size="28px" /><br>

            <p>
            Il existe en réalité 25 chiffres de César différents correspondant aux 25 décalages possibles dans l’alphabet. 
            Ces différents chiffres forment ce que l’on appelle un <strong>cryptosystème</strong>. 
            Un cryptosystème est un ensemble de chiffres qui fonctionnent tous de la même manière à un paramètre près. 
            Dans le cas du chiffre de César, le paramètre est le décalage <i>d</i> dans l’alphabet. 
            Ce paramètre est appelé <strong>clé de chiffrement</strong> car il détermine comment le chiffre fonctionne. 
            Pour déchiffrer un message chiffré à l’aide d’un cryptosystème, il faut connaître le cryptosystème utilisé, en l’occurrence <span style="color:red;">CESAR</span> et la clé de chiffrement (ici le décalage d dans l’alphabet). 
            On désigne donc ce chiffre par le nom du cryptosystème et la clé de chiffrement <strong>CESAR</strong>(<i>d</i>).
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="cryptosystèmes2" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p>
            Le chiffre <strong>CESAR(2)</strong> décale toutes les lettres de 2 positions vers la droite dans l’alphabet.
            </p><br>
            
            <p class="text-left bg-info rounded-borders">
            Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
            Alphabet chiffré : C D E F G H I J K L M N O P Q R S T U V W X Y Z A B
            </p><br>

            <p>
            Et voici la correspondance pour le chiffre <strong>CESAR(24).</strong>
            </p><br>
            
            <p class="text-left bg-info rounded-borders">
            Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
            Alphabet chiffré : Y Z A B C D E F G H I J K L M N O P Q R S T U V W X
            </p>
          </q-carousel-slide>

          <q-carousel-slide name="cryptosystèmes3" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p>
            Le chiffre <strong>CESAR(26)</strong> n’est pas un chiffre utile puisqu’il décale toutes les lettres de 26 positions dans l’alphabet et qu’elles sont donc toutes chiffrées par elle-même (tour complet dans l’alphabet).
            </p><br>

            <p class="Alphabet">
            Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
            Alphabet chiffré : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </p>
          </q-carousel-slide>
        </q-carousel>


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
          height="400px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="activ1" class="column no-wrap flex-center text-center">
            <h2>1.2.4 Activité 1</h2>

            <q-icon name="key" size="28px" /><br>

            <p>
            Chiffrez à la main le message ci-dessous à l’aide de <strong>CESAR(4)</strong>:
            </p><br>
            
            <p class="text-left bg-info rounded-borders">
            CRYPTOGRAPHIE
            </p><br>

            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 1050px">
                <q-input bottom-slots v-model="myQuestions.activ1" label="Réponse :" counter maxlength="13" :dense="dense" style='text-transform:uppercase'>
                  <template v-slot:hint>
                  <p>{{respondAnswer(myQuestions.activ1, myQuestions.activ1CorrectAnswer, 13)}}</p>
                  </template>
                </q-input>
              </div>
            </div>

            <q-btn label="AFFICHER LA RÉPONSE" style="color:orange;" @click="dialogVisible.respond3 = true" />

            <q-dialog v-model="dialogVisible.respond3" @hide="onHide">
              <q-card>
                <q-card-section class="row items-center q-pb-none">
                  <strong class="text-h6" style="color:orange;">Activité 1: Réponse</strong>
                  <q-space />
                </q-card-section>

                <q-card-section style="color:orange;">
                  <strong>GVCTXSKVETLMI</strong>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond3 = false" />
                  </q-card-actions>
              </q-card>
            </q-dialog>
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
          height="400px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="activ2" class="column no-wrap flex-center text-center">
            <h2>1.2.5 Activité 2</h2>

            <q-icon name="key" size="28px" /><br>

            <p>
            Déchiffrez à la main le message suivant qui a été chiffré avec <strong>CESAR(4)</strong>:
            </p><br>
            
            <p class="text-left bg-info rounded-borders">
            YRIZMIXVERUYMPPIIWXYRIQIVQSVXI
            </p><br>

            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 1050px">
                <q-input bottom-slots v-model="myQuestions.activ2" label="Réponse :" counter maxlength="30" :dense="dense" style='text-transform:uppercase'>
                  <template v-slot:hint>
                  <p>{{respondAnswer(myQuestions.activ2, myQuestions.activ2CorrectAnswer, 30)}}</p>
                  </template>
                </q-input>
              </div>
            </div>

            <q-btn label="AFFICHER LA RÉPONSE" style="color:orange;" @click="dialogVisible.respond4 = true" />

            <q-dialog v-model="dialogVisible.respond4" @hide="onHide">
              <q-card>
                <q-card-section class="row items-center q-pb-none">
                  <strong class="text-h6" style="color:orange;">Activité 2: Réponse</strong>
                  <q-space />
                </q-card-section>

                <q-card-section style="color:orange;">
                  <strong>UNEVIETRANQUILLEESTUNEMERMORTE</strong>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond4 = false" />
                  </q-card-actions>
              </q-card>
            </q-dialog>
          </q-carousel-slide>
        </q-carousel>


        <!--
        <h2>1.2.6 Activité 3A (Implémentation du chiffrement de César)</h2>
        <h2>1.2.7 Activité 3B (Implémentation du déchiffrement de César)</h2>
        -->


        <q-carousel
          v-model="action.slide7"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="525px"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide name="cryptanalyse1" class="column no-wrap flex-center text-center">
            <h2>1.2.6. Activité 3 (Cryptanalyse)</h2>

            <q-icon name="key" size="28px" /><br>

            <p>
            Essayez de déchiffrer le message suivant qui a été chiffré avec un chiffre de César dont le décalage est inconnu.
            </p><br>

            <p class="text-left bg-info rounded-borders">
            FBKIEDTUIYHUKDUSXEIUFBKIUBBUIUVQYJQJJUDTHU
            </p><br>

            <h3>Short Answer</h3>

            <h4>Q-2: Commencez par décrire en gros la stratégie que vous allez utiliser.</h4>

            <q-input
              v-model="text.q2"
              filled
              type="textarea"
            />
          </q-carousel-slide>

          <q-carousel-slide name="cryptanalyse2" class="column no-wrap flex-center text-center">
            <h3>Short Answer</h3>

            <q-icon name="key" size="28px" /><br>

            <h4>Q-3: Quelle est la bonne clé de chiffrement ?</h4>

            <p class="text-left bg-info rounded-borders">
            FBKIEDTUIYHUKDUSXEIUFBKIUBBUIUVQYJQJJUDTHU
            </p><br>

            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 1050px">
                <q-input bottom-slots v-model="myQuestions.q3" label="Clé de chiffrement :" counter maxlength="2" :dense="dense" style='text-transform:uppercase'>
                  <template v-slot:hint>
                  <p>{{respondAnswer(myQuestions.q3, myQuestions.q3CorrectAnswer, 2)}}</p>
                  </template>
                </q-input>
              </div>
            </div>

            <q-btn label="AFFICHER LA RÉPONSE" style="color:orange;" @click="dialogVisible.respond5 = true" />

            <q-dialog v-model="dialogVisible.respond5" @hide="onHide">
              <q-card>
                <q-card-section class="row items-center q-pb-none">
                  <strong class="text-h6" style="color:orange;">Q-3: Réponse</strong>
                  <q-space />
                </q-card-section>

                <q-card-section style="color:orange;">
                  <p>
                  16
                  </p>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond5 = false" />
                  </q-card-actions>
              </q-card>
            </q-dialog>
          </q-carousel-slide>

          <q-carousel-slide name="cryptanalyse3" class="column no-wrap flex-center text-center">
            <q-icon name="key" size="28px" /><br>

            <p>
            Saisissez la réponse de l’exercice ci-dessous.
            </p><br>

            <p class="text-left bg-info rounded-borders">
            FBKIEDTUIYHUKDUSXEIUFBKIUBBUIUVQYJQJJUDTHU
            </p><br>

            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 1050px">
                <q-input bottom-slots v-model="myQuestions.activ4" label="Réponse :" counter maxlength="42" :dense="dense" style='text-transform:uppercase'>
                  <template v-slot:hint>
                  <p>{{respondAnswer(myQuestions.activ4, myQuestions.activ4CorrectAnswer, 42)}}</p>
                  </template>
                </q-input>
              </div>
            </div>

            <q-btn label="AFFICHER LA RÉPONSE" style="color:orange;" @click="dialogVisible.respond6 = true" />

            <q-dialog v-model="dialogVisible.respond6" @hide="onHide">
              <q-card>
                <q-card-section class="row items-center q-pb-none">
                  <strong class="text-h6" style="color:orange;">Activité 3: Réponse</strong>
                  <q-space />
                </q-card-section>

                <q-card-section style="color:orange;">
                  <strong>PLUSONDESIREUNECHOSEPLUSELLESEFAITATTENDRE</strong>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond6 = false" />
                  </q-card-actions>
              </q-card>
            </q-dialog>
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
  slide1: ref('chifferCesar'),
  slide2: ref('enigme11'),
  slide3: ref('fonctionnement1'),
  slide4: ref('cryptosystèmes1'),
  slide5: ref('activ1'),
  slide6: ref('activ2'),
  slide7: ref('cryptanalyse1')
})

let dialogVisible = reactive({
  respond1: ref(false),
  respond2: ref(false),
  respond3: ref(false),
  respond4: ref(false),
  respond5: ref(false),
  respond6: ref(false),
  indice1: ref(false),
  remarque: ref(false),
  nouvelleNotion: ref(false),
  indications: ref(false)
})

function onHide(order) {
  dialogVisible.order.value = false
}

let text = reactive({
  q1: ref(''),
  q2: ref(''),
  q3: ref('')
})

const dense = ref(false)

const myQuestions = reactive({
  rodolphe: '',
  rodolpheCorrectAnswer: 'JETINVITEAUCINEMADEMAINSOIRAVINGTHEURESREJOINSMOIALAGARE',

  activ1: '',
  activ1CorrectAnswer: 'GVCTXSKVETLMI',

  activ2: '',
  activ2CorrectAnswer: 'UNEVIETRANQUILLEESTUNEMERMORTE',

  q3: '',
  q3CorrectAnswer: '16',

  activ4: '',
  activ4CorrectAnswer: 'PLUSONDESIREUNECHOSEPLUSELLESEFAITATTENDRE',
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