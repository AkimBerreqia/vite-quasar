<template>
    <q-page class="pa-4 text-center">
        <div class="q-pa-md">
            <div class="q-gutter-md">
                <q-carousel
                v-model="action.slide1"
                transition-prev="scale"
                transition-next="scale"
                animated
                control-color="primary"
                navigation
                padding
                arrows
                height="300px"
                class="shadow-1 rounded-borders"
                >
                    <q-carousel-slide name="attaque" class="column no-wrap flex-center text-center">
                        <q-icon name="key" size="28px" /><br>

                        <p>
                        Comme vous avez pu le constater dans le dernier exercice de la section <a href="http://localhost:3001/cryptologie%20et%20codage%20de%20l%E2%80%99information/1.2%20le%20chiffre%20de%20c%C3%A9sar" style="color:darkblue;">Le chiffre de César</a>, il est très facile de casser le chiffre de César avec un ordinateur en essayant tour à tour chaqune des clés possibles. 
                        Dans le cas du chiffre de César, très rudimentaire, il n’y a que 25 clés de chiffrement à tester (les 25 décalages possibles dans l’alphabet). 
                        Le procédé consistant à essayer bêtement toutes les clés possibles est appelé <strong>attaque par force brute</strong> (brute force attack en anglais).
                        </p>
                    </q-carousel-slide>
                </q-carousel>


                <q-carousel
                v-model="action.slide2"
                transition-prev="scale"
                transition-next="scale"
                animated
                control-color="primary"
                navigation
                padding
                arrows
                height="800px"
                class="shadow-1 rounded-borders"
                >
                    <q-carousel-slide name="exemple1" class="column no-wrap flex-center text-center">
                        <h2>1.3.1 Exemple (casser César par la force brute)</h2>

                        <q-icon name="key" size="28px" /><br>

                        <p>
                        Le programme suivant réalise une attaque par force brute sur le chiffre de César en testant successivement toutes les clés de chiffrement.
                        </p><br>

                        <p class="text-left bg-info rounded-borders" style="color:black;" padding margin>
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
                    </q-carousel-slide>

                    <q-carousel-slide name="exemple2" class="column no-wrap flex-center text-center">
                        <q-icon name="key" size="28px" /><br>

                        <p class="text-left bg-info rounded-borders" style="color:black;" padding margin>
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

                        <p class="text-left bg-info rounded-borders">
                        PLUSONDESIREUNECHOSEPLUSELLESEFAITATTENDRE
                        </p><br><br>

                        <p>
                        Il faut bien entendu parcourir tous les essais jusqu’à ce que l’on tombe sur un texte qui a du sens en français (ou dans une autre langue connue).
                        </p>
                    </q-carousel-slide>
                </q-carousel>


                <q-carousel
                v-model="action.slide3"
                transition-prev="scale"
                transition-next="scale"
                animated
                control-color="primary"
                navigation
                padding
                arrows
                height="300px"
                class="shadow-1 rounded-borders"
                >
                    <q-carousel-slide name="retenir1" class="column no-wrap flex-center text-center">
                        <h2>1.3.2. À retenir</h2>

                        <q-icon name="key" size="28px" /><br>

                        <p>
                        Une attaque par force brute sur un code secret consiste à essayer de déchiffrer un message en essayant systématiquement toutes les clés de chiffrement possible de manière “stupide”. 
                        Ceci est très facile à réaliser avec le chiffre de César puisqu’il ne dispose que de 25 clés de chiffrement différentes.<br><br>

                        Dans la prochaine section, nous allons aborder un cryptosystème qui résiste un peu mieux à une attaque aussi naïve. 
                        Pour cela, il suffit d’augmenter le nombre de clés possibles.
                        </p>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>


        <q-page-scroller expand position="top" :scroll-offset="-1" :offset="[0, 0]">
            <div class="col cursor-pointer q-pa-sm bg-secondary text-white text-center">
                <font size="4">1.3 Attaque par force brute (retourner au début de la page)</font>
            </div>
        </q-page-scroller>
    </q-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

let action = reactive({
  slide1: ref('attaque'),
  slide2: ref('exemple1'),
  slide3: ref('retenir1')
})
</script>

<style lang="scss" scoped></style>