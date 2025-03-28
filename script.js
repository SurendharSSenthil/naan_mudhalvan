function calculateHRA(basicPay) {
  const hra = basicPay * 0.2;
  console.log("House Rent Allowance (HRA):", hra);
  return hra;
}

function calculateDA(basicPay) {
  const da = basicPay * 0.1;
  console.log("Dearness Allowance (DA):", da);
  return da;
}

function calculatePF(basicPay) {
  const pf = basicPay * 0.12;
  console.log("Provident Fund (PF):", pf);
  return pf;
}

function calculateGrossPay(basicPay) {
  const grossPay = basicPay + calculateDA(basicPay) + calculateHRA(basicPay);
  console.log("Gross Pay:", grossPay);
  return grossPay;
}

function calculateNetPay(basicPay) {
  const netPay = calculateGrossPay(basicPay) - calculatePF(basicPay);
  console.log("Net Pay:", netPay);
  return netPay;
}

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("emp_name").value.trim();
  const designation = document.getElementById("designation").value.trim();
  const basicPay = parseFloat(document.getElementById("basic_pay").value);

  if (isNaN(basicPay) || basicPay <= 0) {
    showAlert("Please enter a valid basic pay amount.");
    return;
  }

  const displayContainer = document.getElementById("disp");
  displayContainer.innerHTML = "";
  displayContainer.classList.add("card", "p-3", "mt-3", "shadow-sm");

  const createInfoElement = (tag, text, classes) => {
    const element = document.createElement(tag);
    element.innerText = text;
    element.className = classes;
    return element;
  };

  displayContainer.appendChild(createInfoElement("p", `${name}, ${designation}`, "fw-sembold fs-3 text-center"));
  displayContainer.appendChild(createInfoElement("p", `HRA: ${calculateHRA(basicPay)}`, "text-success"));
  displayContainer.appendChild(createInfoElement("p", `DA: ${calculateDA(basicPay)}`, "text-info"));
  displayContainer.appendChild(createInfoElement("p", `PF: ${calculatePF(basicPay)}`, "text-danger"));
  displayContainer.appendChild(createInfoElement("p", `Gross Pay: ${calculateGrossPay(basicPay)}`, "text-dark"));
  displayContainer.appendChild(createInfoElement("p", `Net Pay: ${calculateNetPay(basicPay)}`, "text-warning"));
});
