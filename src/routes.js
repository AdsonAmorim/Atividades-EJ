//importar os componentes que serão usados nas rotas
import Formulario from './components/formulario/Formulario.vue'
import Home from './components/home/Home.vue'
import Contato from './components/contato/Contato.vue'

export const routes = [
    {path:'/',component:Home,icon:'house',name:'Início'},
    {path:'/contato',component:Contato,icon:'chat-left',name:'Contato'},
    {path:'/cadastrar',component:Formulario,icon:'person-plus',name:'Cadastrar'}
]