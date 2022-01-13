/*
var jogador1 = 0;
var jogador2 = 1;
var placar;

if (jogador1 != -1) {
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 marcou um ponto')
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0 && jogador1 == 0) {
        console.log('Jogador 2 marcou um ponto')
        placar = jogador2 > jogador1
    } else {
        console.log('Niguém marcou ponto')
    }
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('ninguém ganhou')
}
*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3' }

/*
//for
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}
*/

/*
//for/in
for (let i in array) {
    console.log(i)
}

for (i in object) {
    console.log(i)
}
*/

/*for (i of array) {
    console.log(i);
}

for (i of object.propriedade) {
    console.log(i)
}*/

var a = 0;
/*
while (a < 10) {
    a++; console.log(a)
}*/

do {
    a++;
    console.log(a)
} while (a < 10);
