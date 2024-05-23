const loanAmountInput = document.getElementById('loan-amount');
const interestRateInput = document.getElementById('interest-rate');
const loanTermInput = document.getElementById('loan-term');
const monthlyPaymentOutput = document.getElementById('monthly-payment');
const totalPaymentsOutput = document.getElementById('total-payments');
const overpaymentOutput = document.getElementById('overpayment');

function calculateMortgage() {
    if (loanTermInput.value > 30) {
        loanTermInput.value = 30
    }
    if (interestRateInput.value > 50) {
        interestRateInput.value = 50
    }

    const loanAmount = parseFloat(loanAmountInput.value);
    const interestRate = parseFloat(interestRateInput.value) / 100 / 12; // Годовая ставка к месячной
    const loanTerm = parseFloat(loanTermInput.value) * 12; // Срок кредита в месяцах

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) ||
        loanTermInput.value <= 0 || interestRateInput.value <= 0 || loanAmountInput.value <= 0) {
        monthlyPaymentOutput.textContent = '0';
        totalPaymentsOutput.textContent = '0';
        overpaymentOutput.textContent = '0';
        return;
    }

    const monthlyPayment = loanAmount * (interestRate / (1 - Math.pow(1 + interestRate, -loanTerm)));
    const totalPayments = monthlyPayment * loanTerm;
    const overpayment = totalPayments - loanAmount;

    monthlyPaymentOutput.textContent = monthlyPayment.toFixed(2);
    totalPaymentsOutput.textContent = totalPayments.toFixed(2);
    overpaymentOutput.textContent = overpayment.toFixed(2);
}

loanAmountInput.addEventListener('input', calculateMortgage);
interestRateInput.addEventListener('input', calculateMortgage);
loanTermInput.addEventListener('input', calculateMortgage);

calculateMortgage();
