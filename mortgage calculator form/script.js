const mortgageAmount = document.getElementById("amount");
const mortgageTerm = document.getElementById("time");
const interestRate = document.getElementById("interest");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");

//Update function to update the mortgate values
function update() {
    const monthPayment = Number(mortgageAmount.value) + Number(mortgageAmount.value) * Number(interestRate.value) / 100;
    const total = monthPayment * 12 * Number(mortgageTerm.value);
    let formattedMonthlyPayment = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(monthPayment);
    let formattedTotal = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(total);
    monthly.innerText = `£${formattedMonthlyPayment}`;
    yearly.innerText = `£${formattedTotal}`;
}

// Update on button click
document.getElementById('calculate').addEventListener('click', function (event) {
    event.preventDefault();
    update();
});


//Adding events to input fields
mortgageAmount.onkeyup = update;
mortgageTerm.onkeyup = update;
interestRate.onkeyup = update;
