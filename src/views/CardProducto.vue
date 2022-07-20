<template>
  <div class="card" style="width: 18rem">
    <img :src="require('@/assets/img/'+producto.imagen)" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{producto.nombre}}</h5>
      <p class="card-text">
        {{producto.descripcion}}
      </p>
      <a href="/producto/" class="btn btn-primary">Detalle</a>
    </div>
  </div>
</template>
<script>
export default {
    name:'CardProducto-app',
    props:{
        producto:{
            type:Object
        }
    }
};
</script>

<style></style>
