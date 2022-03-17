var entrada = 3000
var valor = 30000; 
var prestacao = 750;
var quantidadeParcelas= 0;

for(i = prestacao; i <= (valor-entrada); i+= prestacao){
		quantidadeParcelas++;
}
console.log(quantidadeParcelas)