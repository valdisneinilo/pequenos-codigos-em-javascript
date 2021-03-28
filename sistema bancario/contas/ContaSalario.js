import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(agencia, cliente){
        super(0, agencia, cliente);
    }
    saque(valor){
        var taxa = 1.01;
        const valorSacado = taxa * valor;
        if (this._saldo>= valorSacado){
            this._saldo -=valorSacado;
            return valor;
        }
    }

}