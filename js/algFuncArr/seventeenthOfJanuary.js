//! new tasks 17.01.24

//TODO Input ile daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.

/*let a = +prompt("enter a number");
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
}*/


//? Input ile daxil olunan ədədin rəqəmlərindən tam ədədləri göstərin.

//TODO Input ile daxil olunan ədədin rəqəmlərindən cüt ədədləri göstərin.

/*let a = prompt("enter a number").split("");
for(let i = 0; i <= a.length ; i++){
  if(+a[i]%2===0){
    console.log(a[i])
  }else{
    console.log("ədədin rəqəmlərindən heç biri cüt deyil")
  }
}*/

//TODO Input ile daxil olunan ədədin rəqəmlərindən sadə ədədləri göstərin.

/*let a = +prompt("enter a number");
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
}*/

//TODO Input ile daxil olunan ədədin rəqəmlərindən mükəmməl ədəd olub olmadığını tapın.

/*let a = +prompt("enter a number");
sum = 0;
  for (let i = 1; i < a-1;i++) {
    if (a % i == 0) {
      sum += i;
    } 
  }
  sum===a ? console.log(`${a} mükəmməl ədəddir`) : console.log(`${a} mükəmməl ədəd deyil`)*/
  
//TODO Input ile daxil olunan ədədin reqmelerin sayi ve string ile tərsini tapın.

/*let a = prompt("enter a number").split("");
console.log(`rəqəmlərin sayı ${a.length}, ədədin tərsi ${a.reverse().join("")}`);*/


//TODO Input ile daxil olunan ədədin tərsinin bölənlərini göstərin.

//! metodla
/*let a = prompt("enter a number").split("").reverse().join("");
let divisors = [];
for (let i = 1; i <= +a;i++) {
  if(a.split("")[i]===0){
    a = a.join("").reverse() / 10;
  }
  if (+a % i == 0) {
    divisors.push(i);
  }
}
console.log(divisors);*/

//! metodsuz 
/*let a = +prompt("Enter a number: ");
let reverse = "";
let divisors = 1;

for (let i = 0; i < a; i++) {
  let remember = a % 10;
  a = (a - remember) / 10;
  reverse += remember;
}
console.log("reversed number:", reverse);

for (let i = 0; i <= reverse; i++) {
  if (reverse % divisors == 0) {
    console.log("divisors of reversed number", divisors);
    divisors++;
  } else {
    divisors++;
  }
}*/


//TODO Input ile daxil olunan 1 ci ədədi daxil olunan 2 ci ədədin qüvvətinə yüksəldin.

//! metodla
/*let a = prompt("enter first number");
let b = prompt("enter second number");
console.log(`${Math.pow(a,b)}`);*/

//! metodsuz
/*let a = prompt("enter first number");
let b = prompt("enter second number");
console.log(a**b)*/

//TODO Input ile daxil olunan ədədin rəqəmlərinin kvadratları cəmini tapın.

//! metodla
/*let a = prompt("enter a number").split("");
let sum = 0;
for(i=0; i < a.length; i++){
  sum += Math.pow(a[i],2);
}
console.log(sum);*/

//! metodsuz
/*let a = prompt("enter a number").split("");
 let sqrsum = 0;
 for (let i = 0; i < a.length; i++) {
   let b = a[i] ** 2;
   sqrsum += b;
 }
 console.log(`${sqrsum}`);*/

//TODO Input ile daxil olunan ədədin 3 ededi string ile yan-yana yigilsin. Misal ucun: 3, 45, 10

/*let a = prompt("enter numbers with spaces").split(" ").join(",");
console.log(a)*/

//TODO Input ile daxil olunan ədədin 3 ededi string ile yan-yana ardicilliq ile yigilsin. Misal ucun: 3, 10, 45

/*let a = prompt("enter numbers with spaces").split(" ").sort((a, b) => a - b).join(",");
console.log(a)*/

//TODO İstifadəçidən alınan n sayda ədədi array’i toplayın ve siralayin

/*let a = prompt("enter numbers with spaces").split(" ").sort((a, b) => a - b);
console.log(a)*/

//TODO Daxil edilen ededlerin ededi ortasini tapin

/*let a = prompt("enter numbers with spaces").split(" ");
let sum = 0;
for(i=0; i < a.length; i++){
  sum += +a[i];
}
console.log(`${sum/a.length}`);*/

//? Isifadeciden alinan n sayda ededden necesinin tam eded oldugunu tapin

//TODO arraydə sadə və mürəkkəb ədədlər

/*const a = [7, 13, 25, 28, 62, 36, 869, 27, 67];

let prime=[] ;
let complex = [];
for(i=0; i<a.length; i++){
  let isPrime = true;
    for(j=2; j < a[i]/2; j++){
    if(a[i]%j==0){
    isPrime=false;
    break;
    }
    }if(isPrime){ 
    prime.push(a[i]);
    }else{
      complex.push(a[i])
    }
}
console.log(`prime numbers --> ${prime} complex numbers --> ${complex}`)*/

//TODO Istifadeciden alinan n sayda ededden necesinin murekkeb eded oldugunu tapin

/*let a = +prompt("how many number will you enter");
b=[];
let counter=0 ;
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
console.log(`${counter} complex number`)*/

//TODO Daxil olunan 2 eded arasinda olan en boyuk sade ededi tapin

/*let a = +prompt("enter a number");
let b = +prompt("enter a number");
let c ;
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
console.log(`${c} is biggest prime number`)*/

//TODO Input ile daxil olunan ededin reqemlerinde ilk sade ededi tapin

/*let a = +prompt("enter a number");
let c = [];
for(i=0;i<=a;i++){
  let reminder = a%10;
  let isPrime = true;
  for(i=2;i<reminder;i++){
    if(reminder%i===0){
      isPrime = false;
      break;
    }
  }
  if(isPrime && reminder !== 1){ 
    c.push(reminder)
  }
  a = (a - reminder)/10;
}
console.log(`${c.at(-1)} is first prime number`)*/

//TODO Istifadecinin daxil etdiyi ededin kok altini tap

//! metodla
/*let a = +prompt("enter a number");
console.log(Math.sqrt(a));*/

//! metodsuz
/*let a = +prompt("enter a number");
for(i=2;i<=a;i++){
  if(a/i===i){
    console.log(`sqrt ${a} = ${i}`)
  }
}*/

//? Istifadeci 0 daxil edenedek edelerin cemini tapin.

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


//TODO ədədin tərsi 456--654

/*let a = +prompt("enter a number");
for(i=0;i<a;i++){
  let reminder = a%10;
console.log(reminder)
a = (a - reminder)/10;
}*/

//TODO Verilən ədəddən sonraki ilk sade ədədi tapin ( əlavə )
/* let a = prompt("enter a number");
 function nPrimeNum(a) {
   a++;
   while (true) {
     let counter = 0;
     for (let i = 0; i <= a; i++) {
       if (a % i == 0) {
         counter++;
       }
     }
     if (counter == 2) {
       return console.log(`${a}`);
     }
     a++;
   }
 }
 nPrimeNum(a);*/
