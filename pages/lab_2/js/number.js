function getValuesFromUser() {
    const values = [];
    let userInput;

    do {
        userInput = prompt("Введите значение (нажмите 'Отмена' или 'Esc' для завершения):");
        if (userInput !== null && userInput.toLowerCase() !== "esc") {
            values.push(userInput);
        }
    } while (userInput !== null && userInput.toLowerCase() !== "esc");

    return values;
}


function convertToNumbers(arr) {
    return arr.filter(value => !isNaN(Number(value)));
}


function findMinNumber(arr) {
    const numbers = convertToNumbers(arr);
    if (numbers.length === 0) {
        return "В массиве нет чисел";
    }
    return Math.min(...numbers);
}


function arrayToString(arr) {
    return arr.join("-");
}


function main() {
    const values = getValuesFromUser();
    const numbers = convertToNumbers(values);
    const minNumber = findMinNumber(numbers);
    const numbersString = arrayToString(numbers);

    alert(`Минимальное число: ${minNumber}\nМассив чисел в виде строки: ${numbersString}`)
}

const numberButton = document.getElementById("numberButton");
numberButton.addEventListener("click", main);
