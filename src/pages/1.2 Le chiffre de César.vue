<template>
    <q-page class="pa-4">
        <div class="q-pa-md">
        <div class="q-gutter-md">
            <p>
            Le premier code secret que l’on va aborder est le <strong>chiffre de César</strong>. 
            En cryptographie, un <strong>chiffre</strong> est en réalité un synonyme de <strong>code secret</strong>. 
            Il s’agit d’une <strong>méthode de chiffrement</strong> qui permet de transformer un message intelligible et facilement lisible (<b>texte en clair</b>) en un <b>texte chiffré</b> inintelligible.
            </p>

            
            <q-btn unelevated rounded label="Valider la section" v-if="section.first === false" class="align-right" color="primary" @click="section.first = !section.first"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.first === true" class="align-right" color="green" @click="section.first = !section.first"/>
            
            <q-separator inset />
        
            <h2>1.2.1 Énigme 1</h2>

            <p>
            Robert utilise le chiffre de César pour chiffrer le message <span style="color:red;">RENDEZVOUSAUKIOSKATROISHEURES</span> et obtient le message chiffré <span style="color:red;">SFOEFAWPVTBVLJPTLBUSPJTIFVSFT</span>. 
            Vous remarquerez que le message chiffré est écrit en majuscules, sans accent, sans espace ni ponctuation. 
            Cela permet d’une part de faciliter le chiffrement et, d’autre part, de révéler moins d’information (notamment la longueur des mots formant le message).
            </p><br>

            <p class="text-center bg-info rounded-borders">
            Message en clair: RENDEZVOUSAUKIOSKATROISHEURES<br>
            Message chiffré : SFOEFAWPVTBVLJPTLBUSPJTIFVSFT
            </p>

            <h3>Short Answer</h3>

            <h4>Q-1: Sauriez-vous expliquer comment fonctionne cette méthode de chiffrement?</h4>
            <!-- Stoquer la réponse -->
            
            <q-input
                v-model="text.q1"
                filled
                type="textarea"
            /><br>

            <q-btn unelevated rounded label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond1 = true" />

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

            <p>
            Rodolphe utilise la même méthode de chiffrement que Robert pour chiffrer un message. 
            Voici le message chiffré qu’il envoie à Julie. 
            Essayez de déchiffrer ce message:
            </p><br>
            
            <p class="text-center bg-info rounded-borders">
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

            <q-btn-group unelevated rounded>
                <q-btn label="Indices" color="accent" @click="dialogVisible.indice1 = true" />

                <q-dialog v-model="dialogVisible.indice1" @hide="onHide">
                <q-card>
                    <q-card-section class="row items-center q-pb-none">
                    <strong class="text-h6" style="color:accent;">Q-Rodolphe: Indices</strong>
                    <q-space />
                    </q-card-section>

                    <q-card-section style="color:accent;">
                    <ul style="color:accent;">
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

                <q-btn label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond2 = true" />

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
            </q-btn-group><br><br>


            <q-btn unelevated rounded label="Valider la section" v-if="section.second === false" class="align-right" color="primary" @click="section.second = !section.second"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.second === true" class="align-right" color="green" @click="section.second = !section.second"/>
            
            <q-separator inset />


            <h2>1.2.2 Fonctionnement</h2>

            <p>
            Comme vous avez sans doute pu le deviner, le chiffre de César est très simple. 
            Il suffit de décaler toutes les lettres d’un certain nombre de positions dans l’alphabet. 
            En observant le message en clair et le message chiffré de Robert...
            </p><br>

            <p class="text-center bg-info rounded-borders">
            Message en clair: RENDEZVOUSAUKIOSKATROISHEURES<br>
            Message chiffré : SFOEFAWPVTBVLJPTLBUSPJTIFVSFT
            </p><br>

            <p>
            ... on peut constater que le message chiffré n’est rien d’autre que le message en clair où chaque lettre a été “décalée de 1 position vers la droite dans l’alphabet”. 
            Autrement dit, le A est chiffré par B, le B par C etc jusqu’au Z qui est chiffré par A. 
            On peut représenter cela par le schéma suivant:
            </p><br>

            <img src="/src/assets/img/200px-Caesar3.svg.png" class="img"/><br>

            <p>
            Fonctionnement du chiffre Cesar(3) qui décale toutes les lettres de 3 positions dans l’alphabet latin.<br><br>
            La première ligne correspond à l’alphabet en clair et la deuxième ligne montre par quelle lettre chaque lettre de la première ligne est chiffrée.
            </p>

            <h3>Remarque</h3>

            <p>
            Vous remarquerez qu’une fois arrivé à la fin de l’alphabet, on recommence au début. 
            Ainsi, le Z est chiffré par le A.
            </p>

            <h3>Nouvelle notion</h3>

            <p>
            Le chiffre de César est un exemple typique de <strong>chiffre monoalphabétique</strong>. 
            Les codes secrets ou chiffres monoalphabétiques consistent à remplacer chaque lettre du message en clair par une autre lettre de l’alphabet. 
            particularité des chiffres monoalphabétiques tels que le chiffre de César est que chaque lettre du message en clair est toujours chiffré par la même lettre.
            </p>

            <p>
            On peut aussi représenter le chiffre de César(1) de la manière suivante avec deux “roues”. 
            Si le décalage vaut d, on tourne la roue extérieure de d crans vers la gauche. 
            Dans le cas présent, on a tourné la roue extérieure de 1 cran vers la gauche. 
            L’alphabet du centre correspond aux lettres en clair et celles du cercle extérieur aux lettres chiffrées.
            </p>

            <!-- Si besoin, image roue César -->

            <q-btn unelevated rounded label="Valider la section" v-if="section.third === false" class="align-right" color="primary" @click="section.third = !section.third"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.third === true" class="align-right" color="green" @click="section.third = !section.third"/>
            
            <q-separator inset />



            <h2>1.2.3 Cryptosystèmes et clés de chiffrement</h2>

            <p>
            Il existe en réalité 25 chiffres de César différents correspondant aux 25 décalages possibles dans l’alphabet. 
            Ces différents chiffres forment ce que l’on appelle un <strong>cryptosystème</strong>. 
            Un cryptosystème est un ensemble de chiffres qui fonctionnent tous de la même manière à un paramètre près. 
            Dans le cas du chiffre de César, le paramètre est le décalage <i>d</i> dans l’alphabet. 
            Ce paramètre est appelé <strong>clé de chiffrement</strong> car il détermine comment le chiffre fonctionne. 
            Pour déchiffrer un message chiffré à l’aide d’un cryptosystème, il faut connaître le cryptosystème utilisé, en l’occurrence <span style="color:red;">CESAR</span> et la clé de chiffrement (ici le décalage d dans l’alphabet). 
            On désigne donc ce chiffre par le nom du cryptosystème et la clé de chiffrement <strong>CESAR</strong>(<i>d</i>).
            </p>

            <p>
            Le chiffre <strong>CESAR(2)</strong> décale toutes les lettres de 2 positions vers la droite dans l’alphabet.
            </p><br>
            
            <p class="text-center bg-info rounded-borders">
            Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
            Alphabet chiffré : C D E F G H I J K L M N O P Q R S T U V W X Y Z A B
            </p><br>

            <p>
            Et voici la correspondance pour le chiffre <strong>CESAR(24).</strong>
            </p><br>
            
            <p class="text-center bg-info rounded-borders">
            Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
            Alphabet chiffré : Y Z A B C D E F G H I J K L M N O P Q R S T U V W X
            </p>

            <p>
            Le chiffre <strong>CESAR(26)</strong> n’est pas un chiffre utile puisqu’il décale toutes les lettres de 26 positions dans l’alphabet et qu’elles sont donc toutes chiffrées par elle-même (tour complet dans l’alphabet).
            </p><br>

            <p class="text-center bg-info rounded-borders">
            Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
            Alphabet chiffré : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </p>


            <q-btn unelevated rounded label="Valider la section" v-if="section.fourth === false" class="align-right" color="primary" @click="section.fourth = !section.fourth"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.fourth === true" class="align-right" color="green" @click="section.fourth = !section.fourth"/>
            
            <q-separator inset />


            <h2>1.2.4 Activité 1</h2>

            <p>
            Chiffrez à la main le message ci-dessous à l’aide de <strong>CESAR(4)</strong>:
            </p><br>
            
            <p class="text-center bg-info rounded-borders">
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

            <q-btn unelevated rounded label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond3 = true" />

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
            </q-dialog><br><br>


            <q-btn unelevated rounded label="Valider la section" v-if="section.fifth === false" class="align-right" color="primary" @click="section.fifth = !section.fifth"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.fifth === true" class="align-right" color="green" @click="section.fifth = !section.fifth"/>
            
            <q-separator inset />


            <h2>1.2.5 Activité 2</h2>

            <p>
            Déchiffrez à la main le message suivant qui a été chiffré avec <strong>CESAR(4)</strong>:
            </p><br>
            
            <p class="text-center bg-info rounded-borders">
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

            <q-btn unelevated rounded label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond4 = true" />

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
            </q-dialog><br><br>


            <q-btn unelevated rounded label="Valider la section" v-if="section.sixth === false" class="align-right" color="primary" @click="section.sixth = !section.sixth"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.sixth === true" class="align-right" color="green" @click="section.sixth = !section.sixth"/>
            
            <q-separator inset />

        <!--
        <h2>1.2.6 Activité 3A (Implémentation du chiffrement de César)</h2>
        <h2>1.2.7 Activité 3B (Implémentation du déchiffrement de César)</h2>
        -->



            <h2>1.2.6. Activité 3 (Cryptanalyse)</h2>

            <p>
            Essayez de déchiffrer le message suivant qui a été chiffré avec un chiffre de César dont le décalage est inconnu.
            </p><br>

            <p class="text-center bg-info rounded-borders">
            FBKIEDTUIYHUKDUSXEIUFBKIUBBUIUVQYJQJJUDTHU
            </p><br>

            <h3>Short Answer</h3>

            <h4>Q-2: Commencez par décrire en gros la stratégie que vous allez utiliser.</h4>

            <q-input
                v-model="text.q2"
                filled
                type="textarea"
            />

            <h3>Short Answer</h3>

            <h4>Q-3: Quelle est la bonne clé de chiffrement ?</h4>

            <p class="text-center bg-info rounded-borders">
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

            <q-btn unelevated rounded label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond5 = true" />

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

            <p>
            Saisissez la réponse de l’exercice ci-dessous.
            </p><br>

            <p class="text-center bg-info rounded-borders">
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

            <q-btn unelevated rounded label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond6 = true" />

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
            </q-dialog><br><br>
            
            <q-btn unelevated rounded label="Valider la section" v-if="section.seventh === false" class="align-right" color="primary" @click="section.seventh = !section.seventh"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.seventh === true" class="align-right" color="green" @click="section.seventh = !section.seventh"/>
            
            <q-separator inset /> 
        </div>
        </div>

        <h2>1.2.7 Quiz 1</h2>
        <div class="text-center">
            <div v-show="index === counter" v-for="(question, index) in myQuizQuestions" :key="question.id">
                <h3>Question numéro {{index + 1}}</h3>
                
                <pre v-if="false">{{question}}</pre>

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
            <q-btn-group rounded>
                <q-btn :disable="counter === 0" label="Précédent" @click="previous()"/>
                <q-btn :disable="counter === 1" label="Suivant" @click="next()"/>
                <q-btn v-if="counter > 0" label="Recommencer" @click="restart()"/>
                <q-btn label="Valider" @click="changeClick()"/>
            </q-btn-group>
            <pre>{{myQuizQuestions.question}}</pre><br>
            
            <q-btn unelevated rounded label="Valider la section" v-if="section.eighth === false" class="align-right" color="primary" @click="section.eighth = !section.eighth"/>
            <q-btn unelevated rounded label="Section validée" v-if="section.eighth === true" class="align-right" color="green" @click="section.eighth = !section.eighth"/>
        </div><br><br>
        
        <q-page-sticky position="bottom-left" :offset="[5, 5]" class="text-primary bg-#cccccccc">
            <q-btn icon="home" to="/"></q-btn>
            <q-btn icon="keyboard_arrow_left" to="/1.1 Introduction">1.1 Introduction</q-btn>
            <q-btn icon="keyboard_arrow_right" to="/1.3 Attaque par force brute">1.3 Attaque par force brute</q-btn>
        </q-page-sticky>
        
        <q-page-sticky position="top" expand class="bg-positive text-white text-center">
            <q-toolbar>
                <q-toolbar-title>1.2 Le chiffre de César</q-toolbar-title>
            </q-toolbar>
        </q-page-sticky>
    </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const myQuizQuestions = reactive([
  {
      id: ref(0),
    question: "Qu'est-ce qu'une clé de chiffrement ?",
    answers: {
      a: "C'est une clé qui sert à maintenir un serveur actif.",
      b: "C'est une clé qui donne le décalage entre les deux alphabets (clair et chiffré).",
      c: "C'est une clé que Jules César utilisait pour faire des calculs."

    },
    choice: ref(''),
    correctAnswer: "C'est une clé qui donne le décalage entre les deux alphabets (clair et chiffré)."
  },
  {
      id: ref(1),
    question: "Combien de chiffres de César existe-t-il ?",
    answers: {
      a: "25",
      b: "26",
      c: "Une infinité."
    },
    choice: ref(''),
    correctAnswer: "25"
  }
])

const answers = reactive([])

const isClick = ref(false)

function changeClick() {
  isClick.value = !isClick.value
}

const counter = ref(0)

function restart() {
  counter.value = 0
  isClick.value = false
}

function next() {
  counter.value++
  isClick.value = false
}

function previous() {
  counter.value--
  isClick.value = false
}

let dialogVisible = reactive({
  respond1: ref(false),
  respond2: ref(false),
  respond3: ref(false),
  respond4: ref(false),
  respond5: ref(false),
  respond6: ref(false),
  indice1: ref(false)
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
  activ4CorrectAnswer: 'PLUSONDESIREUNECHOSEPLUSELLESEFAITATTENDRE'
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

<style lang="scss" scoped>
.img {
    max-width: 50%;
  }
</style>