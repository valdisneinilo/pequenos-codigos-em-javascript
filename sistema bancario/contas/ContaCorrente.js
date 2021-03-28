import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static totalDeContas = 0;
    numeroDaConta;
    constructor(agencia, cliente,){
        super(0, agencia, cliente);
        ContaCorrente.totalDeContas ++
        this.numeroDaConta = ContaCorrente.totalDeContas
       
    }
    saque(valor){
        var taxa = 1.05;
        const valorSacado = taxa * valor;
        if (this._saldo>= valorSacado){
            this._saldo -=valorSacado;
            return valor;
        }
    }
}
