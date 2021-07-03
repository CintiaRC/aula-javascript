


function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
   //window.open("https://www.linkedin.com/company/globallabs/?originalSubdomain=br");
   window.location.href = "https://www.linkedin.com/company/globallabs/?originalSubdomain=br";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada")

}

function funcaoChange(elemento){
    console.log(elemento.value)
}
  

/*
function soma(n1, n2);{
    return n1 + n2;
}
var validar = 0;

function validaIdade(idade){
    if (idade >=18){
        validar = true
    }
     else{
        validar = false
    } return validar;
}

var idade = prompt("Qual a sua idade?")
validaIdade(idade)
console.log(validar);
*/


/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <=5; count++){
    alert(cout);
};
*/

/*
var count = 5;
while (count < 5){
    console.log(count);
    count++;
};
*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){ 
    alert("maior de idade");}
    else{ 
        alert("menor de idade");
    };
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas.nome);
alert(frutas[1].nome);
*/


/*
var fruto = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "))
//console.log(lista[1]);
//console.log(lista.lenght);
//console.log(lista.reverse());


//var nome = "Cintia Cindio";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor país do mundo";
// alert(nome + "tem" + n1 + "anos");
//alert (n1 + n2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));