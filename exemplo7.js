/*IMC = peso / (altura * altura)
abaixo de 18.5 = desnutriçao
entre 18.5 e 25 = peso normal
entre 25 e 30 = sobrepeso
entre 30 e 35 = obsedidade I
entre 35 e 40 = obsedidade II
acima de 40 = obsedidade III
*/

calcularIMC(82, 1.78)

function calcularIMC(argPeso, argAltura){
    let IMC
    imc = argPeso / (argAltura ** 2)
    console.log(imc)
}