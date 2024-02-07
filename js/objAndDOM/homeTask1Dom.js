//TODO 1.Object.keys() - Listing Properties:
//*•	Task: Use the Object.keys() method to list all the property names (keys) of a person object.

/* let a = { name: 'John', age: 30, occupation: 'Engineer' };
console.log(Object.keys(a)); */

//TODO 2.Object.values() - Listing Values:
//*•	Task: Use the Object.values() method to list all the values of a product object.

/* let a = { productId: 'p123', name: 'Laptop', price: 899 };
console.log(Object.values(a)); */

//TODO 3.Object.entries() - Converting to Array:
//*•	Task: Convert a book object into an array of [key, value] pairs using Object.entries().

/* let a = { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 };
console.log(Object.entries(a)); */

//TODO 4.Object.freeze() - Preventing Modifications:
//*•	Task: Use Object.freeze() to prevent any changes to a settings object and then attempt to add, update, and delete properties.

/* let a = { theme: 'dark', notifications: true };
Object.freeze(a);
a.theme = "teal";
console.log(a.theme);

let b=[a]
function changeProperty() { 
    b = b.map(function (obj) {
        obj['falan'] = obj['theme']; 
        delete obj['theme']; 
        return obj;
    });
    console.log(a);
}
 
changeProperty(); */

//TODO 5.Object.seal() - Allowing Only Value Modifications:
//*•	Task: Use Object.seal() on a userProfile object, then try to add a new property, delete an existing property,and modify an existing property.

/* let userProfile = { username: 'user123', email: 'user123@example.com' };
Object.seal(userProfile);
userProfile.age = 22;
console.log(userProfile);
delete userProfile.email;
userProfile.email="asdfghjk"
console.log(userProfile);

let b=[userProfile];
function changeProperty() { 
    b = b.map(function (obj) {
        obj['falan'] = obj['email']; 
        delete obj['email']; 
        return obj;
    });
    console.log(userProfile);
}
 
changeProperty(); */

/* obyektlərin başına oyun açdıqdan sonra başa düşdüm ki,
deməli freeze() bütün növ dəyişiklikləri tam bloklayır - readonly, seal() isə valuenu dəyişməyə imkan tanıyır
sonra sadəcə metodlar üçün verilən descriptionları oxusaydım,
bu qədər əziyyətə ehtiyac qalmayacağını gördüm :D //! şərtə diqqət et, Kərim */

//TODO 6.Object.assign() - Copying Properties:
//*•	Task: Use Object.assign() to copy all properties from sourceObj to targetObj.

/* let sourceObj = { b: 2, c: 3 };
let targetObj = { a: 1 };
Object.assign(targetObj,sourceObj);
console.log(targetObj); */

//TODO 7.Object.defineProperty() - Defining a New Property:
//*•	Task: Use Object.defineProperty() to add a new read-only property version to an appConfig object.

/* let a = { name: 'MyApp', theme: 'light' };
Object.defineProperty(a,"falan",{value:13, writable:false});
a.falan = 358;
console.log(a); */

//TODO 8.Object.getOwnPropertyDescriptor() - Retrieving Property Descriptors:
//*•	Task: Retrieve and log the descriptor of the property age from a personDetails object.

/* let a = { name: 'Alice', age: 25 };
console.log(Object.getOwnPropertyDescriptor(a,"age")); */


//TODO 9.Object.getOwnPropertyNames() - Listing All Properties:
//*•	Task: Use Object.getOwnPropertyNames() to list all properties (including non-enumerable ones) of a vehicle object.

/* let a = { make: 'Toyota', model: 'Camry' };
console.log(Object.getOwnPropertyNames(a)); */

//TODO 10.Object.is() - Comparing Two Values:
//*•	Task: Compare two objects for equality using Object.is() and then compare them using === to understand the difference.

/* let obj1 = { key: 'value' };
let obj2 = { key: 'value' };
console.log(Object.is(obj1,obj2));
obj1===obj2 ? console.log("equal") : console.log("not equal"); */

//TODO 1.Create a Simple Object:
//*•	Task: Define an object named book that contains the following properties: title, author, and yearPublished.

/* let book = {tittle : "Inferno", author : "Dan Brown", yearPublished : 2013};
console.log(book); */

//TODO 2.Accessing Properties:
//*•Task: Given an object representing a car with properties make, model, and year, write code to access each property 
//* individually and print them to the console.

/* let car = { make: 'Toyota', model: 'Corolla', year: 2005 };
let a = [car];
let printAllProp = () => {
    for(el of a){
        console.log(Object.keys(el))
    }
}
printAllProp(); */

//TODO 3.Adding Properties:
//*•Task: Start with an object representing a person with properties firstName and lastName. 
//* Add two more properties to it: age and email, then print the updated object.

/* let a = { firstName: 'John', lastName: 'Doe' };
Object.defineProperties(a,{age:{value:23}, email:{value:"asdfghjk"}});
console.log(a); */

//TODO 4.Removing Properties:
//*•Task: Create an object representing a gadget with properties name, price, and category. 
//*Remove the category property from the object, and then print the updated object.

/* let a = { name: 'Smartphone', price: 999, category: 'Electronics' };
delete a.category;
console.log(a); */

//TODO 5.Nested Objects:
//*•Task: Define an object representing a student. Inside this object, include another object named address 
//*which contains properties street, city, and zipCode. Print the student’s city by accessing it through the nested address object.

/* let a = { name: 'Emily', grade: 'A', address: { street: '123 Main St', city: 'Springfield', zipCode: '65804' },
get city(){return this.address.city}
};
console.log(a.address.city);
console.log(a.city); */

//TODO Checking for Property Existence:
//*•	Task: Create an object representing a library book with properties title, author, and ISBN. 
//*Write a function that checks whether the property ISBN exists in the object and prints a message confirming its existence or absence.

//! method 1

/* let a = { title: '1984', author: 'George Orwell' };
let counter = 0;
let b =()=>{
    let c = Object.keys(a);
    c.filter(el => {
        el === "ISBN" && counter++;
    });
    counter > 0 ? console.log("exists") : console.log("doesn't exists")
};
b(); */

//! method 2

/* let a = { title: '1984', author: 'George Orwell' };
let b =()=>{
    let c = Object.keys(a);
    for(el of c) {
        if (el === "ISBN") {
            console.log("exists");
        }else{
            console.log("doesn't exists");
        }
        break;
    };
};
b(); */

//TODO Merging Objects:
//*•Task: Given two objects representing user details, merge them into a single object. 
//*The first object has properties firstName and lastName, and the second object has properties email and username. 
//*Use the spread operator or Object.assign() to perform the merge.

/* let a = { firstName: 'John', lastName: 'Doe' };
let b = { email: 'johndoe@example.com', username: 'johndoe' };
console.log(Object.assign(a,b)); */