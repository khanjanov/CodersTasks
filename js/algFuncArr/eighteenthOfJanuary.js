//TODO Let’s try 5 array operations.
/*Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.*/

/*let styles = ["jazz", "blues"];
styles.push("rocknroll");
styles[Math.floor((styles.length - 1) / 2)] = "classics";
styles.shift();
styles.unshift("rap","reggae");
console.log(styles);*/

//TODO What is this code going to show?
/*let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length );*/
//! answer is --> 4

//TODO What is the result? Why?

/*let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2]();*/

//! result is --> 
/*function() {
  alert( this );
}*/