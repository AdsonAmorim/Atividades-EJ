export default class User 
{
    constructor(nome='',email='',senha='',confirmSenha=''){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.confirmSenha= confirmSenha;
    }
}