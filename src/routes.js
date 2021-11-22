//importar os componentes que serão usados nas rotas
import Formulario from './components/formulario/Formulario.vue'
import Home from './components/home/Home.vue'
import Contato from './components/contato/Contato.vue'

export const routes = [
    {path:'/',component:Home},
    {path:'/contato',component:Contato},
    {path:'/cadastrar',component:Formulario}
]