<template>
    <div class="navbar">
      <Item v-for="route in routes" :rota="route.path" :icon="route.icon" :name="route.name" :key='route.name'/>
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    components:{
      Item
    },
    props :{
      routes: {
        type:Array,
        required:true
      }
    }
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
</style>