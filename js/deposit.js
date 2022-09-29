document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('deposit-input');
    const previousDepositAmount = getActiveBalance('deposit-total');
    const previousBalanceAmount = getActiveBalance('balance-total');
    if (isNaN(newDepositAmount)) {
        alert('Please input a valid Number');
        return;
    } else if (newDepositAmount < 0) {
        alert('Please input a positive Number');
        return
    }
    const depositTotal = previousDepositAmount + newDepositAmount;
    const balanceTotal = newDepositAmount + previousBalanceAmount;

    updateTotal('deposit-total', depositTotal);
    updateTotal('balance-total', balanceTotal);
})