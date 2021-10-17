<template>
  <div id="conteneur">
    <div class="conteneur-page">
      <div class="contenue">
        <img alt="log-left" class="font-left" src="../assets/icon-left-font-monochrome-black.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'groupomania',
  mounted() {
    console.log(this.$store.state.user);
  }
}
</script>

<style>
#conteneur{
  height: 200px;
  position: absolute;
  width: 100%;
}

.conteneur-page{
  width: 100%;
  display: flex;
  z-index: 2;
}

.contenue{
  width: 20%;
  box-shadow: 4px 2px 2px lightslategray;
}

.font-left{
  width: 150px;
  height: 150px;
}
</style>