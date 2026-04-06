// let n1 = 5;

// if (n1 == 5) {
//     console.log("Verá essa mensagem!");
// }

// if (n1 == 6) {
//     console.log("Não verá essa mensagem!");
// }

// let cor1 = prompt("Digite uma cor: ");

// if (cor1 == "Vermelho") {
//     console.log("A cor é Vermelho!");
// } else {
//     console.log("A cor não é Vermelho!");
// }

// let nomeUsuario = prompt("Insira seu nome: ");

// if ((nomeUsuario == "") || (nomeUsuario == null)) {
//     nomeUsuario = prompt("Por favor, insira seu nome: ");
//     alert(`Nome inserido: ${nomeUsuario}`);    
// } else {
//     alert(`Nome inserido: ${nomeUsuario}`);    
// }

// let combustivel = prompt("Digite o tipo de combustível: ");

// if (combustivel == "gasolina") {
//     alert("O veículo se move à gasolina");

// } else if (combustivel == "alcool") {
//     alert("O veículo se move à alcool");

// } else if (combustivel == "diesel") {
//     alert("O veículo se move a diesel");

// } else {
//     alert("O veículo só pode ser elétrico");
// }



// let n = parseInt(prompt("Digite um número de 1 a 5: "));

// if (n == 1) {
//     alert("O número inserido é: um");
// } else if (n == 2) {
//     alert("O número inserido é: dois");
// } else if (n == 3) {
//     alert("O número inserido é: três");
// } else if (n == 4) {
//     alert("O número inserido é: quatro");
// } else if (n == 5) {
//     alert("O número inserido é: cinco");
// } else {
//     alert("O número inserido é diferente de algum número de 1 a 5, ou foi escrito por extenso");
// }

// let num = parseInt(prompt("Digite um número entre 1 e 100"));

// if (num <= 10) {
//     alert(`O número digitado: ${num} está entre 1 e 10`);

// } else if (num <= 20) {
//     alert(`O número digitado: ${num} está entre 11 e 20`);
    
// } else if (num <= 30) {
//     alert(`O número digitado: ${num} está entre 21 e 30`);
    
// } else if (num <= 40) {
//     alert(`O número digitado: ${num} está entre 31 e 40`);
    
// } else if (num <= 50) {
//     alert(`O número digitado: ${num} está entre 41 e 50`);
    
// } else if (num <= 60) {
//     alert(`O número digitado: ${num} está entre 51 e 60`);
    
// } else if (num <= 70) {
//     alert(`O número digitado: ${num} está entre 61 e 70`);
    
// } else if (num <= 80) {
//     alert(`O número digitado: ${num} está entre 71 e 80`);
    
// } else if (num <= 90) {
//     alert(`O número digitado: ${num} está entre 81 e 90`);
    
// } else if (num <= 100) {
//     alert(`O número digitado: ${num} está entre 91 e 100`);
    
// } else {
//     alert("o número digitado está fora da escala solicitada");
// }


// let nome = prompt("Insira seu nome: ");
// let sobrenome = prompt("Insira seu sobrenome: ");

// if ((nome != "") && (sobrenome != "")) {
//     alert(`Nome: ${nome} e sobrenome: ${sobrenome}`);
// } else {
//     alert("Não foi digitado nenhum nome e/ou sobrenome");
// }

// let name = prompt("Inserir nome: ");

// if ((name == "ANA") || (name == "ana") || (name == "Ana")) {
//     alert("O nome inserido é ana");
// } else {
//     alert("O nome inserido não é ana");
// }

// let idade = parseInt(prompt("Inserir idade"));

// if (idade < 18) {
//     alert("É jovem");
// } else if ((idade >= 18) && (idade < 60)) {
//     alert("É adulto");
// } else {
//     alert("É idoso");
// }

let nome = prompt("Inserir nome");

if ((nome != "") && ((nome == "EMA") || (nome == "ema") || (nome == "Ema"))) {
    alert("Olá, Ema");
} else {
    alert("Erro: Inserir nome válido");
}