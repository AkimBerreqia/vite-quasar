import Introduction from '@/pages/caesar/1.1 Introduction.vue'
import { createWebHashHistory } from 'vue-router'

const routes = [
    {path: '/', name: '1.1 Introduction', component: Introduction},
    {path: '/leChiffreDeCesar', name: '1.2 Le chiffre de César', component: ()=> import('@/pages/caesar/1.2 Le chiffre de César.vue')},
    {path: '/attaqueParForceBrute', name: '1.3 Attaque par force brute', component: ()=> import('@/views/1.3 Attaque par force brute.vue')},
    {path: '/systemeDeSubstitutionMonoalphabetique', name: '1.4 Systèmes de substitution monoalphabétique', component: ()=> import('@/pages/caesar/1.4 Systèmes de substitution monoalphabétique.vue')},
    {path: '/attaqueParFrequence', name: '1.5 Attaque par fréquence', component: ()=> import('@/pages/caesar/1.5 Attaque par fréquence.vue')},
    {path: '/petitLexiqueDeLaCryptologie', name: '1.6 Petit lexique de la cryptologie', component: ()=> import('@/pages/caesar/1.6 Petit lexique de la cryptologie.vue')},
    {path: '/destination/:id', component: ()=>import('@/pages/caesar/DestinationShow.vue')}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router