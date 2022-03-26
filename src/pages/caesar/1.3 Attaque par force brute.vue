<template>
  <q-page class="pa-4">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <p>
        Comme vous avez pu le constater dans le dernier exercice de la section <router-link style="color:darkblue;" to="1.2 Le chiffre de César">Le chiffre de César</router-link>, il est très facile de casser le chiffre de César avec un ordinateur en essayant tour à tour chacune des clés possibles. 
        Dans le cas du chiffre de César, très rudimentaire, il n’y a que 25 clés de chiffrement à tester (les 25 décalages possibles dans l’alphabet). 
        Le procédé consistant à essayer bêtement toutes les clés possibles est appelé <strong>attaque par force brute</strong> (brute force attack en anglais).
        </p>

        <q-btn unelevated rounded label="Valider la section" v-if="section.first === false" class="align-right" color="primary" @click="section.first = !section.first"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.first === true" class="align-right" color="green" @click="section.first = !section.first"/>
        
        <q-separator inset />



        <h2>1.3.1 Exemple (casser César par la force brute)</h2>

        <p>
        Le programme suivant réalise une attaque par force brute sur le chiffre de César en testant successivement toutes les clés de chiffrement.
        </p><br>

        <p class="bg-info rounded-borders" style="color:black;" padding margin>
        <span style="color:purple;">def</span> <span style="color:blue;">cesar_decrypt</span>(text, d):<br>
        &emsp; alphabet = <span style="color:brown;">'ABCDEFGHIJKLMNOPQRSTUVWXYZ'</span><br>
        &emsp; result = <span style="color:brown;">''</span><br>
        &emsp; <span style="color:purple;">for</span> c in text:<br>
        &emsp;&emsp; index = (<span style="color:blue;">ord</span>(c) - <span style="color:blue;">ord</span>(<span style="color:brown;">'A'</span>) - d) % <span style="color:green;">26</span><br>
        &emsp;&emsp; result += alphabet[index]<br>
        &emsp; <span style="color:purple;">return</span> result<br><br>

        <span style="color:purple;">def</span> <span style="color:blue;">brute_force_cesar</span>(text):<br>
        <span style="color:brown;">
        &emsp; '''<br>
        &emsp; teste toutes les clés possibles d = 1, 2, 3, ..., 25<br>
        &emsp; '''
        </span><br><br>

        &emsp; d = <span style="color:green;">1</span><br>
        &emsp; <span style="color:purple;">while</span> d &#60; <span style="color:green;">26</span>:<br>
        &emsp;&emsp; <span style="color:purple;">print</span>(<span style="color:brown;">"avec la clé d = "</span>, d, <span style="color:brown;">":"</span>, cesar_decrypt(text, d))<br>
        &emsp;&emsp; d += <span style="color:green;">1</span><br><br>


        cyphered_text = <span style="color:brown;">"FBKIEDTUIYHUKDUSXEIUFBKIUBBUIUVQYJQJJUDTHU"</span><br>
        brute_force_cesar(cyphered_text)
        </p>

        <p class="bg-info rounded-borders" style="color:black;" padding margin>
        avec la clé d =  1 : EAJHDCSTHXGTJCTRWDHTEAJHTAATHTUPXIPIITCSGT<br>
        avec la clé d =  2 : DZIGCBRSGWFSIBSQVCGSDZIGSZZSGSTOWHOHHSBRFS<br>
        avec la clé d =  3 : CYHFBAQRFVERHARPUBFRCYHFRYYRFRSNVGNGGRAQER<br>
        avec la clé d =  4 : BXGEAZPQEUDQGZQOTAEQBXGEQXXQEQRMUFMFFQZPDQ<br>
        avec la clé d =  5 : AWFDZYOPDTCPFYPNSZDPAWFDPWWPDPQLTELEEPYOCP<br>
        avec la clé d =  6 : ZVECYXNOCSBOEXOMRYCOZVECOVVOCOPKSDKDDOXNBO<br>
        avec la clé d =  7 : YUDBXWMNBRANDWNLQXBNYUDBNUUNBNOJRCJCCNWMAN<br>
        avec la clé d =  8 : XTCAWVLMAQZMCVMKPWAMXTCAMTTMAMNIQBIBBMVLZM<br>
        avec la clé d =  9 : WSBZVUKLZPYLBULJOVZLWSBZLSSLZLMHPAHAALUKYL<br>
        avec la clé d =  10 : VRAYUTJKYOXKATKINUYKVRAYKRRKYKLGOZGZZKTJXK<br>
        avec la clé d =  11 : UQZXTSIJXNWJZSJHMTXJUQZXJQQJXJKFNYFYYJSIWJ<br>
        avec la clé d =  12 : TPYWSRHIWMVIYRIGLSWITPYWIPPIWIJEMXEXXIRHVI<br>
        avec la clé d =  13 : SOXVRQGHVLUHXQHFKRVHSOXVHOOHVHIDLWDWWHQGUH<br>
        avec la clé d =  14 : RNWUQPFGUKTGWPGEJQUGRNWUGNNGUGHCKVCVVGPFTG<br>
        avec la clé d =  15 : QMVTPOEFTJSFVOFDIPTFQMVTFMMFTFGBJUBUUFOESF<br>
        avec la clé d =  16 : PLUSONDESIREUNECHOSEPLUSELLESEFAITATTENDRE<br>
        avec la clé d =  17 : OKTRNMCDRHQDTMDBGNRDOKTRDKKDRDEZHSZSSDMCQD<br>
        avec la clé d =  18 : NJSQMLBCQGPCSLCAFMQCNJSQCJJCQCDYGRYRRCLBPC<br>
        avec la clé d =  19 : MIRPLKABPFOBRKBZELPBMIRPBIIBPBCXFQXQQBKAOB<br>
        avec la clé d =  20 : LHQOKJZAOENAQJAYDKOALHQOAHHAOABWEPWPPAJZNA<br>
        avec la clé d =  21 : KGPNJIYZNDMZPIZXCJNZKGPNZGGZNZAVDOVOOZIYMZ<br>
        avec la clé d =  22 : JFOMIHXYMCLYOHYWBIMYJFOMYFFYMYZUCNUNNYHXLY<br>
        avec la clé d =  23 : IENLHGWXLBKXNGXVAHLXIENLXEEXLXYTBMTMMXGWKX<br>
        avec la clé d =  24 : HDMKGFVWKAJWMFWUZGKWHDMKWDDWKWXSALSLLWFVJW<br>
        avec la clé d =  25 : GCLJFEUVJZIVLEVTYFJVGCLJVCCVJVWRZKRKKVEUIV
        </p><br>

        <p>
        En exécutant le programme, on constate que la clé <span style="color:red;">d = 16</span> permet de décrypter correctement le texte chiffré pour obtenir le texte en clair.
        </p><br><br>

        <p class=" bg-info rounded-borders">
        PLUSONDESIREUNECHOSEPLUSELLESEFAITATTENDRE
        </p><br><br>

        <p>
        Il faut bien entendu parcourir tous les essais jusqu’à ce que l’on tombe sur un texte qui a du sens en français (ou dans une autre langue connue).
        </p>

        <q-btn unelevated rounded label="Valider la section" v-if="section.second === false" class="align-right" color="primary" @click="section.second = !section.second"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.second === true" class="align-right" color="green" @click="section.second = !section.second"/>
        
        <q-separator inset />



        <h2>1.3.2 Activité 4</h2>

        <p>
        Déchiffrez ce message en vous servant de l'attaque par force brute.
        </p><br>

        <p class="text-center bg-info rounded-borders">
        QSBRFSRSZIBSDSHWHSPIZZSRSQIAS<br>
        DCIGGSSDOFZSJSBHXSPFIZSSHXSASBFVIAS<br>
        SBHFSASGRIBSGFSDCGSBHASGWBTCFHIBSG<br>
        QSGHBISEISXODDFSBRGZOJSFHI
        </p><br>

        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 1050px">
          <q-input bottom-slots v-model="myQuestions.libertine" label="Réponse :" counter maxlength="124" :dense="dense" style='text-transform:uppercase'>
            <template v-slot:hint>
            <p>{{respondAnswer(myQuestions.libertine, myQuestions.libertineCorrectAnswer, 124)}}</p>
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
              <p style="color:accent;">
              Après avoir trouvé la clé de chiffrement pour ce texte, vous pouvez toujours recopier le programme d'attaque par force brute de la section précédente dans Thonny, pour vérifier votre réponse.
              </p>
              </q-card-section>
              <q-card-actions align="right">
                  <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.indice1 = false" />
              </q-card-actions>
          </q-card>
          </q-dialog>

          <q-btn label="AFFICHER LA RÉPONSE" color="orange" @click="dialogVisible.respond1 = true" />

          <q-dialog v-model="dialogVisible.respond1" @hide="onHide">
            <q-card>
            <q-card-section class="row items-center q-pb-none">
              <strong class="text-h6" style="color:orange;">Activité 1: Réponse</strong>
              <q-space />
            </q-card-section>

            <q-card-section style="color:orange;">
              <strong>
              CENDREDELUNEPETITEBULLEDECUMEPOUSSEEPARLEVENTJEBRULEETJEMENRHUMEENTREMESDUNESREPOSENTMESINFORTUNESCESTNUEQUEJAPPRENDSLAVERTU
              </strong>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="ok" color="primary" v-close-popup @click="dialogVisible.respond1 = false" />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-btn-group><br><br>

        <q-btn unelevated rounded label="Valider la section" v-if="section.third === false" class="align-right" color="primary" @click="section.third = !section.third"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.third === true" class="align-right" color="green" @click="section.third = !section.third"/>

        <q-separator inset />



        <h2>1.3.3 À retenir</h2>

        <p>
        Une attaque par force brute sur un code secret consiste à essayer de déchiffrer un message en essayant systématiquement toutes les clés de chiffrement possible de manière “stupide”. 
        Ceci est très facile à réaliser avec le chiffre de César puisqu’il ne dispose que de 25 clés de chiffrement différentes.<br><br>

        Dans la prochaine section, nous allons aborder un cryptosystème qui résiste un peu mieux à une attaque aussi naïve. 
        Pour cela, il suffit d’augmenter le nombre de clés possibles.
        </p>
        
        <q-btn unelevated rounded label="Valider la section" v-if="section.fourth === false" class="align-right" color="primary" @click="section.fourth = !section.fourth"/>
        <q-btn unelevated rounded label="Section validée" v-if="section.fourth === true" class="align-right" color="green" @click="section.fourth = !section.fourth"/>

        <q-separator inset />
      </div>
    </div>

    <h2>1.3.4 Quiz 2</h2>
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
      <q-btn rounded label="Valider" @click="changeClick()"/>
      <pre>{{myQuizQuestions.question}}</pre><br>
    </div>

    <q-btn unelevated rounded label="Valider la section" v-if="section.fifth === false" class="align-right" color="primary" @click="section.fifth = !section.fifth"/>
    <q-btn unelevated rounded label="Section validée" v-if="section.fifth === true" class="align-right" color="green" @click="section.fifth = !section.fifth"/>
  
  
    <q-page-sticky position="bottom-left" :offset="[5, 5]" class="text-primary bg-#cccccccc">
      <q-btn icon="home" to="/"></q-btn>
      <q-btn icon="keyboard_arrow_left" to="/caesar/1.2 Le chiffre de César">1.2 Le chiffre de César</q-btn>
      <q-btn icon="keyboard_arrow_right" to="/caesar/1.4 Systèmes de substitution monoalphabétique">1.4 Systèmes de substitution monoalphabétique</q-btn>
    </q-page-sticky>
    
    <q-page-sticky position="top" expand class="bg-positive text-white text-center">
      <q-toolbar>
        <q-toolbar-title>1.3 Attaque par force brute</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'

const myQuizQuestions = reactive([
  {
      id: ref(0),
    question: "En quoi consiste l'attaque par force brute ?",
    answers: {
      a: "L'attaque par force brute consiste à prouver que le chiffre choisi n'est pas déchiffrable.",
      b: "L'attaque par force brute consiste à submerger l'ordinateur, avec un surplus de données pour trouver le texte en clair.",
      c: "L'attaque par force brute consiste à essayer chaque possibilité de déchiffrement, jusqu'à trouver le texte en clair."

    },
    choice: ref(''),
    correctAnswer: "L'attaque par force brute consiste à essayer chaque possibilité de déchiffrement, jusqu'à trouver le texte en clair."
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
  indice1: ref(false)
})

function onHide(order) {
  dialogVisible.order.value = false
}

const dense = ref(false)

const myQuestions = reactive({
  libertine: '',
  libertineCorrectAnswer: 'CENDREDELUNEPETITEBULLEDECUMEPOUSSEEPARLEVENTJEBRULEETJEMENRHUMEENTREMESDUNESREPOSENTMESINFORTUNESCESTNUEQUEJAPPRENDSLAVERTU'
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
    fifth: ref(false)
})
</script><style lang="scss" scoped></style>