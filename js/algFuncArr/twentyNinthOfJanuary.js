//TODO Check if a word is an anagram of another.

/* let a = "mona"
let b = "amon"

const isItAnagram = () => {
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
    if(a.length!==b.length || a!==b){
        console.log("anagram deyil")
    }else{
        console.log("anagram")
    }
}
isItAnagram();// time complexity O(n log n), space complexity O(n) */ //!not good enough

//TODO Return the longest word in a sentence.

/* let a = "what goes around comes around";
const longestWord = () => a.sort((a,b)=>a.length-b.length).at(-1);
console.log(longestWord());// time complexity O(n log n), space complexity O(1)  */ //!not good enough

//TODO Convert a string to snake case.

/* let a = "kimberly"
const toSnakeCase = () => a.split("").join("_");
console.log(toSnakeCase());// time complexity O(n), space complexity O(n) */ //!okay

//TODO Return an array’s unique values.

/* let a = [8,21,55,8,34,21,5,8,13,5,3]
const uniques = () => {
    let b = [];
    a.forEach(el => !b.includes(el) && b.push(el));
    return b.sort((a,b)=>a-b);
}
console.log(uniques(a));// time complexity O(n^2), space complexity O(1) */ //!bad

//TODO Check if all items in an array are identical.

/* let a = [5,5,5,5,5]

const isIdentical = () => {
    let sum=0;
    for(i=0;i<a.length;i++) sum += a[i];
    sum/a.length === a[0] ? console.log("identical") : console.log("non identical");
}
isIdentical();// time complexity O(n), space complexity O(1) */ //!okay

//! [4,2,6] ehtimalında yanlış cavab qaytaracağı gəldi ağlıma ona görə kodu aşağıdakına dəyişdim

/* let a = [5,5,5,5,5]
let counter = 0;
const isIdentical = () => {
    let sum=0;
    for(el of a) sum += el;
    for(el of a) sum/a.length===el && counter++;
    return counter===a.length ? console.log("identical") : console.log("non identical")
}
isIdentical(); // time complexity O(n), space complexity O(1) */ //!okay

//TODO Return the middle character(s) of a string.

/* let a = "masa";//you can change it to --> masha

const middleCharacter = () => {
    a = a.split("");
    if(a.length%2!==0){
    console.log(a[(a.length-1)/2])
    } else{
        console.log(`${a[(a.length/2)-1]}${a[a.length/2]}`)
    }
}
middleCharacter()// time complexity O(1), space complexity O(1) */ //!good

//TODO Remove falsey values from an array.

/* let a = [0,"asdf", 5, 13, undefined, false,"5", null,""];

const removeFalsey = () => {
    return a.filter(Boolean) //falsey valuelar üçün ideal olduğunu öyrəndim ya da bunu istifadə et return a.filter((el)=> el)
}
console.log(removeFalsey()) // time complexity O(n), space complexity O(n) */ //!okay

//TODO Find the shortest word in a string.

/* let a = "same old mistakes";
const shortestWord = () => a.split(" ").sort((a,b)=>b.length-a.length).at(-1);
console.log(shortestWord());// time complexity O(n log n), space complexity O(n) */ //!not good enough

//? Return the most frequent number in an array.



//TODO Return the power of a number without using Math.pow().

/* let a = [2,5,3,8,9,25]

const powerOfNumbers = () => {
    for(el of a) el**2;
    return a;
}
console.log(powerOfNumbers(a));// time complexity O(n), space complexity O(1) */ //!okay

