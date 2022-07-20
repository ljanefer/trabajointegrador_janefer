<template>
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col" v-for="(producto, index) in productos" :key="index">
            <CardProducto :producto="producto" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import CardProducto from './CardProducto.vue'

export default {
  name: 'productos-app',
  components: {
    CardProducto
  },
  data() {
    return {
      productos: [
        {
          id:1,
          nombre: "Caramelera",
          precio: "$1000",
          imagen: "caramelera.jpg",
          descripcion: "Esta es una descripcion de una vela con envase",
        },
        {
          id:2,
          nombre: "Vela envase con tapa metal",
          precio: "$1500",
          imagen: "unavela.jpg",
          descripcion: "Esta es una descripcion de una vela con envase",
        },
        {
          id:3,
          nombre: "Difusor",
          precio: "$1400",
          imagen: "difusor.jpg",
          descripcion: "Esta es una descripcion de una vela con envase",
        },
        {
          id:4,
          nombre: "Esferas aromáticas",
          precio: "$500",
          imagen: "bolitas.jpg",
          descripcion: "Esta es una descripcion de una vela con envase",
        },
        {
          id:5,
          nombre: "carrusel",
          precio: "$1200",
          imagen: "carrusel.jpg",
          descripcion: "Esta es una descripcion de una vela con envase",
        },
        {
          id:6,
          nombre: "envase rojo",
          precio: "$1500",
          imagen: "velaroja.jpg",
          descripcion: "Esta es una descripcion de una vela con envase",
        },
      ],
    };
  },
}
</script>

<style>
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

