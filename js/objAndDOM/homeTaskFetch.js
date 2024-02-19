//TODO show all titles
/* https://jsonplaceholder.typicode.com/guide/ */
let b = document.querySelector("body");

fetch("https://jsonplaceholder.typicode.com//users/1/todos/")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      let heading1 = document.createElement("h1");
      heading1.innerText = `${el.title}`;
      b.append(heading1);
    });
  });
