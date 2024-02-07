//! 16.01.24

//TODO Input ile 5 eded daxil edin. 7'ye beraber olanların sayini tapib ekrana yazdırin

/*let a = 5;
 let b = [];
 let counter = 0;
 for (let i = 0; i < a; i++) {
   b[i] = +prompt(`enter number ${i + 1}`);
   if (b[i] === 7) {
    counter++;
   }else{
    console.log(`${b[i]} isn't equal to 7`)
   }
 }
 console.log(`count of numbers that equal to 7 : ${counter}`)*/

//TODO Input ile daxil olunan ədədin sade bolenlerini cixartsin

/* let a = +prompt("enter a number");
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
  }*/

//TODO Daxil etdiyiniz ededde nece 0-var

/*let a = prompt("enter a number").split("");
let count = 0;
for (let i = 0; i <= a.length;i++) {
  if (+a[0] === 0) {
    alert("ədəd 0 ilə başlaya bilməz")
    break;
  } else if (+a[i]===0){
    count++;
  } 
}

console.log(`ədəddə ${count} ədəd 0 var`)*/

//TODO 3 reqemli eded daxil edirik ededin evveline ve sonuna string ile 3 elave edirik

/*let a = +prompt("enter three digits number");
console.log(`3${a}3`);*/

//TODO Input ile daxil olunan ədədin bölənlərini tapın.
//TODO Input ile daxil olunan ədədin bölənlərinin sayını tapın.
//TODO Input ile daxil olunan ədədin bölənlərinin cəmini tapın.
//TODO Input ile daxil olunan ədədin bölənlərinin hasilini tapın.

/*let a = prompt("enter a number");
divisors = [];
count = 0;
sum = 0;
multp = 1;
function allConditions() {
  for (let i = 1; i <= a;i++) {
    if (a % i == 0) {
      divisors.push(i);
      count++;
      sum += i;
      multp *= i;
      
    } 
  }
  console.log(`divisors of number ${divisors}`);
  console.log(`count of divisors ${count}`);
  console.log(`sum divisors ${sum}`);
  console.log(`multiplication of divisors ${multp}`);
}
allConditions();*/

//TODO Input ile daxil olunan ədədin neçə rəqəmli olduğunu tapın.

/*let a = prompt("enter a number").split("");
console.log(`${a.length}`);*/

//TODO Input ile daxil olunan ədədin rəqəmlərinin cəmini tapın

/*let a = prompt("enter a number").split("");
console.log(a)
let sum = 0;
for(i=0;i < a.length;i++){
sum+=+a[i]
}
console.log(sum);*/

//TODO Input ile daxil olunan ədədin rəqəmlərinin hasilini tapın.

/*let a = prompt("enter a number").split("");
console.log(a)
let mltply = 1;
for(i=0;i < a.length;i++){
  mltply*=+a[i]
}
console.log(mltply);*/

//TODO Input ile daxil olunan ədədin rəqəmlərindən ən böyüyünü tapın.
/*let a = prompt("enter a number").split("").sort(function (a, b) { return a - b; }).at(-1);
console.log(`${a}`);*/
