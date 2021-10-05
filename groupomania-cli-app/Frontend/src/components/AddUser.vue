<template>
  <div>
    <div class="field">
      <label class="label">
        <div class="control">
          <input class="input" type="text" placeholder="email" v-model="userEmail"/>
        </div>
      </label>
    </div>
    <div class="field">
      <label class="label">
        <div class="control">
          <input class="input" type="text" placeholder="mots de passe" v-model="userMDP"/>
        </div>
      </label>
    </div>
    <div class="field">
      <label class="label">
        <div class="control">
          <input class="input" type="text" placeholder="nom" v-model="userNom"/>
        </div>
      </label>
    </div>
    <div class="field">
      <label class="label">
        <div class="control">
          <input class="input" type="text" placeholder="prenom" v-model="userPrenom"/>
        </div>
      </label>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveUser">Enregistrer</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name : 'AddUser',
  data() {
    return {
      userEmail : "",
      userMDP : "",
      userNom : "",
      userPrenom : "",
    };
  },
  methods : {
    async saveUser() {
      try {
        await axios.post("http://localhost:3000/groupomania/user", {
          email : this.userEmail,
          mots_de_passe : this.userMDP,
          nom : this.userNom,
          prenom : this.userPrenom,
        });
        this.userEmail = "";
        this.userMDP = "";
        this.userNom = "";
        this.userPrenom = "";
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>

</style>