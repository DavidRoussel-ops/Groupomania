<template>
  <div>
    <img alt="Groupomania logo" src="../assets/icon.png">
    <label id="id" for="mail">Email</label><input id="mail" type="email">
    <label id="mdp" for="pass">Mots de passe</label><input id="pass" type="password">
  </div>
</template>

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
