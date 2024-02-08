//! 08.01.24
//TODO promise və async await'i anlamaq ( https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/ )

// hər dəfə yenidən yazmamaq və ya kopyalamamaq üçün stocks objectini commentə alma
// commentləri rəngli görmək üçün extensions hissəsindən "better comments" yüklə ( yükləməmisənsə )

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
//! sətir 52yə kimi commentdən çıxar
/* 
// 1st Function
let order = (fruit_name, call_production) => {
  setTimeout(function () {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);

    // Order placed. Call production to start
    call_production();
  }, 2000);
};

// 2nd Function
let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
        setTimeout(() => {
          console.log("start the machine");
          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log("serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};
// yuxarıdakı, dərsdə deyilən calback hell'dir, burada addım sayı azdır, Walk of famedəki adları müəyyən periodla yazdırdığımızı düşün (2772)
// Trigger 👇
order(0, production); */

//! promise olayı burdan başlayır, əgər əvvəli başa düşmüsənsə ( sətir 112yə qədər commentdən çıxar ), davam et, yoxsa yenidən oxu

/* let is_shop_open = true; // false'a dəyiş deyilən hissədə false'a dəyişilməli ( catch() məsələsini anlamaq üçün, indilik true qalsın )

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        // work is 👇 getting done here
        resolve(work());

        // Setting 👇 time here for 1 work
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

// step 1
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  // step 2
  .then(() => {
    return order(0, () => console.log("production has started"));
  })

  // step 3
  .then(() => {
    return order(2000, () => console.log("Fruit has been chopped"));
  })

  // step 4
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
    );
  })

  // step 5
  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })

  // step 6
  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on ${stocks.holder[1]}`)
    );
  })

  // step 7
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
  })

  // Step 8
  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"));
  }); */
//! catch() və finally() əlavə olunacaq hissə aşağıda ( 114dən 121ə kimi commentdən çıxar )
//* burada əvvəldə olan ";" silinməli (əgər copy edəndə onunla birgə kopyalamısansa), then ilə catch arasında əlavə heçnə olmamalı
/* .catch(() => {
    console.log("Customer left");
  }) 
  //* yenə eyni qaydada burada əvvəldə olan ";" silinməli (əgər copy edəndə onunla birgə kopyalamısansa), yenə arada əlavə heçnə olmamalı
  .finally(() => {
    console.log("end of day");
  }); */

//! async await olayı

//* 👇 the magical keyword

/* async function order() {
  // Write code here
} */

//! try catch hissəsini oxu, davam et

//* aşağıdakı sadəcə async await'in sintaksisidir, commentdə qalsın ( 134 - 145 )

/* async function kitchen() {
  try {
    // Let's create a fake problem
    await abc;
  } catch (error) {
    console.log("abc does not exist", error);
  } finally {
    console.log("Runs code anyways");
  }
}

kitchen(); // run the code */

//! 149dan 173ə qədər commentdən çıxar

/* function toppings_choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you love?"));
    }, 3000);
  });
}
async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");

  await toppings_choice(); //* await toppings_choice() funksiyasının işə düşməsini gözlədir ( ləngidir ), console'a baxaraq anlamalı

  console.log("D");
  console.log("E");
}

// Trigger the function

kitchen();
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking orders"); */

/* let is_shop_open = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}
async function kitchen() {
  try {
    // time taken to perform this 1 task
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);
  } catch (error) { //* is_shop_open false olduqda "Customer left" və undefined yazısı gəlir, heçnə throw etməmişik deyə olduğunu düşünürəm (174-198 commentə al, 200-226 commentdən çıxar)
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop closed");
  }
}

// Trigger
kitchen(); */

/* let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}
async function kitchen() {
  try {
    // time taken to perform this 1 task
    await time(2000);
    let choosedFruit = "jackfruit"; //* bizim stock'da olmayan meyvəni seçsin
    console.log(`${choosedFruit} was selected`);
    if(!stocks.Fruits.includes(choosedFruit)) throw "because the fruit he wants isn't available" //*stringdə yazdığımızı catch(error)'dakı error olaraq console'a yazdırır, yanlış fikirdəyəmsə, müəllimdən izah istəməli
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop closed");
  }
}

// Trigger
kitchen(); */

//! 200-226 commentə al, 230-272 commentdən çıxar, ctr s, console'u aç izlə

/* let is_shop_open = true; //* true olduqda, aşağıdakı proses davam edir və müştəriyə dondurma verilir, false olduqda, məntiqən shop qapalı olduğu üçün müştəri gedir

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0);
    console.log("production has started");

    await time(2000);
    console.log("fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log("customer left");
  }
}

kitchen(); */