//TODO Input ile daxil olunan 2 ededin cemi.

/*let a = +prompt("enter a number");
let b = +prompt("enter a number");
console.log(a+b);*/

//TODO Input ile daxil olunan musbet ədədlerin cemi.

/* //!version 1
let a = prompt("enter a numbers with spaces").split(" ");
let sumOfEven=0;
for (let i = 0; i < a.length; i++) {
   if(a[i]>0){
    sumOfEven+=+a[i]
   }else{
    console.log(`${a[i]} is a odd number`);
   }
}
console.log(`sum of even numbers ${sumOfEven}`)*/

/* //!version 2
let a = prompt("how many number will you enter?");
 let b = [];
 let sumOfEven = 0;
 for (let i = 0; i < a; i++) {
   b[i] = prompt(`enter number ${i + 1}`);
   if (b[i] > 0) {
    sumOfEven+=+b[i];
   }else{
    console.log(`${b[i]} is a odd number`)
   }
 }
 console.log(`sum of even numbers ${sumOfEven}`)*/

//TODO Input ile daxil olunan ədədin sıfır,müsbət yoxsa mənfi olduğunu tapın.

/*let a = +prompt("enter a number");
if (a>0){
    console.log("positive")
    }else if (a<0){
    console.log("negative")
    }else if(a===0){
    console.log("0 is neither a positive nor a negative number")
    }else{
    console.log("please enter only a number")
    }*/

//TODO Input ile daxil olunan 2 eded arasinda olan en boyuk ededi tapin 

/*let a = prompt(" enter numbers with spaces").split(" ").sort((a,b)=>(a-b));
console.log(`biggest number = ${a.at(-1)}`);*/

//TODO $$$ Input ile daxil olunan ədədin 5-e tam bolunub bolunmediyini tapın.

/*let a = +prompt("enter a number");
if(a%5===0 && a!=0){
    console.log("number is divisible by 5 without reminder")
    }else if(a===0){
    console.log("number is 0")
    }else {
    console.log("number isn't divisible by 5 without reminder")
    }*/

//TODO $$$ Input ile daxil olunan ədədin cüt yoxsa tək olduğunu tapın.

/*let a = +prompt("enter a number");
if(a%2===0 && a!=0){
    console.log("ədəd cütdür")
    }else if(a===0){
    console.log("0 nə cüt nə də təkdir")
    }else {
    console.log("ədəd təkdir")
    }*/

//TODO5 fenden umumi ortalama cixsin. Dersler input ile daxil edilsin ve 0dan 100-e qeder qiymet verilsin. Ededi ortalam tapilsin 5 derse gore. Eger ortalama 90+ ise A, 81-90 ise B, 71-80 ise C,c 61-70 ise D, 51-60 ise E, 50den asagi ise Kesilmisiniz ekrana cixsin.Istifade i menfi eded daxil ede bilmez

/*let a = +prompt("enter your score");
if(a>90 && a<=100){
    console.log("A")
    }else if(a>80 && a<=90){
    console.log("B")
    }else if(a>70 && a<=80){
    console.log("C")
    }else if(a>60 && a<=70){
    console.log("D")
    }else if(a>50 && a<=60){
    console.log("E")
    }else if(a<51 && a>0){
    console.log("kəsildiniz")
    }else if (a<0){
        alert("your score can't be negative")
    }
    else{
    console.log("score has to be 0 to 100")
    }*/

//TODODaxil edilmiş ədədin kvadratın hesaplayın 

/* //!version 1
 let a = +prompt("enter a number");
console.log(`${a**2}`)*/

/* //!version 2
let a = +prompt("enter a number");
console.log(`${Math.pow(a,2)}`)*/

//TODO Daxil edilmiş ədədin faktorialını hesablayın.

/*let a = +prompt("enter a number");
 function factorial() {
   let b = 1;
   if (a <= 1) return 1;
   if (a > 1) {
     for (let i = 1; i <= a; i++) {
       b *= i;
     }
   }
   console.log(`${b}`);
 }
 factorial();*/

