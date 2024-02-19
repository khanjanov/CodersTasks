/* //TODO bir dene formunuz var, bu forumda mehsulun sekli ve mehsul haqqinda melumat, qiymet ve tip. submit button.

let b = document.querySelector("body");
function style(a, b, c) {
  return a.setAttribute(`${b}`, ` ${c}`);
}
style(
  b,
  "style",
  "display:flex;flex-direction:column;gap:12px;justify-content:center;align-items:center;background-color:;"
);
let form = document.createElement("form");
form.innerHTML = `<div class="container">
<form action=" "  id="contact_form">
<fieldset>
<legend>Enter new item</legend>
<div class="form-group">
  <label>Insert item image</label>  
  <div>
  <div>
  <span></span>
  <input  name="uploadFile" placeholder="chose file" type="file">
    </div>
  </div>
</div>
<div class="form-group">
  <label>Name</label>  
    <div>
    <div>
    <span></i></span>
  <input name="name" placeholder="enter item name" type="text">
    </div>
  </div>
</div>  
<div class="form-group">
  <label>Price</label>  
    <div>
    <div>
    <span></i></span>
  <input name="price" placeholder="enter price" type="number">
    </div>
  </div>
</div>   
<div class="form-group"> 
  <label>Item type</label>
    <div>
    <div>
        <span></span>
    <select name="type">
      <option value=" " >Please select item type</option>
      <option>electronics</option>
      <option>clothes</option>
      <option>decor</option>
      <option>shoes</option>
      <option>jewelry</option>
      <option>other</option>
    </select>
  </div>
</div>
</div>
<div class="form-group">
  <label>Item Description</label>
    <div>
    <div>
    <span></span>
    <textarea name="description" placeholder="Item Description"></textarea>
  </div>
  </div>
</div>
<div>
  <label></label>
  <div>
    <button type="submit">Send</button>
  </div>
</div>

</fieldset>
</form>
</div>`;

b.append(form);

item = {
  pic: "assets/pics/icon.png",
  name: String,
  info: String,
  price: Number,
  type: String,
};

submitBtn.addEventListener("click", submitForm);

function submitForm() {
  createForm(item);
}

function createItemCard(item) {
  let heading1 = createElement("h1");
  
}

function createElement(a) {
  return document.createElement(`${a}`);
}
 */
