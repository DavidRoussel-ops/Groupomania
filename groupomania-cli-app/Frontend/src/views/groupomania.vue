<template>
  <div id="conteneur">
    <div class="conteneur-page">
      <div class="contenue">
        <img alt="log-left" class="font-left" src="../assets/icon-left-font-monochrome-black.png">
        <p>Bonjour {{ lname }}</p>
        <p id="user"></p>
        <button @click="logout">Déconnexion</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'groupomania',
  data : function () {
    return {
      mail : '',
      lname : '',
      fname : '',
    }
  },
  mounted() {
    if (this.$store.state.user.userId === '') {
      this.$router.push('/');
      return ;
    } else {
      this.$store.dispatch('showUserById');
    }
  },
  computed : {
    ...mapState({
      user : 'userInfos',
    })
  },
  methods : {
    logout : function (){
      this.$store.commit('logout');
      this.$router.push('/');
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

.contenue{
  width: 20%;
  box-shadow: 4px 2px 2px lightslategray;
}

.font-left{
  width: 150px;
  height: 150px;
}
</style>