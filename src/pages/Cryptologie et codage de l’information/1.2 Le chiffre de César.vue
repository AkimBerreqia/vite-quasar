<template>
  <q-page class="pa-4 text-center">

    <h1>1.2 Le chiffre de César</h1>

    <p>
    Le premier code secret que l’on va aborder est le <strong>chiffre de César</strong>. 
    En cryptographie, un <strong>chiffre</strong> est en réalité un synonyme de <strong>code secret</strong>. 
    Il s’agit d’une <strong>méthode de chiffrement</strong> qui permet de transformer un message intelligible et facilement lisible (<b>texte en clair</b>) en un <b>texte chiffré</b> inintelligible.
    </p><br><br>
    


    <h2>1.2.1 Énigme 1</h2>

    <p>
    Robert utilise le chiffre de César pour chiffrer le message <span style="color:red;">RENDEZVOUSAUKIOSKATROISHEURES</span> et obtient le message chiffré <span style="color:red;">SFOEFAWPVTBVLJPTLBUSPJTIFVSFT</span>. 
    Vous remarquerez que le message chiffré est écrit en majuscules, sans accent, sans espace ni ponctuation. 
    Cela permet d’une part de faciliter le chiffrement et, d’autre part, de révéler moins d’information (notamment la longueur des mots formant le message).
    </p><br>

    <p class="Message">
    Message en clair: RENDEZVOUSAUKIOSKATROISHEURES<br>
    Message chiffré : SFOEFAWPVTBVLJPTLBUSPJTIFVSFT
    </p><br>

    <h3>Short Answer</h3>

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
          <strong class="text-h6" style="color:orange;">Clé de chiffrement</strong>
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
    </q-dialog><br><br><br>

    <p>
    Rodolphe utilise la même méthode de chiffrement que Robert pour chiffrer un message. 
    Voici le message chiffré qu’il envoie à Julie. 
    Essayez de déchiffrer ce message:
    </p><br>
    
    <p class="Message">
    KFUJOWJUFBVDJOFNBEFNBJOTPJSBWJOHUIFVSFTSFKPJOTNPJBMBHBSF
    </p><br>

    <p>
    Pour cela, écrivez le message déchiffré dans la variable <span style="color:red;">message_en_clair</span>. 
    Il suffit d’écrire la réponse à la ligne 2, tout en majuscule, sans espaces et d’exécuter le programme.
    </p>
    
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 1050px">
        <q-input bottom-slots v-model="answers.rodolphe" label="Réponse :" counter maxlength="56" :dense="dense" style='text-transform:uppercase'>
          <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          </template>
          <template v-slot:hint>
          <p>{{respondAnswer()}}</p>
          </template>
        </q-input>
      </div>
    </div>

    <q-btn label="Indice" style="color:green;" @click="dialogVisible.indice1 = true" />

    <q-dialog v-model="dialogVisible.indice1" @hide="onHide">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <strong class="text-h6" style="color:green;">Déchiffrement</strong>
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
          <strong class="text-h6" style="color:orange;">Déchiffrement</strong>
          <q-space />
        </q-card-section>

        <q-card-section style="color:orange;">
          <strong>JETINVITEAUCINEMADEMAINSOIRAVINGTHEURESREJOINSMOIALAGARE</strong>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond2 = false" />
          </q-card-actions>
      </q-card>
    </q-dialog><br><br><br>
  
    
    
    <h2>1.2.2 Fonctionnement</h2>

    <p>
    Comme vous avez sans doute pu le deviner, le chiffre de César est très simple. 
    Il suffit de décaler toutes les lettres d’un certain nombre de positions dans l’alphabet. 
    En observant le message en clair et le message chiffré de Robert.
    </p><br>

    <p class="Message">
    Message en clair: RENDEZVOUSAUKIOSKATROISHEURES<br>
    Message chiffré : SFOEFAWPVTBVLJPTLBUSPJTIFVSFT
    </p><br>

    <p>
    On peut constater que le message chiffré n’est rien d’autre que le message en clair où chaque lettre a été “décalée de 1 position vers la droite dans l’alphabet”. 
    Autrement dit, le A est chiffré par B, le B par C etc jusqu’au Z qui est chiffré par A. 
    On peut représenter cela par le schéma suivant:
    </p><br>

    <!-- Si besoin, image de décalage César -->

    <p>
    Fonctionnement du chiffre Cesar(1) qui décale toutes les lettres de 1 position dans l’alphabet latin.<br><br>
    La première ligne correspond à l’alphabet en clair et la deuxième ligne montre par quelle lettre chaque lettre de la première ligne est chiffrée.
    </p><br>
    
    <q-btn label="Remarque" style="color:purple;" @click="dialogVisible.remarque = true" />

    <q-dialog v-model="dialogVisible.remarque" @hide="onHide">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <strong class="text-h6" style="color:purple;">Remarque</strong>
          <q-space />
        </q-card-section>

        <q-card-section style="color:purple;">
          <p>
          Vous remarquerez qu’une fois arrivé à la fin de l’alphabet, on recommence au début. 
          Ainsi, le Z est chiffré par le A.
          </p>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.remarque = false" />
          </q-card-actions>
      </q-card>
    </q-dialog>

    <q-btn label="Nouvelle notion" style="color:purple;" @click="dialogVisible.nouvelleNotion = true" />

    <q-dialog v-model="dialogVisible.nouvelleNotion" @hide="onHide">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <strong class="text-h6" style="color:purple;">Nouvelle notion</strong>
          <q-space />
        </q-card-section>

        <q-card-section style="color:purple;">
          <p>
          Le chiffre de César est un exemple typique de <strong>chiffre monoalphabétique</strong>. 
          Les codes secrets ou chiffres monoalphabétiques consistent à remplacer chaque lettre du message en clair par une autre lettre de l’alphabet. 
          particularité des chiffres monoalphabétiques tels que le chiffre de César est que chaque lettre du message en clair est toujours chiffré par la même lettre.
          </p>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.nouvelleNotion = false" />
          </q-card-actions>
      </q-card>
    </q-dialog><br><br>

    <p>
    On peut aussi représenter le chiffre de César(1) de la manière suivante avec deux “roues”. 
    Si le décalage vaut d, on tourne la roue extérieure de d crans vers la gauche. 
    Dans le cas présent, on a tourné la roue extérieure de 1 cran vers la gauche. 
    L’alphabet du centre correspond aux lettres en clair et celles du cercle extérieur aux lettres chiffrées.
    </p><br><br>

    <!-- Si besoin, image roue César -->



    <h2>1.2.3 Cryptosystèmes et clés de chiffrement</h2>

    <p>
    Il existe en réalité 25 chiffres de César différents correspondant aux 25 décalages possibles dans l’alphabet. 
    Ces différents chiffres forment ce que l’on appelle un <strong>cryptosystème</strong>. 
    Un cryptosystème est un ensemble de chiffres qui fonctionnent tous de la même manière à un paramètre près. 
    Dans le cas du chiffre de César, le paramètre est le décalage <i>d</i> dans l’alphabet. 
    Ce paramètre est appelé <strong>clé de chiffrement</strong> car il détermine comment le chiffre fonctionne. 
    Pour déchiffrer un message chiffré à l’aide d’un cryptosystème, il faut connaître le cryptosystème utilisé, en l’occurrence <span style="color:red;">CESAR</span> et la clé de chiffrement (ici le décalage d dans l’alphabet). 
    On désigne donc ce chiffre par le nom du cryptosystème et la clé de chiffrement <strong>CESAR</strong>(<i>d</i>).
    </p><br>

    <p>
    Le chiffre <strong>CESAR(2)</strong> décale toutes les lettres de 2 positions vers la droite dans l’alphabet.
    </p><br>
    
    <p class="Message">
    Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
    Alphabet chiffré : C D E F G H I J K L M N O P Q R S T U V W X Y Z A B
    </p><br>

    <p>
    Et voici la correspondance pour le chiffre <strong>CESAR(24).</strong>
    </p><br>
    
    <p class="Message">
    Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
    Alphabet chiffré : Y Z A B C D E F G H I J K L M N O P Q R S T U V W X
    </p><br>

    <p>
    Le chiffre <strong>CESAR(26)</strong> n’est pas un chiffre utile puisqu’il décale toutes les lettres de 26 positions dans l’alphabet et qu’elles sont donc toutes chiffrées par elle-même (tour complet dans l’alphabet).
    </p><br>

    <p class="Alphabet">
    Alphabet en clair: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
    Alphabet chiffré : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    </p><br><br>



    <h2>1.2.4 Activité 1</h2>

    <p>
    Chiffrez à la main le message ci-dessous à l’aide de <strong>CESAR(4)</strong>:
    </p><br>
    
    <p class="Message">
    CRYPTOGRAPHIE
    </p><br>

    <p>
    Pour cela, écrivez le message déchiffré dans la variable <span style="color:red;">cyphered_text</span>. 
    Il suffit d’écrire la réponse à la ligne 2 en majuscules et sans espaces, puis d’exécuter le programme.
    </p>

    <!-- Refaire exercice Rodolphe mais pour cesar4, 
    PS: en cryptant -->



    <h2>1.2.5 Activité 2</h2>

    <p>
    Déchiffrez à la main le message suivant qui a été chiffré avec <strong>CESAR(4)</strong>:
    </p><br>
    
    <p class="Message">
    YRIZMIXVERUYMPPIIWXYRIQIVQSVXI
    </p><br>

    <p>
    Pour cela, écrivez le message déchiffré dans la variable <span style="color:red;">message_en_clair</span>. 
    Il suffit d’écrire la réponse à la ligne 2 en majuscules et sans espaces, puis d’exécuter le programme.
    </p>

    <!-- Refaire exercice Rodolphe mais pour cesar4, 
    PS: en décryptant -->


    <h2>1.2.6 Activité 3A (Implémentation du chiffrement de César)</h2>

    <p>
    Définissez une fonction <span style="color:red;">cesar_encrypt(text, d)</span> qui retourne le texte <span style="color:red;">text</span> chiffré avec le chiffre <strong>CESAR(d)</strong>.
    </p><br>

    <q-btn label="Indications" style="color:purple;" @click="dialogVisible.indications = true" />

    <q-dialog v-model="dialogVisible.indications" @hide="onHide">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <strong class="text-h6" style="color:purple;">Indications</strong>
          <q-space />
        </q-card-section>

        <q-card-section style="color:purple;">
          <ul style="color:purple;">
            <li>
            Inspirez-vous de la fonction <span style="color:red;">lower(text)</span> définie au cours de programmation qui permet de transformer un texte en minuscules. 
            Pour cela, on avait décalé toutes les lettres majuscules de 32 positions dans le code ASCII.
            </li><br>

            <li>
            L’opérateur modulo (<span style="color:red;">%</span>) est utile pour “revenir au début de l’alphabet” lorsque la lettre décalée de <i>d</i> “dépasse le Z”.
            </li><br>

            <li>
            Ces si indications ne vous suffisent pas, vous pouvez également consulter les indices après la zone d’édition.
            </li>
          </ul>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.indications = false" />
          </q-card-actions>
      </q-card>
    </q-dialog><br><br>

    <q-input
      v-model="text.activ3A"
      filled
      type="textarea"
    /><br>

    <!-- 1.2.5 Activité-2: Reprendre la même fonction que pour la Q-1 mais en l'adaptant à l'exercice, pour une clé de CESAR(4) [déchiffrement] -->

    <!-- 1.2.6 Activité-3A (Implémentation du chiffrement de César): Demander aide à DONNER pour faire correcteur de code pour fonction "cesar_encrypt(text, d)"
    + Afficher Indice-n si bouton-n est appuyé -->

    <!-- 1.2.7 Activité 3B (Implémentation du déchiffrement de César): Demander aide à DONNER pour faire correcteur de code pour fonction "cesar_encrypt(text, d)" -->

    <!-- 1.2.8 Activité 4 (Cryptanalyse): Reprendre la même fonction que pour la Q-1 mais en l'adaptant à l'exercice
    + Refaire correcteur pour vérifier fonction cryptanalyse CESAR
    + Q-4: Reprendre la même fonction que pour la Q-1 mais en l'adaptant à l'exercice -->


    <q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]">
      <div class="col cursor-pointer q-pa-sm bg-accent text-white text-center">
        Retourner au début de la page
      </div>
    </q-page-scroller>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

let indice = ref(false)

let dialogVisible = reactive({
  respond1: ref(false),
  indice1: ref(false),
  respond2: ref(false),
  remarque: ref(false),
  nouvelleNotion: ref(false),
  indications: ref(false)
})

function onHide(order) {
  dialogVisible.order.value = false
}

let text = reactive({
  q1: ref(''),
  activ3A: ref('')
})

const ph = ref('')
const dense = ref(false)

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
  rodolphe: ''
})

function respondAnswer() {
  if (answers.rodolphe.length === 56) {
    if (answers.rodolphe.toUpperCase() === correctAnswer) {
      return "Bonne réponse"
  }
    else if (answers.rodolphe.toUpperCase() !== correctAnswer) {
      return "Mauvaise réponse"
    }
  }

  else if (answers.rodolphe.length !== 56) {
    return "..."
  }
}

</script>

<style lang="scss" scoped></style>