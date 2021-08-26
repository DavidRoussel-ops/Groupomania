<template>
  <div id="conteneur">
  <div class="contenue">
    <img alt="log-left" class="font-left" src="../assets/icon-left-font-monochrome-black.png">
    <div class="friends">
      <h2>Colaborateur</h2>
    </div>
    <div class="groupe">
      <h2>Groupes</h2>
    </div>
  </div>
  <div class="home">
    <img alt="Groupomania logo" src="../assets/icon.png">
  </div>
    <i class="fas fa-edit"></i>
  </div>
</template>

<style>
#conteneur{
  display: flex;
}

.contenue{
  width: 20%;
  box-shadow: 4px 2px 2px lightslategray;
}

.friends{
  height: 400px;
}

.groupe{
  height: 400px;
}

h2{
  box-shadow: 0 2px 2px lightslategray;
  padding: 10px;
}

.home{
  width: 80%;
}

.font-left{
  width: 150px;
  height: 150px;
}
</style>