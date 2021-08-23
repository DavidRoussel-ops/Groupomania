<template>
  <div class="home">
    <img id="fond" alt="Groupomania logo" src="../assets/icon.png">
    <label id="id" for="mail">Email</label><input id="mail" type="email">
    <label id="mdp" for="pass">Mots de passe</label><input id="pass" type="password">
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

#mail{
  width: 20%;
  position: absolute;
  left: 40%;
  top: 40%;
}

#pass {
  width: 20%;
  position: absolute;
  left: 40%;
  top: 50%;
}

#id {
  width: 20%;
  position: absolute;
  left: 40%;
  top: 35%;
}

#mdp {
  width: 20%;
  position: absolute;
  left: 40%;
  top: 45%;
}
</style>


