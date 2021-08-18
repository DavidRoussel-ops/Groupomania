<template>
  <div id="app">
    <div id="nav">
      <nav>
        <Homepage url="#" text="Inscrivez-vous"/>
      </nav>
    </div>
    <div id="form">
      <h2>Connectez-vous</h2>
      <form>
        <label for="identifiant">Identifiant</label>
          <input type="text" name="identifiant" id="identifiant">
        <label for="mdp">Mots de passe</label>
          <input type="password" name="mdp" id="mdp">
      </form>
    </div>
  </div>
</template>

<script>
import Homepage from "@/components/sign";

export default {
  name: 'App',
  components: {
    Homepage,
  }
}
</script>

<style lang="scss">
body{
  background-color: lightseagreen;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h2{
  margin: 100px auto 50px;
}
#nav{
  display: block;
  background-color: azure;
  border-radius: 20px;
  border: 1px solid azure;
  width: 25%;
  height: 50px;
  margin-top: 50px;
  margin-left: 75%;
}
nav{
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}
#form{
  display: block;
  background-color: azure;
  border: 1px solid azure;
  border-radius: 50px;
  width: 50%;
  height: 600px;
  margin: 150px auto;
}
form{
  display: flex;
  flex-direction: column;
}
input{
  width: 40%;
  height: 20px;
  margin: 10px auto 10px;
}
label{
  font-size: 30px;
}
</style>
