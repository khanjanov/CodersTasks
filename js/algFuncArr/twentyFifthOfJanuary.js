//TODO Input ile daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.

/* let a = +prompt("enter a number");
const primeOrComplex = () =>{
let isPrime = true;
for(i=2;i<a;i++){
  if(a%i===0){
    isPrime = false;
    break;
  }
}
if(isPrime){ 
  console.log(`${a} is prime`)
}else{
  console.log(`${a} is complex`)
}
}
primeOrComplex(a) */

//TODO Input ile daxil olunan ədədin rəqəmlərindən cüt ədədləri göstərin.

/* let a = prompt("enter a number").split("");
const findEvens = () => {
for(let i = 0; i <= a.length ; i++){
  if(+a[i]%2===0){
    console.log(a[i])
  }else{
    console.log("ədədin rəqəmlərindən heç biri cüt deyil")
  }
}
}
findEvens(a) */

//TODO Input ile daxil olunan ədədin rəqəmlərindən sadə ədədləri göstərin.

/* let a = +prompt("enter a number");
const findPrimes = () => {
for(i=0;i<=a;i++){
  let reminder = a%10;
  let isPrime = true;
  for(i=2;i<reminder;i++){
    if(reminder%i===0){
      isPrime = false;
      break;
    }
  }
  if(isPrime && reminder != 1){ 
    console.log(`${reminder} is prime`)
  }
  a = (a - reminder)/10;
}
}
findPrimes(a); */

//TODO Input ile daxil olunan ədədin rəqəmlərindən mükəmməl ədəd olub olmadığını tapın.

/* let a = +prompt("enter a number");
const isPerfect = () =>{
sum = 0;
  for (let i = 1; i < a-1;i++) {
    if (a % i == 0) {
      sum += i;
    } 
  }
  sum===a ? console.log(`${a} mükəmməl ədəddir`) : console.log(`${a} mükəmməl ədəd deyil`)
}
isPerfect(a) */

//TODO Input ile daxil olunan ədədin reqmelerin sayi ve string ile tərsini tapın.

/* let a = prompt("enter a number").split("");
const countAndStringReversal = () =>{console.log(`rəqəmlərin sayı ${a.length}, ədədin tərsi ${a.reverse().join("")}`);}
countAndStringReversal(a) */

//TODO Input ile daxil olunan ədədin tərsinin bölənlərini göstərin.

/* let a = +prompt("Enter a number: ");
let reversed = "";
let divisors = 1;
const reverseAndFindDivisors = () => {
for (let i = 0; i < a; i++) {
  let reminder = a % 10;
  a = (a - reminder) / 10;
  reversed += reminder;
}
for (let i = 0; i <= reversed; i++) {
  if (reversed % divisors == 0) {
    console.log("divisors of reversed number", divisors);
    divisors++;
  } else {
    divisors++;
  }
}
}
reverseAndFindDivisors(a); */

//TODO Input ile daxil olunan 1 ci ədədi daxil olunan 2 ci ədədin qüvvətinə yüksəldin.

/* let a = prompt("enter first number");
let b = prompt("enter second number");
const findSqr = () => {
console.log(a**b)
}
findSqr(a,b) */

//TODO Input ile daxil olunan ədədin rəqəmlərinin kvadratları cəmini tapın.

/* let a = prompt("enter a number").split("");
let sumOfSqr = 0;
const findSqrSum = () => {
 for (let i = 0; i < a.length; i++) {
   let b = a[i] ** 2;
   sumOfSqr += b;
 }
 console.log(`${sumOfSqr}`);
}
findSqrSum(a); */

//TODO Daxil edilen ededlerin ededi ortasini tapin

/* let a = prompt("enter numbers with spaces").split(" ");
let sum = 0;
const findAverage = () => {
for(i=0; i < a.length; i++){
  sum += +a[i];
}
console.log(`${sum/a.length}`);
}
findAverage(a) */

//TODO Daxil olunan 2 eded arasinda olan en boyuk sade ededi tapin

/* let a = +prompt("enter a number");
let b = +prompt("enter a number");
let c ;
const findBiggestPrime = () => {
for(a;a<b;a++){
  let isPrime = true;
  for(i=2;i<a/2;i++){
    if(a%i===0){
    isPrime=false;
    break;
    }else{ 
    c=a;
    }
  }
}
console.log(`${c} is biggest prime number`)
}
findBiggestPrime(a,b) */

//TODO Istifadeciden alinan n sayda ededden necesinin murekkeb eded oldugunu tapin

/* let a = +prompt("how many number will you enter");
b=[];
let counter=0 ;
const findCountOfComplex = () =>{
for(i=0;i<a;i++){
  let isComplex = true;
    b[i] = +prompt(`enter number ${i+1}`);
    for(j=2; j < b[i]/2; j++){
    if(b[i]%j===0){
    isComplex=true;
    counter++;
    break;
    }
    }if(!isComplex){ 
    break;
    }
}
console.log(`${counter} complex number`)
}
findCountOfComplex(a) */

//TODO Input ile daxil olunan 3 ededden ortancili tapan funksiya yazin.

/*let a = +prompt("enter first number");
let b = +prompt("enter second number");
let c = +prompt("enter third number");
function findMiddle() {
 if (a > b && a > c && b!=b) {
  if (b > c) {
     console.log(`c=${c}, b=${b}, a=${a} --> middle is ${b}`);
    } else {
     console.log(`b=${b}, c=${c}, a=${a} --> middle is ${c}`);
    }
  } else if (b > a && b > c && a!=c) {
   if (a > c) {
     console.log(`c=${c}, a=${a}, b=${b} --> middle is ${a}`);
    } else {
     console.log(`a=${a}, c=${c}, b=${b} --> middle is ${c}`);
    }
  } else if (c > a && c > b && a!=b) {
    if (a > b) {
     console.log(`b=${b}, a=${a}, c=${c} --> middle is ${a}`);
    } else {
     console.log(`a=${a}, b=${b}, c=${c} --> middle is ${b}`);
    }
  } else {
   alert("enter three different numbers");
  }
}
findMiddle()*/

//TODO Arrayda guzgu ededleri tapsin

/* let a = prompt("enter numbers with spaces").split(" ");
const findPolindrome = () => {
 let polindrome = a.filter((item) => {
   if (item == item.split("").reverse().join("")) {
    console.log(`polindrome`)
} else {
    console.log("polindrome deyil")
}
 })
}
findPolindrome(a) */

/*let a = prompt("enter a number");
let b = a;
let reversed = "";
const findPolindrome = () => {
for (let i = 0; i < a; i++) {
  let reminder = a % 10;
  a = (a - reminder) / 10;
  reversed += reminder;
}
console.log(reversed)
let c = reversed

if(c  === b){
console.log("polindrome")
}else{
console.log("polindrome deyil")
}
}
findPolindrome(a)*/

 