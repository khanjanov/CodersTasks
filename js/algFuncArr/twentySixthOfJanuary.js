//TODO Arraylerin hamisin cut olub olmadigina baxin

/* let a = [24,38,18,56,68,96,432];

let counter = 0;
const isAllEven = () =>{
    for(i=0; i<a.length;i++){
        if(a[i]%2===0){
            counter++;
        }
    }
    return counter===a.length ?  `hamısı cütdür` : `hamısı cüt deyil`;
}
console.log(isAllEven(a));//expected output hamısı cütdür */

//TODO Array icerisindeki tek ededlerin cemini tapin

/* let a = [24,37,18,56,61,96,43];

let sum = 0;
const sumOfOdds = () =>{
    for(i=0; i<a.length;i++){
        if(a[i]%2!==0){
            sum+=a[i];
        }
    }
    return sum;
}
console.log(sumOfOdds(a)); //expected output 141 */

//TODO Array icerisinde nece element oldugunu tapin

//! özümüzü əziyyətə salmaq

/* let a = [24,37,18,56,61,96,43];

let counter = 0;
const countOfElements = () =>{
    for(i=0; i<a.length;i++){
        counter++
    }
    return counter;
}
console.log(countOfElements(a));//expected output 7 */

//! özümüzü əziyyətə salmamaq :D

/* let a = [24,37,18,56,61,96,43];

const countOfElements = () => a.length;
console.log(countOfElements(a));//expected output 7 */

//TODO Arraydaki ededlerin ededi ortasini tapin

/*  let a = [1,2,3,6];
let sum = 0;
const averageOfElements = () =>{
    for(i=0; i<a.length;i++){
        sum+=a[i];
    }
    return sum/a.length;
}
console.log(averageOfElements(a)); //expected output 3 */

//TODO Array icine soz a herfi ile baslayani tapin. ( home work )

//! method 1
/* let a = ["testing","attention","please"];
const findWordsStartsWithA = () =>{
    for(i=0; i<a.length;i++){
        a[i].split("");
        if(a[i][0]==="a" || a[i][0]==="A" ){
            return a[i];
        }
    }
}
console.log(findWordsStartsWithA(a)); //expected output attention */

//! method 2
/* let a = ["testing","attention","please"];
let b = [];
const findWordsStartsWithA = () =>{
    for(i=0; i<a.length;i++){
       a[i].startsWith("a") === true ?  b.push(a[i]) : null
    }
    return b;
}
console.log(findWordsStartsWithA(a)); //expected output attention */

//TODO Arrayda m herfi ile biten sozleri cixardin. 

//! method 1
/* let a = ["sie","leben","hinterm","sonnenschein"];
const findWordStartsWithA = () =>{
    for(i=0; i<a.length;i++){
        a[i].split("");
        if(a[i][a[i].length-1]==="m")  return a[i];//*ya da (a[i].at(-1)==="m")
    }
}
console.log(findWordStartsWithA(a)); //expected output hinterm */

//! method 2
/* let a = ["sie","leben","hinterm","sonnenschein"];
let b = [];
const findWordEndsWithM = () =>{
    for(i=0; i<a.length;i++){
        a[i].endsWith("m") === true ?  b.push(a[i]) : null
     }
     return b;
}
console.log(findWordEndsWithM(a)); //expected output hinterm */

//TODO Array icerisinde 0-9 kimi reqemler var, hansisa 1 reqem yoxdur onu tapin

/* let a = [0,5,3,6,8,9,4,2,7].sort((a,b)=>a-b);
let findAbsent = () => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] != i) return `${i}`;
  }
}
console.log(findAbsent());//expected output 1 */

//TODO Arrayda sozde butun herfleri boyuk olub olmadigina baxin

/* let a = ["can","YOU","help","ME","occupy","my","brain"];
let findAbsent = () => {
  for (let i = 0; i < a.length; i++) {
    a[i].toUpperCase() === a[i] ? console.log(`${a[i]} şərtə uyur`) : console.log(`${a[i]} şərtə uymur`)
  }
}
findAbsent(a); */

//TODO Arrayda guzgu ededleri tapsin

/* let a = prompt("enter a number");
let b = a;
let reversed = "";
const findPolindrome = () => {
for (let i = 0; i < a; i++) {
  let reminder = a % 10;
  a = (a - reminder) / 10;
  reversed += reminder;
}
let c = reversed

if(c  === b){
console.log("polindrome")
}else{
console.log("polindrome deyil")
}
}
findPolindrome(a) */

//TODO Arrayin icindeki ededlerin cemi cutdurse --true, tekdirse-- false return etsin

/* let a = [1,2,3,4];
let sum = 0;
const averageOfElements = () =>{
    for(i=0; i<a.length;i++){
        sum+=a[i];
    }
    return sum % 2 === 0 ? true : false;
}
console.log(averageOfElements(a));//expected output true */