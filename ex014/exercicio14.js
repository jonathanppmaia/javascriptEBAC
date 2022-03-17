/*
Quantas prestacoes sao necessárias para pagar o valor do carro com uma entrada de 3.000.00
*/
var entrada = 3000
var valor = 30000; 
var prestacao = 750;
var quantidadeParcelas= 0;

for(i = prestacao; i <= (valor-entrada); i+= prestacao){
		quantidadeParcelas++;
}
console.log(quantidadeParcelas)