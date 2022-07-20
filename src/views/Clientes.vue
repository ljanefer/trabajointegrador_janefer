<template>
    <div class="container">
    <table class="table">
    <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">website</th>
    </tr>
  </thead>
    <tr v-for="user in usuarios" :key="user.id">
      <td >{{ user.id}} </td>
      <td >{{ user.name}} </td>
      <td >{{ user.email}} </td>
      <td >{{ user.website}} </td>
    </tr>
    </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'clientes-app',
  components: {
  },
  data(){
    return {
      usuarios: []
      }
  },
  created(){
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      response=>{
      this.usuarios =response.data
  })
}
}
</script>