//TODO Verilmiş siyahıdakı ən böyük və ən kiçik ədədləri tapın

/*let a = prompt("enter numbers with space").split(" ").sort((a, b) => a - b);
console.log(`${a.at(0)} is smallest, ${a.at(-1)} is biggest`)*/

//TODO kalkulyator

/*let falan= 1;
for(let a = 1; a <= 10; a++){
for (let i=1; i <= 10; i++) {
        console.log(`${falan}x${i}=${i*falan}`)
}
falan++;
}*/


//TODO nci fibo ədədi

/*let a = prompt("enter a number : ");
let b = 1;
let c = 1;
 for (let i = 2; i < a; i++) {
   let d = b;
   b = c;
   c = b + d;
   if (a - 1 == i) {
     console.log(`${c}`);
   }
 }*/
 


//! 23.01.24 online tasks

//TODO + mltpl, - sum

 /*let a = [6,-5,9,-12,265,45]

 let sum = 0;
 let mltpl = 1;
for(i=0; i<a.length;i++){
  if(a[i]>0){
    mltpl*=a[i]
  }else{
    sum+=a[i]
  }
}
console.log(`sum ${sum} mltpl ${mltpl}`)*/
 
//TODO biggest+smallest of array

//! metodla
/*let a = [5,26,85,89,2,6,3];
a = a.sort((a, b) => a - b)
console.log(`${a.at(-1)+a[0]}`)*/

//! metodsuz
/*let a = [5,26,85,89,2,6,3];
let biggest = 0
let smallest = a[0]

for (let i = 0; i < a.length; i++){
    if (a[i] > biggest) {
      biggest = a[i]
    }
    if (a[i] < smallest) {
      smallest = a[i]
    }
}
console.log(`sum of biggest (${biggest}) + smallest (${smallest}) = ${biggest+smallest}`)*/

//TODO a[i]+10
/* let a = [5,26,85,89,2,6,3];

for (let i = 0; i < a.length; i++){
    a[i]+=10;
}
console.log(a) */

//! 25.01.24 online tasks

//TODO 1. Maksimum Sayı Bulma

/* let a = [5,26,85,89,2,6,3];
let biggest = 0
let smallest = a[0]
const findBiggestAndSmallest = () => {
for (let i = 0; i < a.length; i++){
    if (a[i] > biggest) {
      biggest = a[i]
    }
    if (a[i] < smallest) {
      smallest = a[i]
    }
}
return biggest;
}
console.log(findBiggestAndSmallest(a)); */

//TODO 2. Çift ve Tek Sayı Sayısı

/* let a = +prompt("enter a number");
const evenOrOdd =()=>{
if(a%2===0 && a!=0){
    console.log("ədəd cütdür")
    }else if(a===0){
    console.log("0 nə cüt nə də təkdir")
    }else {
    console.log("ədəd təkdir")
    }
  }
  evenOrOdd(a) */


//TODO 4. String Ters Çevirme

/* let a = prompt("enter string");
const stringReversal = () =>{
  return a.split("").reverse().join("");
}
console.log(stringReversal(a)); */

//TODO 5. Fibonacci Serisi

/* let a = prompt("enter a number : ");
let b = 1;
let c = 1;

const nthFibo = () => {
 for (let i = 2; i < a; i++) {
   let d = b;
   b = c;
   c = b + d;
   if (a - 1 == i) {
     console.log(`${c}`);
   }
 }
}
nthFibo(a) */

//TODO 3. Faktöriyel Hesaplama

