import { Funcionarios } from "./funcionarios.js";

export class Diretor extends Funcionarios{
    constructor(nome, cpf, salario){
        super(nome, cpf, salario);
        this._bonificacao = 1.5;
    }
}