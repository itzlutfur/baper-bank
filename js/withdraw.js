document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputValueById('withdraw-input');
    const previousWithdrawAmount = getActiveBalance('withdraw-total');
    const previousBalanceAmount = getActiveBalance('balance-total');
    if (isNaN(newWithdrawAmount)) {
        alert('Please input a valid Number');
        return;
    }

    if (newWithdrawAmount > previousBalanceAmount) {
        alert('Baper Bank e eto taka nai');
        return;
    } else if (newWithdrawAmount < 0) {
        alert('Please input a positive Number');
        return;
    }
    const withdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    const balanceTotal = previousBalanceAmount - newWithdrawAmount;

    updateTotal('withdraw-total', withdrawTotal);
    updateTotal('balance-total', balanceTotal);
})