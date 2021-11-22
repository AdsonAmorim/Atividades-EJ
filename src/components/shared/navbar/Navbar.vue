<template>
<!--  -->
    <div class="navbar">
      <router-link class="router" to="/">
          <b-icon icon="house" aria-hidden="true">Início</b-icon>
          <span>Início</span>
      </router-link>
      <router-link class="router" to="/contato">
          <b-icon icon="chat-left" aria-hidden="true">Contato</b-icon>
          <span>Contato</span>
      </router-link>
      <router-link class="router" to="/cadastrar">
          <b-icon icon="person-plus" aria-hidden="true">Cadastrar</b-icon>
          <span>Cadastro</span>
      </router-link>
    </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
.navbar{
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #0d6efd;
  color: white;
}

.navbar .router{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:0 .4rem;
  color: white;
  text-decoration: none;
}

.navbar span{
 font-size: 1.4rem;
}

@media (min-width:320px) and (max-width:720px) {
   .navbar {
      width: 100%;
      height: 4rem;
      position: fixed;
   }

   .navbar span{
      display: none;
   }
}
</style>