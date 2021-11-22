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

      <div class="buttons">
        <b-button type="submit" variant="primary" size="lg" >Enviar</b-button>
        <b-button type="reset" variant="danger" size="lg" >Limpar</b-button>
      </div>
    </b-form>

    <b-img src="src/public/images/forms.svg" fluid></b-img>
  </div>
</template>

<script>
//tentar criar componente button e form-input/form-group
import axios from 'axios'
import User from '../../domain/user/User'

  export default {
    data() {
      return {
        user: new User()
      }
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
  width: 80%;
  margin: auto auto;
  min-width: 15rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
}

@media (min-width:320px) and (max-width:800px) {
    .form {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    
    .form img {
      display: none;    
    }
    
    .form .buttons{
      width: 100%;
      display: flex;
      margin-top: .8rem;
      justify-content: space-between;
    }

    .form .buttons button{
      width: 48%;
    }

}

</style>