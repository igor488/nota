var nome = prompt("qual seu nome ? ");

alert("bem vindo ao site de nota " + nome );
 
var n1 = prompt("digite a prmira nota1");
var n2 = prompt("digite a prmira nota2");
var n3 = prompt("digite a prmira nota3");
var n4 = prompt("digite a prmira nota4");
 
var soma = (parseInt (n1) + 
            parseInt (n2) + 
            parseInt (n3) + 
            parseInt (n4));

var media = soma / 4;

document.write("a soma das suas notas e " + soma + "<br><br>" ); 

document.write("a media das suas notas e " + media + "<br><br>");

if(media < 60) {

    --document.write("vc esta REPROVADO sinto muito sr " + nome);

}else{

    --document.write("vc esta APROVADO  PARABENS  sr " + nome);

}
