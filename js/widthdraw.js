document.getElementById('btn-widthdraw').addEventListener('click', function () {
    const newWidthdraw = getInputFieldNumberById('new-widthdraw');
    if (newWidthdraw <= 0) {
        alert("You can not deposite less than 0");
        return;
    }
    else if (newWidthdraw > 1000) {
        alert("You can deposit more than $1000 in one time");
        return;
    }
    const currentWidthdraw = getElementNumberById('current-widthdraw');
    const currentBalance = getElementNumberById('current-balance');
    if ( (currentBalance - newWidthdraw) < 500) {
        alert(`You cann't widthdraw $${newWidthdraw} at this moment`);
        return;
    }
    const nextWidthdraw = newWidthdraw + currentWidthdraw;
    const nextBalance = currentBalance - newWidthdraw;
    setElementNumberById('current-widthdraw', nextWidthdraw);
    setElementNumberById('current-balance', nextBalance);
})