<template>
  <div class="connexion">
    <img id="fond" alt="Groupomania logo" src="../assets/icon.png">
    <label id="nid" for="email">Email</label><input id="email" type="email">
    <label id="modp" for="mpass">Mots de passe</label><input id="mpass" type="password">
    <button id="btn" type="submit">Connexion</button>
  </div>
</template>

<script>
  /*export default {
    data() {
      return alert('salut')
    },
    beforeCreate() {console.log('Je ne suis pas encore crée')},
    created() {console.log('Je suis crée')},
    beforeMount() {console.log('Je vais bientot être sur le dom')},
    mounted() {console.log('Je suis sur le DOM')},
    beforeUnmount() {console.log('Je vais disparaitre')},
    unmounted() {console.log('Je suis supprimé')}
  }*/
</script>

<style>
body{
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: center;
}

img{
  position: relative;
}

#email{
  width: 20%;
  position: absolute;
  left: 40%;
  top: 40%;
}

#mpass {
  width: 20%;
  position: absolute;
  left: 40%;
  top: 50%;
}

#nid {
  width: 20%;
  position: absolute;
  left: 40%;
  top: 35%;
}

#modp {
  width: 20%;
  position: absolute;
  left: 40%;
  top: 45%;
}

#btn{
  width: 10%;
  position: absolute;
  left: 45%;
  top: 60%;
}
</style>


