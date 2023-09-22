const calcularMedia = function(nota1, nota2, nota3, nota4, situacao){

    if (nota1=="" || nota2=="" || nota3=="" || nota4==""){

        console.log('NENHUM CAMPO PODE ESTAR VAZIO, ACRESCENTE ALGUM VALOR!')
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){

        console.log('SOMENTE ALGARISMOS SÃO ACEITOS NESTE CAMPO')
    } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100){

        console.log('SOMENTE ADICIONE NÚMEROS MENORES OU IGUAIS A 100')
    }

    let media = (nota1 + nota2 + nota3 + nota4)/4

    if (media >=70){

        situacao == "APROVADO"
    } else if (media >= 50 && media < 70){

        situacao == "EM EXAME"
    } else if (media < 50){

        situacao == "REPROVADO"
    }


}

module.exports = {

    calcularMedia
}