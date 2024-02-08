//! 30.01.24 online task
/* let parag = document.querySelector(".wrapper__parag")
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let a = ["red pill","blue pill"]
    for (el of a){
    parag.innerHTML = a[Math.floor(Math.random()*a.length)];
    parag.innerHTML === "blue pill" ? parag.style.background="blue" : parag.style.background="red"
}
}) */

//! 05.02.24 online - müəllimin nümunə olaraq işlədikləri

//TODO * Car Object *
// Create a Car object with properties like make, model, and year. Add methods to this object for start (logs 'Engine started'), and stop (logs 'Engine stopped').

/* const laptop = {
    model: "Acer",
    year: 2020,
    memory: "1TB",
    processor: "Core i5",
    power: function () {
      console.log(this.model + " is running");
    },
    shutdown: function () {
      console.log(this.model + this.memory + " shutdown");
    },
  };
  
  laptop.power();
  laptop.shutdown(); */

//TODO * Book Library *
// Create a Library object that holds an array of books. Each book will be an object with title, author, and isRead properties. Add methods to add a book to the library, remove a book, and log out all the unread books.

/* const library = {
    books: [],
    addBook: function (title, author) {
      this.books.push({ title, author });
    },
  };
  
  library.addBook("Little prince", "Test");
  library.addBook("1984", "Gorge Owel");
  
  console.log(library.books); */

//TODO * Shopping Cart *
// Create a ShoppingCart object that holds an array of items. Each item should be an object with name, price, and quantity. Add methods for adding an item, removing an item, and calculating the total price of items in the cart.

/* const shoppingCart = {
    carts: [],
    summary: 0,
    addCart: function (name, price, qty) {
      this.carts.push({ name, price, qty });
    },
    totalPrice: function () {
      this.carts.map((item) => {
        this.summary += item.price * item.qty;
      });
      console.log(this.summary);
    },
  };
  
  shoppingCart.addCart("adidas", 500, 3);
  shoppingCart.addCart("nike", 200, 2);
  shoppingCart.addCart("h&m", 100, 2);
  
  shoppingCart.totalPrice(); */

//! Bank Account *
// Create a BankAccount object with properties accountNumber, ownerName, and balance.
//Include methods for deposit (adds to the balance), withdraw (subtracts from the balance)
//and getBalance (returns the balance).
/* const BankAccount = {
    accountNumber:"",
    falan:Number
  };
BankAccount.accountNumber = "adsfdg"
BankAccount.falan=5
console.log(BankAccount) */

//! 06.02.24 online mentor task

/* const user = {
  name: "Elgun",
  surname: "Salmanov",
  age: 19,
  income: 1000,
  yearIncome: function () {
    newIncome = this.income;
    return newIncome * 12;
  },
  yearIncomeAvans: function (amount) {
    newIncome2 = this.income;
    falan = (newIncome2 += amount) * 12;
    return falan;
  },
  yearIncomeCompression: function () {
    console.log(`compr = ${(this.yearIncomeAvans(500)-this.yearIncome())}`)
  },
};

console.log(user.yearIncome());//12000
console.log(user.yearIncomeAvans(500));//1800
user.yearIncomeCompression();//6000 */

//! 08.01.24
//? +994 50 123 45 67 number check
// /^[+][(]?[0-9]{3}[)]?[-\s.]?[0-9]{2}[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-\s.]?[0-9]{2}$/im

//? check first letter is capital or not

function upper_case(str) {
  regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    console.log("String's first character is uppercase");
  } else {
    console.log("String's first character is not uppercase");
  }
}
upper_case("Abcd");
upper_case("abcd");
