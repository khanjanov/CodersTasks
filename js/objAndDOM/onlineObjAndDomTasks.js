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

/* function upper_case(str) {
  regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    console.log("String's first character is uppercase");
  } else {
    console.log("String's first character is not uppercase");
  }
}
upper_case("Abcd");
upper_case("abcd"); */

//! 09.01.24 online mentor tasks

//TODO create list with js

/* function createList() {
  let fruits = ["apple", "peach", "pineapple", "strawberry"];
  let b = document.querySelector("body");
  let ul = document.createElement("ul");
  for (i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.style.color = "teal";
    li.style.listStyleType = "circle";
    li.append(`${fruits[i]}`);
    ul.appendChild(li);
    b.appendChild(ul);
  }
}
createList(); */

//TODO CroCoder logo

/* function createCro() {
  let b = document.querySelector("body");
  let heading1 = document.createElement("h1");
  let p = document.createElement("img");
  heading1.innerText = "CroCoder logo :";
  p.src = "assets/pics/icon.png";
  b.append(heading1, p);
}
createCro(); */

//TODO create reversed list
/* function createReversedList() {
  let fruits = ["apple", "peach", "pineapple", "strawberry"];
  let b = document.querySelector("body");
  let ul = document.createElement("ul");
  for (i = fruits.length - 1; i >= 0; i--) {
    let li = document.createElement("li");
    li.style.color = "teal";
    li.style.listStyleType = "circle";
    li.append(`${fruits[i]}`);
    ul.appendChild(li);
    b.appendChild(ul);
  }
}
createReversedList(); */

//! 14.02.24 online mentor taks

//TODO zoominout

/* let b = document.querySelector("body");
b.setAttribute(
  "style",
  "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:50px;"
);

function zoomInOut() {
  let a = document.createElement("div");
  a.setAttribute(
    "style",
    "width:40px;height:40px;border-radius: 4px;background-color:skyblue;"
  );
  b.append(a);
  a.addEventListener("mouseenter", () => {
    a.style.transform = "scale(1.2)";
    a.style.transition = "linear 0.5s";
  });
  a.addEventListener("mouseout", () => {
    a.style.transform = "scale(1)";
  });
}
zoomInOut();

//TODO change color by clicking

function changeColor() {
  let a = document.createElement("div");
  a.setAttribute(
    "style",
    "width:40px;height:40px;border-radius: 4px;background-color:skyblue;margin-top:20px;"
  );
  b.append(a);
  a.addEventListener("click", () => {
    a.style.backgroundColor = "yellow";
    setTimeout(() => {
      a.style.backgroundColor = "skyblue";
      a.style.transition = "linear 0.5s";
    }, 1200);
  });
}
setTimeout(changeColor(), 1000);

//TODO move element left or right with keyboard arrows

function move() {
  let a = document.createElement("div");
  a.setAttribute(
    "style",
    "width:40px;height:40px;border-radius: 4px;background-color:skyblue; margin-top: 20px"
  );
  b.append(a);
  let c = 0;
  document.addEventListener("keydown", (e) => {
    let d = 100;
    if (e.key === "ArrowRight") {
      c += d;
    }
    if (e.key === "ArrowLeft") {
      c -= d;
    }
    a.style.transform = `translateX(${c}%)`;
  });
}
move();
 */

//! 15.02.24 online teacher task

//TODO create simple form

