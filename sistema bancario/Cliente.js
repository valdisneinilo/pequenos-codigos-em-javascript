export class Cliente{
   
    get cpf(){
      return this._cpf;
    }
    
    constructor(nome, rg, cpf){
        this.nome = nome;
        this.rg = rg;
        this._cpf = cpf;
    }
}