/* let a = +prompt("enter a number");
 function factorial() {
   let b = 1;
   if (a <= 1) return 1;
   if (a > 1) {
     for (let i = 1; i <= a; i++) {
       b *= i;
     }
   }
   console.log(`${b}`);
 }
 factorial(); */

 //TODO 1) İnput ilə daxil olunan ədədin sadə bölənlərini yazın

 /* let a = +prompt("enter a number");
 const findPrimeDivisors = () =>{
 for (let i = 0; i <= a; i++) {
   let counter = 0;
   if (a % i == 0) {
     for (let b = 1; b <= i; b++) {
       if (i % b == 0) {
         counter++;
       }
     }
   }
   if (counter == 2) console.log(`${i}`);
  }
}
findPrimeDivisors(a) */

 //TODO 2) İnput ilə daxil olunan ədədin bölənlərini yazın

 /* let a = prompt("enter a number");
 divisors = [];
 function findDivisors() {
   for (let i = 1; i <= a;i++) {
     if (a % i == 0) {
       divisors.push(i);
     } 
   }
   console.log(`divisors of number ${divisors}`);
 }
 findDivisors(a); */

 //TODO 3) İstifadəçi 0 daxil edənədək ədədlərin cəmini tapın
 //TODO 4) Daxil olunan ədədin rəqəmlərindən kiçiyi ilə böyünün cəmini yazın 
 //TODO 5) Daxil olunan ədədin rəqəmlərindən kiçiyi ilə böyünün hasilini yazın

/* let a = +prompt("enter a number");
let c = [];
let mltpl = 1;
let sum = 0;
const falan = () =>{
for(i=0;i<=a;i++){
  let reminder = a%10;
  a = (a - reminder)/10;
  c.push(reminder);

  let biggest = 0
  let smallest = c[0]
  
  for (let i = 0; i < c.length; i++){
      if (c[i] > biggest) {
        biggest = c[i]
      }
      if (c[i] < smallest) {
        smallest = c[i]
      }
  }
  mltpl = biggest*smallest;
  sum = biggest + smallest;
  }
  return {mltpl,sum};
}
  console.log(falan(a)); */


//? bax nth prime number
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
nPrimeNum(a); */

//? bax sade vuruq
/* let a = prompt("enter a number");
arr = [];
function sadeVuruq() {
  for (let i = 2; i <= a; ) {
    if (a % i == 0) {
      arr.push(i);
      a /= i;
    } else {
      i++;
    }
  }
  console.log(`sade vuruqlar ${arr}`);
}
sadeVuruq(); */

//! 26.01.24 online tasks

//TODO Task 1: Capitalize Each Word in a String

/* let a = "karim";
const cptlz =()=>  a.toUpperCase();
console.log(cptlz()) */

/* let a = prompt("enter text").split(" ");
function capitalizeWords() {
  for (var i = 0; i < a.length; i++) {
    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  }
  console.log(a.join(" "));
}
capitalizeWords(); */

//TODO Task 2: Find the Intersection of Two Arrays
/* Description: Write a function that finds the intersection of two arrays (the common elements between the two arrays). */

//TODO Task 3: Sort an Array of Strings by Length
/* Description: Write a function that takes an array of strings and returns the array sorted by the length of the strings. */

/* let arr = ["Pink Floyd","Arctic Monkeys","Tame Impala"];

const sortByLength = () => arr.sort((a,b)=>a.length-b.length);
console.log(sortByLength()) */

//TODO ancaq rəqəmlər sıralanmış halda
/* let a = [1, "fghj", 56, "ytgu5", true, false, null,856,125,3,"ftvgbhn"];
let b = [];
function onlyNums() {
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number") {
      b.push(a[i])
    }
  }
  return b.sort((a,b)=>a-b)
}
console.log(onlyNums()); */

//TODO array element replace, use of splice

/* function replaceArrayElement() {
  const a = ["bir","iki","beş","dörd"];
  a.splice(2, 1, "üç");

  console.log(a);
}
replaceArrayElement(); */

//? regex use
/* let text = "xczcz0354651asqe9qWw";
text = text.replace(/[a-z]/gi, "")
console.log(text); */

