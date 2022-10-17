let primeiroNumero = parseInt(prompt("Primeiro número:"));
let segundoNumero = parseInt(prompt("Segundo número:"));
let diferencaUm = primeiroNumero - segundoNumero;
let diferencaDois = segundoNumero - primeiroNumero;

if(primeiroNumero > segundoNumero){
    alert(`O maior número é ${primeiroNumero} e a diferença é ${diferencaUm}`);
}else if (segundoNumero>primeiroNumero){
    alert(`O maior número é ${segundoNumero} e a diferença é ${diferencaDois}`);
}



let primeiro = parseFloat(prompt("Primeiro número:"));
let segundo = parseFloat(prompt("Segundo número:"));

if(primeiro > segundo){
    alert(`O primeiro valor é maior`);
}else if(primeiro === segundo){
    alert(`Números iguais`);
}else(segundo > primeiro)
    alert(`O segundo número é maior`);



let salario = parseFloat(prompt("Salário:"));
let emprestimo = parseFloat(prompt("Empréstimo:"));
 
if( salario > emprestimo / 100 * 300){
alert(`Emprestimo consedido`)
}
else if( salario < emprestimo / 100 * 300 )
{    alert(`Empréstico nao consedido`)
}



let seuNumero = parseInt(prompt("Seu número:"))
if(seuNumero % 3 === 0 && seuNumero % 5 === 0){
    alert(`Valor inválido`);
}else if (seuNumero % 3 === 0){
    alert(`Valor divisivel por 3`);
}else if (seuNumero % 5 === 0)
{
    alert(`Valor divisivel por 5`);
}                                            



let dia = parseInt(prompt("Coloque um número"));
if(dia == 1){
    alert(`Domingo`)
}else if(dia == 2){
    alert(`Segunda-Feira`)
}else if(dia == 3){
    alert(`Terça-Feira`)
}else if(dia == 4){
    alert(`Quarta-Feira`)
}else if(dia == 5){
    alert(`Quinta-Feira`)
}else if(dia == 6){
    alert(`Sexta-Feira`)
}else if(dia == 7){
    alert(`Sábado`)
}else if(dia > 7)
{alert(`Número inválido`)}




let seuSalario = parseFloat(prompt('Digite o valor de seu salário'));
let seuAjuste = parseFloat(prompt('Digite o percentual'));
    if(seuAjuste > 5){
        alert(`Limite de 5%`);
    }else{
let percentual = (seuSalario / 100 * seuAjuste);
let resultado = (percentual + seuSalario);
alert(`O salário do funcionario corrigido é de: ${resultado}`)};



let valorDolar = parseFloat(prompt("Digite o valor em dólar"));
let real = valorDolar * 5.40;
let = dolar = 5.40;
alert(`${valorDolar} é equivalente a R$ ${real} sendo ${dolar} a cotação`);



let pulverizacao = parseFloat(prompt("Coloque o tipo de pulverização que voce deseja de 1 a 4:"));
let quantidaDeAcre = parseFloat(prompt("Coloque quantos acres serão pulverizados:"));
let ervasDaninhas = 50;
let gafanhotos = 100;
let broca = 150;
let todosAcima = 250;
let resultadoFinal = 0
if(pulverizacao == 1){
 resultadoFinal = ervasDaninhas * quantidaDeAcre
}
if(pulverizacao == 2){
    resultadoFinal = gafanhotos * quantidaDeAcre
}
if(pulverizacao == 3){
    resultadoFinal = broca * quantidaDeAcre
}
if(pulverizacao == 4){
    resultadoFinal = todosAcima * quantidaDeAcre
}
if(quantidaDeAcre >= 1000){
    let desconto = resultadoFinal * 0.05
    resultadoFinal = resultadoFinal - desconto
}
if(resultadoFinal > 750){
    resultadoFinal = resultadoFinal - 750
    let descontoDois = resultadoFinal * 0.10
    resultadoFinal = resultadoFinal - descontoDois + 750
}
alert(`O valor a ser pago é de: R$ ${resultadoFinal.toFixed(2)}`)



let tempo = parseFloat(prompt("Coloque o tempo da viagem:"));
let velocidade = parseFloat(prompt("Coloque a velocidade da viagem:"));
let distancia = tempo * velocidade;
let litroUsado = distancia / 12
alert(`Seu veiculo percorreu ${distancia}km a ${velocidade} km/h 
em ${tempo}h de viagem e consumiu ${litroUsado.toFixed(2)} l de gasolina`);



let variavel = parseFloat(prompt("Insira o valor:"));
let taxa = parseFloat(prompt("Insira a taxa:"));
let tempo = parseFloat(prompt("Insira o tempo:"));
let prestacao = variavel + (variavel * (taxa / 100) * tempo)
if(tempo > 0){
alert(`O valor da prestação é ${prestacao}`)
}else {
    alert(`Valor inválido o tempo de atraso deve ser em dias`)
}