//TODO n = 7
/* 1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7 */

//! old version
/* function n() {
  let a = "";
  for (let i = 1; i <= 7; i++) {
    for (let k = 1; k <= i; k++) {
      a += k + " ";
    }
    a += "\n";
  }
  console.log(a);
}
n(); */

//! new version
/* let a = [1, 2, 3, 4, 5, 6, 7];
let s = "";
for (el of a) {
  s += el + " ";
  console.log(s);
} */