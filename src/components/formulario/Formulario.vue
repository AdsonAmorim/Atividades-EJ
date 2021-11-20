<template>
  <div class="form">
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-form-group
        id="input-group-1"
        label="Seu E-mail:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="user.email"
          type="email"
          placeholder="Insira seu E-Mail"
          required
          name="email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Seu nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.nome"
          placeholder="Insira seu nome"
          required
          name="nome"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Sua senha:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="user.senha"
          placeholder="Insira sua senha"
          required
          name="senha"
          type="password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Confirme sua senha:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="user.confirmSenha"
          placeholder="Insira sua senha novamente"
          required
          name="confirmSenha"
          type="password"
        ></b-form-input>
      </b-form-group>

      <Botao tipo="submit" rotulo="Enviar" variant="primary"/>
      <Botao tipo="reset" rotulo="Limpar" variant="danger"/>
    </b-form>
  </div>
</template>

<script>
//tentar criar componente button e form-input/form-group
import Botao from './Botao.vue'
import axios from 'axios'
import User from '../../domain/user/User'
  export default {
    data() {
      return {
        user: new User()
      }
    },
    components:{
      Botao
    },
    methods: {
      onSubmit() {
        const {nome,email,senha,confirmSenha} = this.user
        console.log(this.user.nome)
        axios.post('http://localhost:3000/add-user',{nome,email,senha,confirmSenha})
          .then(res => console.log(res))
          .catch(err => console.log(err))

          this.onReset()
      },
      onReset() {
        // Reset our form values
        this.user = new User()
      }
    }
  }
</script>
<style>
.form{
  width: 50%;
  margin: auto auto;
  min-width: 15rem;
}
</style>