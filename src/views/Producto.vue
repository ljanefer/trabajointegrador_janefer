
<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <div class="card">
            <div class="card-header">Producto</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="d-flex justify-content-between">
                  <p>{{ producto.nombre }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "producto-app",
  props: ["id"],
  data() {
    return {
      producto: {}
    }
  }
  }
</script>

<style></style>