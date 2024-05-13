function calculateFactorial(num) {
    if (num < 0) {
        return "Факториал определен только для неотрицательных чисел";
    } else if (num === 0) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}


function getNumberFromUser() {
    let userInput = prompt("Введите число для вычисления факториала:");

    if (userInput === null) {
        return;
    }

    userInput = parseInt(userInput)
    if (isNaN(userInput)) {
        alert("Ошибка: введено некорректное значение. Пожалуйста, введите число.");
        return getNumberFromUser();
    } else {
        const factorial = calculateFactorial(userInput);
        alert(`Факториал ${userInput} равен ${factorial}`);
    }
}


const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", getNumberFromUser);
