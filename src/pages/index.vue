<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm" style="font-size: x-small">
      <q-breadcrumbs unelevated rounded>
      <q-breadcrumbs-el icon="home" label="1 Cryptologie et codage de l'informatation" to="/" />
      <q-breadcrumbs-el label="1.1 Introduction"/>
      <q-breadcrumbs-el label="1.2 Le chiffre de César"/>
      <q-breadcrumbs-el label="1.3 Attaque par force brute"/>
      <q-breadcrumbs-el label="1.4 Systèmes de substitution monoalphabétique"/>
      <q-breadcrumbs-el label="1.5 Attaque par fréquence"/>
      <q-breadcrumbs-el label="1.6 Petit lexique de la cryptologie"/>
      </q-breadcrumbs>
    </div>
    
    <div class="column flex-center pa-4">
      <p>Bienvenue au cours interctif de cryptographie. Pour commencer votre apprentissage, cliquez sur le bouton ci-dessous.</p><br>
      <q-btn elevated rounded><router-link to="/caesar/1.1 Introduction">Commencer le cours</router-link></q-btn>
      
      <q-separator inset />

      <h2>Sommaire</h2>
    
      <ul>
        <li><router-link to="/caesar/1.1 Introduction">1.1 Introduction</router-link></li>
        <li><router-link to="/caesar/1.2 Le chiffre de César">1.2 Le chiffre de César</router-link></li>
        <li><router-link to="/caesar/1.3 Attaque par force brute">1.3 Attaque par force brute</router-link></li>
        <li><router-link to="/caesar/1.4 Introduction">1.1 Introduction</router-link></li>
        <li><router-link to="/caesar/1.5 Introduction">1.1 Introduction</router-link></li>
        <li><router-link to="/caesar/1.6 Introduction">1.1 Introduction</router-link></li>
      </ul>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
