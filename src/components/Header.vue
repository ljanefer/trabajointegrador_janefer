<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <img :src="require('@/assets/logo.png')" />
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/productos">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/clientes">Clientes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/info">Información</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success me-2" type="submit">Buscar</button>
      </form>
     
        <button type="button" class="btn btn-secondary btn-sm me-2"><i class="bi bi-heart-fill"></i></button>
        <button type="button" class="btn btn-secondary btn-sm me-2"><i class="bi bi-cart-fill"></i></button>
    </div> <div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header-app'
 
  }
</script>