/* let b = document.querySelector("body");

style(b,"style","display:flex;flex-direction:column;gap:12px;justify-content:center;align-items:center;background-color:cyan;");
let form = createElement("form");
form.innerHTML = `<form >
<label for="firstName">First name:</label><br>
<input type="text" id="firstName" name="firstName" placeholder="type here..." required><br><br>
<label for="lastName">Last name:</label><br>
<input type="text" id="lastName" name="lastName" placeholder="type here..." required>
<br><br>
<label for="genders">Gender:</label>
<select id="genders" name="genders">
  <option value="men">Men</option>
  <option value="women">Women</option>
</select>
<br><br>
<label for="paymentMethod">Choose payment method</label><br>
<input type="radio" id="cash" name="paymentMethod" value="cash">
<label for="cash">cash</label><br>
<input type="radio" id="card" name="paymentMethod" value="card">
<label for="card">card</label>
<br><br>
<label for="shippingMethod">Choose shipping method</label><br>
<input type="radio" id="delivery" name="shippingMethod" value="delivery">
<label for="delivery">delivery</label><br>
<input type="radio" id="inStore" name="shippingMethod" value="inStore">
<label for="inStore">in store</label>
</form>`;
let submitBtn = createElement("button");
submitBtn.innerHTML = `<button type="submit">Submit</button>`;
b.append(form, submitBtn);

submitBtn.addEventListener("click", submitForm);

let client = {
  fullname: String,
  gender: String,
  payment: String,
  shipping: String,
};

function submitForm() {
  client.fullname = `${firstName.value} ${lastName.value}`;
  client.gender = genders.value;
  if (cash.checked) {
    client.payment = cash.value;
  } else {
    client.payment = card.value;
  }
  if (delivery.checked) {
    function getAdress() {
      let adress = prompt("enter adress");
      client.shipping = `send to ${adress}`;
    }
    getAdress();
  } else {
    client.shipping = inStore.value;
  }

  createClientCard(client);
}

function createClientCard(client) {
  let keys = Object.keys(client);
  let values = Object.values(client);
  let list = createElement("ul");
  style(list, "style", "list-style-type:none;margin:0;padding:0;");
  for (i = 0; i < keys.length; i++) {
    let listItem = createElement("li");
    listItem.textContent = `${keys[i]} : ${values[i]}`;
    list.append(listItem);
  }
  let heading2 = createElement("h2");
  heading2.innerText = `Order details`;
  b.append(heading2, list);
}

function style(a, b, c) {
  return a.setAttribute(`${b}`, ` ${c}`);
}
function createElement(a) {
  return document.createElement(`${a}`);
}

style(document.querySelector("#lastName"), "style", "border-radius:8px;");
style(document.querySelector("#firstName"), "style", "border-radius:8px;");
style(document.querySelector("#genders"), "style", "border-radius:8px;"); */

//! 19.02.24 mentor online task

//TODO inputumuz olacaq ad, soyad, sirket adi, aldiginiz maas, 2 radio button, 1-i front end, backend, 2ci ise remote,ofis.

/* let b = document.querySelector("body");

style(
  b,
  "style",
  "display:flex;flex-direction:column;gap:12px;justify-content:center;align-items:center;background-color:cyan;"
);
let form = createElement("form");
form.innerHTML = `
<form >
<label for="firstName">First name:</label><br>
<input type="text" id="firstName" name="firstName" placeholder="type here..."><br><br>
<label for="lastName">Last name:</label><br>
<input type="text" id="lastName" name="lastName" placeholder="type here...">
<br><br>
<label for="company">Company name:</label><br>
<input type="text" id="company" name="company" placeholder="type here...">
<br><br>
<label for="salary">Salary</label><br>
<input type="number" id="salary" name="salary" placeholder="type here...">
<br><br>
<label for="profession">Choose profession</label><br>
<input type="radio" id="frontEnd" name="profession" value="frontEnd">
<label for="frontEnd">frontEnd</label><br>
<input type="radio" id="backEnd" name="profession" value="backEnd">
<label for="backEnd">backEnd</label>
<br><br>
<label for="workType">Choose work type</label><br>
<input type="radio" id="remote" name="workType" value="remote">
<label for="remote">remote</label><br>
<input type="radio" id="office" name="workType" value="office">
<label for="office">office</label>
<br><br>
</form>`;
let submitBtn = createElement("button");
submitBtn.innerHTML = `<button type="submit">Submit</button>`;
b.append(form, submitBtn);

submitBtn.addEventListener("click", submitForm);

let employee = {
  fullname: String,
  company: String,
  salary: Number,
  profession: String,
  workType: String,
};

function submitForm() {
  employee.fullname = `${firstName.value} ${lastName.value}`;
  employee.company = company.value;
  employee.salary = salary.value;
  if (frontEnd.checked) {
    employee.profession = frontEnd.value;
  } else {
    employee.profession = backEnd.value;
  }
  if (remote.checked) {
    employee.workType = remote.value;
  } else {
    employee.workType = office.value;
  }

  createEmployeeCard(employee);
}

function createEmployeeCard(employee) {
  let keys = Object.keys(employee);
  let values = Object.values(employee);
  let list = createElement("ul");
  style(list, "style", "list-style-type:none;margin:0;padding:0;");
  for (i = 0; i < keys.length; i++) {
    let listItem = createElement("li");
    listItem.textContent = `${keys[i]} : ${values[i]}`;
    list.append(listItem);
  }
  let heading2 = createElement("h2");
  heading2.innerText = `Employee details`;
  b.append(heading2, list);
}

function style(a, b, c) {
  return a.setAttribute(`${b}`, ` ${c}`);
}
function createElement(a) {
  return document.createElement(`${a}`);
} */