function getInputFieldNumberById (inputFiledId) {
    const inputFiledString = document.getElementById(inputFiledId);
    const inputFiledValue = parseFloat(inputFiledString.value);
    inputFiledString.value = '';
    return inputFiledValue;
}

function getElementNumberById (elementId) {
    const elementString = document.getElementById(elementId);
    const elementValue = parseFloat(elementString.innerText);
    return elementValue;
}

function setElementNumberById (elementId, newValue) {
    const elementString = document.getElementById(elementId);
    elementString.innerText = newValue;
}