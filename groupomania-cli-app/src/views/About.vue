<template>
  <div>
    <img alt="Groupomania logo" src="../assets/icon.png">
    <label id="id" for="mail">Email</label><input id="mail" type="email">
    <label id="mdp" for="pass">Mots de passe</label><input id="pass" type="password">
    <label id="surname" for="nom">Nom</label><input id="nom" type="text">
    <label id="name" for="prenom">Prénom</label><input id="prenom" type="text">
    <button id="btninc" type="submit">Inscription</button>
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
  left: 20%;
  top: 40%;
}

#pass {
  width: 20%;
  position: absolute;
  left: 20%;
  top: 50%;
}

#id {
  width: 20%;
  position: absolute;
  left: 20%;
  top: 35%;
}

#mdp {
  width: 20%;
  position: absolute;
  left: 20%;
  top: 45%;
}

#surname{
  width: 20%;
  position: absolute;
  left: 60%;
  top: 35%;
}

#nom{
  width: 20%;
  position: absolute;
  left: 60%;
  top: 40%;
}

#name{
  width: 20%;
  position: absolute;
  left: 60%;
  top: 45%;
}

#prenom{
  width: 20%;
  position: absolute;
  left: 60%;
  top: 50%;
}

#btninc{
  width: 10%;
  position: absolute;
  left: 45%;
  top: 65%;
}
</style>
