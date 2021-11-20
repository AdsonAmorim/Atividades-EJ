<template>
  <div class="corpo">
    <NavBar :routes="routes"/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/shared/navbar/Navbar.vue'
import './public/styles/global.css'
import {routes} from './routes'

export default {
  data(){
    return {
      routes
    }
  },
  components:{
    NavBar
  },
}
</script>

<style scoped>
  .corpo {
    width: 100vw;
    height: 100vh;
    font-size: 2rem;
    display: flex;
    background-color: #121214;
    color: white;
  }
</style>
