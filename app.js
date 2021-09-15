//0
/* let nombre;
let apellido;
nombre = window.prompt("Ingrese su nombre");
console.log(nombre);
alert("Hola " + nombre);
apellido = window.prompt("Ingrese su apellido");
console.log("Hola " + nombre+ " " + apellido); */

//1
/* let num1;
let num2;
let sum;
num1 = window.prompt("Ingrese un número");
num1 = parseInt(num1);
num2 = window.prompt("Ingrese otro número");
num2 = parseInt(num2);
sum = num1 + num2;
console.log(sum); */

//2
/* let edad;
let nacimiento;
edad = window.prompt("Ingresa los años que tiene o cumplirá este año");
edad = parseInt(edad);
nacimiento = 2021 - edad;
console.log("Usted nació en " + nacimiento); */

//3
/* let balance = 1200;
let retiro;
let nuevoBalance;
alert("Su balance es de " + balance);
retiro = window.prompt("Cuánto dinero desea retirar")
nuevoBalance = balance - retiro;
alert("Su nuevo balance es de: " + nuevoBalance); */

//4
/* let nota1;
let nota2;
let nota3;
let promedio;
nota1 = window.prompt("Ingrese su primer nota");
nota1 = parseInt(nota1);
nota2 = window.prompt("Ingrese su segunda nota");
nota2 = parseInt(nota2);
nota3 = window.prompt("Ingrese su tercer nota");
nota3 = parseInt(nota3);
promedio = (nota1+nota2+nota3)/3;
console.log("Su promedio es: "+ promedio); */

//5
/* let metros;
let pies;
let centrimetros;
let pulgadas;

metros = window.prompt("Ingrese una medida en metros");
metros = parseInt(metros);
pies = metros * 3.28084;
centrimetros = metros / 100;
pulgadas = metros * 39.3701;
console.log("pies:"+ pies +" "+"Centimetros:" + centrimetros + " " + "pulgadas:" + pulgadas) */

//6
/* let num1;
let num2;
let num3;
let suma;
let resultado;

num1 = window.prompt("Ingrese su primero número");
num1 = parseInt(num1);
num2 = window.prompt("Ingrese su segundo número");
num2 = parseInt(num2);
suma = num1 + num2;
alert("El resultado de la suma es: " + suma);
num3 = window.prompt("Ingrese un tercer número");
num3 = parseInt(num3);
resultado = suma * num3;
alert("El resultado de la multiplicación entre la suma y su último número es de: " + resultado); */

//7
/* let minutos;
let segundos;
minutos = window.prompt("Ingrese los minutos");
minutos = parseInt(minutos);
segundos = minutos * 60;
alert("Equivalen a " + segundos + " segundos"); */

//8
/* let base;
let altura;
let area;
base = window.prompt("Ingresa la base del rectángulo");
base = parseInt(base);
altura = window.prompt("Ingresa la altura del rectángulo");
altura = parseInt(altura);
area = base * altura;
alert("El área del rectángulo es: " + area); */

//9
/* let base;
let altura;
let area;
base = window.prompt("Ingresa la base del triángulo");
base = parseInt(base);
altura = window.prompt("Ingresa la altura del triángulo");
altura = parseInt(altura);
area = base * (altura/2);
alert("El área del triángulo equilatero es de: " + area); */

//10
/* let monto;
let descuento;
let precioFinal;
monto = window.prompt("Ingresa un monto");
monto = parseInt(monto);
descuento = window.prompt("Ingresa su descuento");
descuento = parseInt(descuento);
precioFinal = monto - descuento;
alert("Su precio final es de: " + precioFinal); */

//11
/* let nombre;
let edad;
let nacimiento;
nombre = window.prompt("Ingrese su nombre");
edad = window.prompt("Ingresa los años que tiene o cumplirá este año");
edad = parseInt(edad);
nacimiento = 2021 - edad;
alert("Hola " + nombre + " , usted nació en el año " + nacimiento); */

//12
/* let nombre;
let celsius;
let farenheit;
nombre = window.prompt("Ingrese su nombre");
celsius = window.prompt("Ingrese su temperatura en celsius");
celsius = parseFloat(celsius);
farenheit = celsius *(9/5) + 32;
console.log(nombre + " su temperatura en farenheit es de: " + farenheit); */

//13
/* let nombre;
let celsius;
let farenheit;
nombre = window.prompt("Ingrese su nombre");
farenheit = window.prompt("Ingrese su temperatura en farenheit");
farenheit = parseFloat(farenheit);
celsius = (farenheit - 32) * (5/9)
console.log(nombre + " su temperatura en celsius es de: " + celsius); */

//14
/* let num;
let sum;
let multiplicación;
let resto;
num = window.prompt("Ingrese un número");
num = parseInt(num);
sum = num + 5;
multiplicación = sum * 10;
resto = multiplicación % 3;
alert(Math.round(resto)); */

//Bonus
//0
/* let num1;
let num2;
num1 = window.prompt("Ingrese un número");
num2 = window.prompt("Ingrese otro número");
alert(num1 + num2); */

//1    Está hecho de año a segundos
/* let años;
let horas;
let segundos;
años = window.prompt("Ingrese la cantidad de años")
años = parseFloat(años);
horas = (años *365)*24;
segundos = (horas * 60)*60;
alert("Equivalen a " + segundos + " segundos"); */

//2
/* let kilometros;
let metros;
let velocidad;
let tiempo;
kilometros = window.prompt("Ingrese la cantidad de kilómetros que desea recorrer");
kilometros = parseInt(kilometros);
metros = kilometros * 1000;
velocidad = window.prompt("¿A qué velocidad promedio desea ir en km/h?");
velocidad = parseInt(velocidad);
velocidad = velocidad * (5/18)
tiempo =  (metros / velocidad)/60;
alert("Usted va a tardar en llegar " + tiempo + " minutos"); */


//3
let sueldoBruto;
let obraSocial;
let ley;
let jubilacion;
let montoFinal;
sueldoBruto = window.prompt("Ingrese su sueldo bruto");
sueldoBruto = parseInt(sueldoBruto);
obraSocial = (sueldoBruto*3)/100;
alert("Se reducen " + obraSocial + " de la obra social");
jubilacion = (sueldoBruto*11)/100;
alert("Se reducen " + jubilacion + " de la jubilación")
ley = (sueldoBruto*3)/100;
alert("Se reducen " + ley + " de la ley 19032");
montoFinal = sueldoBruto - obraSocial - ley - jubilacion;
alert("Neto a pagar: " + montoFinal);



