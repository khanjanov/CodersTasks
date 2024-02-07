//! mentor dərsi üçün verilən tapşırıqlar

//TODO 1. Temperature Converter:
//* Create an object that can convert temperatures between Celsius, Fahrenheit, and Kelvin.

/* Celcius = (Fahrenheit - 32) / 1.8
Celcius = Kelvin - 273.15
Fahrenheit = (Celcius * 1.8) + 32
Fahrenheit = ((Kelvin - 273.15) * 1.8) + 32
Kelvin = Celcius + 273.15
Kelvin = ((Fahrenheit - 32) / 1.8) + 273.15 */

/* const temps = {
    celsius : Number,
    fahrenheit : Number,
    kelvin : Number,
    CelsiusToFahrenheit : function(a){
        this.celsius = a;
        console.log(a * 1.8 + 32);
    },
    FahrenheitToCelsius : function(a){
        this.fahrenheit = a;
        console.log((a - 32) / 1.8);
    },
    CelsiusToKelvin : function(a){
        this.celsius = a;
        console.log(a + 273.15);
    },
    KelvinToCelsius : function(a){
        this.celsius = a;
        console.log(a - 273.15);
    },
    FahrenheitToKelvin : function(a){
        this.fahrenheit = a;
        console.log(((a - 32) / 1.8) + 273.15);
    },
    KelvinToFahrenheit : function(a){
        this.kelvin = a;
        console.log(((a - 273.15) * 1.8) + 32);
    },
};

temps.CelsiusToFahrenheit(0);
temps.FahrenheitToCelsius(32);
temps.CelsiusToKelvin(0);
temps.KelvinToCelsius(273.15);
temps.FahrenheitToKelvin(32);
temps.KelvinToFahrenheit(273.15); */


//TODO 2. Password Validator:
//* Create an object that validates passwords based on certain criteria (length, contains numbers, contains special characters, etc.)

//! ilk ağlıma gələn öz versiyam

/* const validatePassword = {
    mustHaveNums : ["1","2","3","4","5","6","7","8","9","0"],
    mustHaveSymbols : ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'],
    mustHaveCapitalLetters : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",],
    mustHaveLowercaseLetters : ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'],   
    
    validator : function (a) {
        let b = Object.values(validatePassword);
        let c = b.pop();
        c=b.flat();
        let counter = 0;
        for(i=0; i<=c.length;i++){
            if(a.includes(c[i])){
                counter++;
            }
        }
        return (counter===a.length && counter>=8) ? console.log(`%cPassword is valid`,`text-align:center;border-radius:8px;font-weight:bold; color:#3A5311; background:yellow;padding:4px`) : console.log(`%cPassword must contain numbers, lowercase and uppercase letters, symbols, be 8 in length and no repeating.`, `text-align:center;border-radius:8px;font-weight:bold; color:#022D36; background:#0492C2`)

    }
};

validatePassword.validator("1@aA2358"); */

//! bir az metodları araşdırıb, internetdən yardım aldıqdan sonra, rəqəm təkrarını da dəstəkləyən versiya 

/* const validatePassword = {
    mustHaveNums: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    mustHaveSymbols: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'],
    mustHaveCapitalLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    mustHaveLowercaseLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],

    validator: function (a) {
        let checkNum = this.mustHaveNums.some(num => a.includes(num));
        let checkSym = this.mustHaveSymbols.some(sym => a.includes(sym));
        let checkCapitalLetters = this.mustHaveCapitalLetters.some(capLet => a.includes(capLet));
        let checkLowercaseLetters = this.mustHaveLowercaseLetters.some(lowLet => a.includes(lowLet));

(checkNum && checkSym && checkCapitalLetters && checkLowercaseLetters && a.length >= 8) ? console.log(`%cPassword is valid`,`text-align:center;border-radius:8px;font-weight:bold; color:#3A5311; background:yellow;padding:4px`) : console.log(`%cPassword must contain numbers, lowercase and uppercase letters, symbols and be 8 in length.`, `text-align:center;border-radius:8px;font-weight:bold; color:#022D36; background:#0492C2`);
    }
};

validatePassword.validator("1@aA2358"); */

//! HOME TASKS

//TODO 1. Rectangle Object:
//*Create an object that represents a rectangle and can calculate its perimeter and area.

/* let a = {
    nums : [],
    caltulate : function(a,b){
        this.nums.push(a,b);
        perimeter  = 2*(a+b);
        area = a*b;
        console.log(`perimeter = ${perimeter}, area = ${area}`)
    }
};
a.caltulate(2,5); */

//TODO 2. Simple Todo Manager:
//*Create an object to manage a to-do list. It should be able to add a task, complete a task, and display all tasks.

/* let a = {
    tasks : [],
    add : function (a){
        this.tasks.push(a);
    },
    complete : function (a){
        this.tasks.splice(a-1, 1)
    },
    display : function (a){
        console.log(this.tasks)
    },
};

a.add("falan");
a.add("filan");
a.add("asdfgh");
a.complete(3);
a.display(); */

//TODO 3. Basic Counter Object:
//*Create an object that represents a counter and can increase, decrease, and reset the count.

//! scss və htmli commentdən çıxararaq, nəticəni görə bilərsiniz, mənfiyə düşməylə bağlı heçnə deyilmədiyi üçün decreasedə nəzərə almadım

/* let parag = document.querySelector(".wrapper__parag");
let increaseBtn = document.querySelector("#increaseBtn");
let decreaseBtn = document.querySelector("#decreaseBtn");
let resetBtn = document.querySelector("#resetBtn");

let a = {
    counter : 0,
    increase : function () {
        increaseBtn.addEventListener("click", () => {
            this.counter++;
            parag.innerHTML = this.counter;
        })
    },
    decrease : function () {
        decreaseBtn.addEventListener("click", () => {
            this.counter--;
            parag.innerHTML = this.counter;
        })
    },
    reset : function () {
        resetBtn.addEventListener("click", () => {
            this.counter=0;
            parag.innerHTML = this.counter;
        })
    }
};
a.increase();
a.decrease();
a.reset(); */