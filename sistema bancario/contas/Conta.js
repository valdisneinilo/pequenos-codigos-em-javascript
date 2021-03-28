// classe abstrata
export class Conta{
    constructor(saldoInicial, agencia, cliente){
        if (this.constructor == Conta){
            throw new Error('Você não deve instanciar um objeto do tipo Conta diretamente. Pois essa é uma classe abstrata') // gerar um erro
        }
        this._agencia = agencia; 
        this._cliente = cliente;
        this._saldo = saldoInicial;
        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        } // instanceof somente se for dessa instancia  
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }
    saque(valor){
        var taxa = 1;
        const valorSacado = taxa * valor;
        if (this._saldo>= valorSacado){
            this._saldo -=valorSacado;
            return valor;
        }
    }
    deposito(valor){
        if (valor <= 0) return; 
        this._saldo += valor;   
    }

    transferencia(valor, conta){
        const transferir = this.saque(valor)
        conta.deposito(transferir);
    }

}