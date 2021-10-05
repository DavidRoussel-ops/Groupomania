<template>
  <div>
    <router-link :to="{ name : 'Create' }" class="button is-success mt-5">Add user</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
      <tr>
        <th>id</th>
        <th>email</th>
        <th>mots de passe</th>
        <th>nom</th>
        <th>prenom</th>
        <th class="has-text-centered">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.mots_de_passe }}</td>
        <td>{{ item.nom }}</td>
        <td>{{ item.prenom }}</td>
        <td class="has-text-centered">
          <router-link to="{ name : 'update', params : { id : item.id }}" class="button is-info is-small">Modifier</router-link>
          <a class="button is-danger is-small" @click="deleteUser(item.id)">Supprimer</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name : 'UserList',
  data() {
    return{
      items : [],
    };
  },
  created() {
    this.getUser();
  },
  methods : {
    async getUser() {
      try {
        const response = await axios.get("http://localhost3000/groupomania/user");
        this.items = response.data;
      } catch (err) {
        console.log(err)
      }
    },
    async deleteUser(id) {
      try {
        await axios.delete("http://localhost3000/groupomania/user/:id");
        this.getUser();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>

</style>