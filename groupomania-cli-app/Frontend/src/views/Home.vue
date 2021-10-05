<template>
  <div>
    <img id="fond" alt="Groupomania logo" src="../assets/icon.png">
    <h2 class="connexion" v-if="mode === 'login'">Connexion</h2>
    <h2 class="connexion" v-else>Inscription</h2>
    <p class="nocount" v-if="mode === 'login'">Pas de compte? <a href="#" class="count_action" @click="switchToCreateCount()">Créer un compte.</a></p>
    <p class="nocount" v-else>Déjà de compte? <a href="#" class="count_action" @click="switchToLogin()">Se connecter.</a></p>
    <label for="email">Email</label><input v-model="email" id="email" type="email" placeholder="email">
    <label for="mpass"></label><input v-model="password" id="mpass" type="password" placeholder="mots de passe">
    <label for="nom">Nom</label><input v-model="nom" id="nom" type="text" placeholder="Nom" v-if="mode === 'create'">
    <label for="prenom">Prénom</label><input v-model="prenom" id="prenom" type="text" placeholder="Prénom" v-if="mode === 'create'">
    <button class="btn" v-if="mode === 'login'">Connexion</button>
    <button class="btn" v-else>Inscription</button>
  </div>
</template>

<script>
export default {
  name : 'Home',
  data : function () {
    return {
      mode : 'login',
    }
  },
  methods : {
    switchToCreateCount : function () {
      this.mode = 'create';
    },
    switchToLogin : function () {
      this.mode = 'login';
    }
  }
}
</script>

<style>
body{
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: center;
}

label{
  display: none;
}

img{
  position: relative;
}

.connexion{
  width: 20%;
  position: absolute;
  left: 40%;
  top: 20%;
}

.nocount{
  width: 20%;
  position: absolute;
  left: 40%;
  top: 25%;
}

#email{
  width: 20%;
  position: absolute;
  left: 40%;
  top: 35%;
}

#mpass {
  width: 20%;
  position: absolute;
  left: 40%;
  top: 40%;
}

#nom{
  width: 20%;
  position: absolute;
  left: 40%;
  top: 45%;
}

#prenom{
  width: 20%;
  position: absolute;
  left: 40%;
  top: 50%;
}

.btn{
  width: 10%;
  position: absolute;
  left: 45%;
  top: 60%;
}
</style>


