<template>
  <div id="app">
    <nav>
      <Homepage url="#" text="Accueil"/>
      <Homepage url="#" text="A propos"/>
      <Homepage url="#" text="Contact"/>
    </nav>
    <p>Bienvenue sur la page de <Homepage text="Groupomania"/>!</p>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
