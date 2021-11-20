<template>
      <b-button :type="tipo" :variant="variant" size="lg" >{{ rotulo }}</b-button>
</template>

<script>
export default {
    props: {
        rotulo:{
            required:true,
            type:String
        },
        tipo:{
            required:true,
            type:String
        },
        variant:{
            required:true,
            type:String
        }
    }
}
</script>

<style scoped>
b-button {
  font-size: 5rem;
}
</style>