<template>
  <div>
    <img id="fond" alt="Groupomania logo" src="../assets/icon.png">
    <h2 class="connexion" v-if="mode === 'login'">Connexion</h2>
    <h2 class="connexion" v-else>Inscription</h2>
    <p class="nocount" v-if="mode === 'login'">Pas de compte? <a href="#" class="count_action" @click="switchToCreateCount()">Créer un compte.</a></p>
    <p class="nocount" v-else>Déjà de compte? <a href="#" class="count_action" @click="switchToLogin()">Se connecter.</a></p>
    <label for="email">Email</label><input v-model="mail" id="email" type="email" placeholder="email">
    <label for="mpass"></label><input v-model="pass" id="mpass" type="password" placeholder="mots de passe">
    <label for="nom">Nom</label><input v-model="lname" id="nom" type="text" placeholder="Nom" v-if="mode === 'create'">
    <label for="prenom">Prénom</label><input v-model="fname" id="prenom" type="text" placeholder="Prénom" v-if="mode === 'create'">
    <p class="wrongLog" v-if="mode === 'login' && status === 'error_login'">Addresse mail ou mots de passe invalide</p>
    <p class="wrongCreate" v-if="mode === 'create' && status === 'error_create'">email ou mots de passe déjà utilisée</p>
    <button @click="login" class="button" v-if="mode === 'login'">Connexion</button>
    <button @click="createAccount" class="button" v-else>Inscription</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  data: function () {
    return {
      mode: 'login',
      mail: '',
      pass: '',
      lname: '',
      fname: '',
    }
  },
  mounted() {
    console.log(this.$store.state.user);
    if (this.$store.state.user.userId !== '') {
      this.$router.push('/info');
      return;
    }
  },
  computed: {
    ...mapState(['status'])
  },
  methods: {
    switchToCreateCount: function () {
      this.mode = 'create';
    },
    switchToLogin: function () {
      this.mode = 'login';
    },
    login: function () {
      const self = this;
      this.$store.dispatch('login', {
        mail: this.mail,
        pass: this.pass,
      }).then(function () {
        self.$router.push('/info');
      }).catch(function (error) {
        console.log(error)
      })
    },
    createAccount: function () {
      const self = this;
      this.$store.dispatch('createAccount', {
        mail: this.mail,
        pass: this.pass,
        lname: this.lname,
        fname: this.fname,
      }).then(function () {
        self.login();
      }).catch(function (error) {
        console.log(error)
      })
    },
  },


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

.button{
  width: 10%;
  position: absolute;
  left: 45%;
  top: 60%;
}

.wrongLog {
  width: 10%;
  position: absolute;
  left: 45%;
  top: 45%;
  color: red;
}

.wrongCreate{
  width: 20%;
  position: absolute;
  left: 45%;
  top: 65%;
  color: red;
}
</style>


