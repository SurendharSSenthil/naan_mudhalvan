function cal_HRA(basicpay) {
    var hra = basicpay * 0.2;
    console.log("The House Rent Allowance is", hra);
    return hra;
}

function cal_DA(basicpay) {
    var da = basicpay * 0.1;
    console.log("The Dearness Allowance", da);
    return da;
}

function cal_PF(basicpay) {
    var pf = basicpay * 0.12;
    console.log("Provident Fund", pf);
    return pf;
}

function cal_grosspay(basicpay) {
    var gp = basicpay + cal_DA(basicpay) + cal_HRA(basicpay);
    console.log("Gross Pay", gp);
    return gp;
}

function cal_netpay(basicpay) {
    var np = cal_grosspay(basicpay) - cal_PF(basicpay);
    console.log("Net Pay", np);
    return np;
}

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents form from reloading the page

    const name = document.getElementById('emp_name').value;
    const designation = document.getElementById('designation').value;
    const basic_pay = parseFloat(document.getElementById('basic_pay').value);

    if (isNaN(basic_pay)) {
        alert("Please enter a valid basic pay amount.");
        return;
    }

    const hra = document.createElement('p');
    const da = document.createElement('p');
    const pf = document.createElement('p'); 
    const gp = document.createElement('p'); 
    const np = document.createElement('p'); 
    const disp = document.getElementById('disp');

    hra.innerText = `HRA: ${cal_HRA(basic_pay)}`;
    da.innerText = `DA: ${cal_DA(basic_pay)}`;
    pf.innerText = `PF: ${cal_PF(basic_pay)}`;
    gp.innerText = `Gross Pay: ${cal_grosspay(basic_pay)}`;
    np.innerText = `Net Pay: ${cal_netpay(basic_pay)}`;

    // Clear previous results before appending
    disp.innerHTML = "";
    
    disp.appendChild(hra);
    disp.appendChild(da);
    disp.appendChild(pf);
    disp.appendChild(gp);
    disp.appendChild(np);
});
