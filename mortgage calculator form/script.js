function validateForm() {
    const mortgageAmount = document.getElementById("amount").value;
    const mortgageTerm = document.getElementById("time").value;
    const interestRate = document.getElementById("interest").value;

    if (mortgageAmount === '' || mortgageAmount <= 0) {
        alert('Mortgage Amount must be a positive number.');
        return false;
    }

    if (mortgageTerm === '' || mortgageTerm <= 0) {
        alert('Mortgage Term must be a positive number.');
        return false;
    }

    if (interestRate === '' || interestRate < 0) {
        alert('Interest Rate must be a non-negative number.');
        return false;
    }

    return true;
}

document.getElementById('calculate').addEventListener('click', function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

document.getElementById('calculate').addEventListener('click', function () {
    console.log("running");
    var msgDiv = document.getElementById('msg');
    var calcDiv = document.getElementById('calc');

    if (msgDiv.style.display === 'block') {
        msgDiv.style.display = 'none';
        calcDiv.style.display = 'block';
    } else {
        msgDiv.style.display = 'block';
        calcDiv.style.display = 'none';
    }
});
