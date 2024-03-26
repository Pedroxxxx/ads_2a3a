class Funcionario{
    constructor(pNome, pSalario){
        this.nome = pNome;
        this.salario = pSalario;
    }

    get Nome(){return this.nome;}
    set Nome(pNome){this.nome = pNome;}
    get Salario(){return this.salario;}
    set Salario(pSalario){this.salario = pSalario;} 
}