document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDeposit = getInputFieldNumberById('new-doposit');
    if (newDeposit <= 0) {
        alert("You can not deposite less than 0");
        return;
    }
    else if (newDeposit >= 2000) {
        alert("You can deposit more than $1999 in one time");
        return;
    }
    const currentDeposit = getElementNumberById('current-deposit');
    const currentBalance = getElementNumberById('current-balance');
    const nextDeposit = newDeposit + currentDeposit;
    const nextBalance = currentBalance + newDeposit;
    setElementNumberById('current-deposit', nextDeposit);
    setElementNumberById('current-balance', nextBalance);
})