
function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const valueString = input.value;
    input.value = '';
    const value = parseFloat(valueString);
    return value;
}


function getActiveBalance(inputId) {
    const balance = document.getElementById(inputId);
    const amountValue = balance.innerText;
    const amount = parseFloat(amountValue);
    return amount;
}

function updateTotal(elementId, updatedValue) {
    const update = document.getElementById(elementId);
    update.innerText = updatedValue;
}