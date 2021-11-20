<template>
    <div class="item">
        <!-- troca as tags âncora por router-link para evitar o recarregamento da página quando
        for trocar de componente em exibição SPA -->
        <router-link class="router" :to="rota">
          <b-icon :icon="icon" aria-hidden="true">{{ name }}</b-icon>
          <span>{{ name }}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        icon:{
            required: true,
            type:String
        },
        name:{
            required:true,
            type:String
        },
        rota:{
            required:true,
            type:String
        }
    }
}
</script>

<style scoped>

.item .router{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:0 .4rem;
        color: white;
        text-decoration: none;
}

.item span{
        font-size: 1.4rem;
}
</style>