class Funcionario{
    constructor(pNome, pSalario){
        this.nome = pNome;
        this.salario = pSalario;
    }

    get Nome(){return this.nome;}
    set Nome(pNome){this.nome = pNome;}
    get Salario(){return this.salario;}
    set Salario(pSalario){this.salario = pSalario;}
    
    calcularSalario(){

    }
}

class Vendedor extends Funcionario{
    constructor(pNome, pSalario, pComissao){
        super(pNome, pSalario);
        this.Comissao = pComissao;

    }

    get Comissao(){return this.comissao;}
    set Comissao(pComissao){this.comissao = pComissao;}

    calcularSalario(){
        return this.salario + this.Comissao;
    }
}

var vendedor = new Vendedor("Luiz", 1100, 150);
console.log(vendedor.calcularSalario());