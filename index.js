const ip1 = document.getElementById("exampleFormControlInput1");
const ip2 = document.getElementById("exampleFormControlTextArea1");
const addBtn = document.getElementById("add-btn");
const pdtBtn = document.getElementById("pdt-btn");

function add() {
  let x = parseFloat(ip1.value);
  let y = parseFloat(ip2.value);
  if (isNaN(x) || isNaN(y)) {
    alert("Please enter the number");
    return;
  }
  let res = document.getElementById("res");
  res.innerText = `The result is ${x + y}`;
}
function pdt() {
  let x = parseFloat(ip1.value);
  let y = parseFloat(ip2.value);
  if (isNaN(x) || isNaN(y)) {
    alert("Please enter the number ");
    return;
  }
  console.log(x, y, x * y);
  let res = document.getElementById("res");
  res.innerText = `The result is ${x * y}`;
}
function div() {
  let x = parseFloat(ip1.value);
  let y = parseFloat(ip2.value);
  if (isNaN(x) || isNaN(y)) {
    alert("Please enter the number ");
    return;
  }
  console.log(x, y, x / y);
  let res = document.getElementById("res");
  res.innerText = `The result is ${x / y}`;
}
function mod() {
  let x = parseFloat(ip1.value);
  let y = parseFloat(ip2.value);
  if (isNaN(x) || isNaN(y)) {
    alert("Please enter the number ");
    return;
  }
  console.log(x, y, x % y);
  let res = document.getElementById("res");
  res.innerText = `The result is ${x % y}`;
}
function neg() {
  let x = parseFloat(ip1.value);
  let y = parseFloat(ip2.value);
  if (isNaN(x) || isNaN(y)) {
    alert("Please enter the number ");
    return;
  }
  console.log(x, y, x - y);
  let res = document.getElementById("res");
  res.innerText = `The result is ${x - y}`;
}
