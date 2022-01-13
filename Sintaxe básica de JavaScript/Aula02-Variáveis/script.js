/*
// tipos primitivos

//boolean
var VouF = false;
console.log(typeof(VouF));

//number
var num = 10;
console.log(typeof(num));

//string
var nome = 'João';
console.log(typeof(nome)) */

let variavel = 'João';
variavel = 'Victor';
console.log(variavel);

const constante = 'joão'; 
console.log(constante);

var global = 'aqui é global';
console.log(global);

function escopoLocal() {
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal();

var compar = '0' === '0';
console.log(compar);



