<template>
  <div id="conteneur">
    <div class="conteneur-page">
  <div class="contenue">
    <img alt="log-left" class="font-left" src="../assets/icon-left-font-monochrome-black.png">
    <div class="friends">
      <h2>Colaborateur</h2>
    </div>
    <div class="groupe">
      <h2>Groupes</h2>
    </div>
  </div>
    <div class="conteneur-comment">
      <div class="comment" v-for="(comment, idx) in comments" v-bind:key="idx">
        <h3 class="nom">{{ comment.name }}</h3>
        <p>{{ comment.commentaire }}</p>
        <span>{{ comment.note }}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      comments: [{
        name: 'Michel',
        commentaire: 'Cette appli c\'est de la bombe !!',
        note: 5,
      }, {
        name: 'Nadine',
        commentaire: 'Je trouve pas ça top moi',
        note: 1,
      }, {
        name: 'Daniel',
        commentaire: 'C\'est pas encore le top du top mas c\'est un bon début !',
        note: 3,
      }]
    }
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

.conteneur-comment{
  background: url("../assets/icon.png") no-repeat center;
  width: 80%;
  z-index: 1;
}

.comment{
  border-radius: 50px;
  box-shadow: 4px 2px 2px lightslategray;
  background-color: rgba(255,255,255,1);
  opacity: 1;
  width: 80%;
  height: 200px;
  margin: 50px auto 50px;
  z-index: 2;
}

.nom{
  padding-top: 20px;
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

.font-left{
  width: 150px;
  height: 150px;
}
</style>