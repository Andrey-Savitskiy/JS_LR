function numberToWords(num) {
    if (num < 0 || num >= 100 || isNaN(num)) {
        return "Неправильный ввод. Число должно быть от 0 до 99.";
    }

    const units = [
        "ноль",
        "один",
        "два",
        "три",
        "четыре",
        "пять",
        "шесть",
        "семь",
        "восемь",
        "девять",
    ];

    const tens = [
        "",
        "",
        "двадцать",
        "тридцать",
        "сорок",
        "пятьдесят",
        "шестьдесят",
        "семьдесят",
        "восемьдесят",
        "девяносто",
    ];

    const teens = [
        "десять",
        "одиннадцать",
        "двенадцать",
        "тринадцать",
        "четырнадцать",
        "пятнадцать",
        "шестнадцать",
        "семнадцать",
        "восемнадцать",
        "девятнадцать",
    ];

    let words = "";

    if (num >= 20) {
        words += tens[Math.floor(num / 10)] + " ";
        num %= 10;
    }

    if (num >= 10) {
        words += teens[num - 10];
    } else {
        words += units[num];
    }

    return words.trim();
}

console.log(numberToWords(0)); // Выведет "ноль"
console.log(numberToWords(5)); // Выведет "пять"
console.log(numberToWords(12)); // Выведет "двенадцать"
console.log(numberToWords(25)); // Выведет "двадцать пять"
console.log(numberToWords(99)); // Выведет "девяносто девять"
console.log(numberToWords(100)); // Выведет "Неправильный ввод. Число должно быть от 0 до 99."
