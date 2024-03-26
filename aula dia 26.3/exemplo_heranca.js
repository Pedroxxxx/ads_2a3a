class Conta{
    constructor(){
        this.Saldo = 0;
    }

    get Saldo(){return this.Saldo;}
    set Saldo(pSaldo){this.saldo = pSaldo;}
}

var obj_conta = new Conta();
console.log(obj_conta.saldo);