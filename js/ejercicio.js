// Ejercicios: estructuras condicionales y repetitivas en Javascript
// Quitar comentarios para visualizar uno a uno


/*
//#1 COMPLETANDO CONDICIONES  /    OK!
var numero1 = 5;
var numero2 = 8;

if(numero1 > numero2) { 
    alert(numero1 + " no es mayor que " + numero2); 
}

if(numero2 > 0){
  alert(numero2 + " es positivo");
}

if(numero1 < 0){
  alert(numero1 + " es negativo o distinto de cero");
}

if(numero1 < numero2){
  alert("Incrementar en 1 unidad el valor de " + numero1 + "  no lo hace mayor o igual que " + numero2);
}
*/


/*
//#2 FACTORIAL DE UN NUMERO  /    OK!
function factorial (numero) {
  var resultado = 1;
  for (var i = 1; i <= numero; i++) {
    resultado = i * resultado;
  }
  return resultado;
}
*/


/*
//#3 OPERACIONES MATEMATICAS  /    OK!
n1 = prompt("Ingrese numero1");
n2 = prompt("Ingrese numero2");

if (n1 > n2) {
  suma = parseInt(n1) + parseInt(n2);
  resta = parseInt(n1) - parseInt(n2);
  alert("la suma de " + n1 + " y " + n2 + " es igual a " + suma);
  alert("la resta de " + n1 + " y " + n2 + " es igual a " + resta)
}
if (n1 == n2) {
  alert("Ambos numeros son iguales");
}
if (n1 < n2) {
  multiplicar = parseInt(n1) * parseInt(n2);
  dividir = parseInt(n1) / parseInt(n2);
  alert("la multiplicacion de " + n1 + " y " + n2 + " es igual a " + multiplicar);
  alert("la division de " + n1 + " y " + n2 + " es igual a " + dividir);
}
*/


/*
//#4 SALDO BANCARIO    / Faltan datos... "De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual" No es así
var cuenta, nombre, saldo;

if (saldo > 0) {
  alert("Acreedor");
}
if (saldo < 0) {
  alert("Deudor");
}
if (saldo == 0) {
  alert("Nulo");
}
*/


/*
//#5 REPETIR UN TEXTO  /    OK!
var texto, veces; 
texto = prompt("Ingrese texto");
veces = prompt("Ingrese veces a repetir");

for (i = 0; i<veces; i++) {
  alert(texto);
}
*/


/*
//#6 MULTIPLOS DE 11  /    OK!
var numero, multiplos;
numero = 11;
var suma = 0;

for (var i = 1 ; i < 270; i++) {
  multiplos = (numero)*i; 
  console.log(multiplos); 
  suma+=(multiplos)+(multiplos);
};

console.log("La suma de todos los multiplos de 11 es " + suma);
*/


/*
//#7 LISTAS DE VALORES  /    OK!
var lista1, lista2;
lista1 = prompt('Ingrese 3 valores para lista1:','');
lista2 = prompt('Ingrese 3 valores para lista2:','');

if (lista1 > lista2) {
  alert("Lista 1 es mayor");
}
if (lista1 == lista2) {
  alert("Listas son iguales");
}
if (lista2 > lista1) {
  alert("Lista 2 es mayor");
}
*/


//#8 IDENTIFICANDO TIPO DE TRIANGULO




//#9 TRADUCIENDO PALABRAS




//#10 CENSO PROVINCIAL



