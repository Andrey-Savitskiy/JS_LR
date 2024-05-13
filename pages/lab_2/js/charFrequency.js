function getCharFrequency(multiStr) {
    const charFrequency = {};

    for (const char of multiStr) {
        if (charFrequency[char]) {
            charFrequency[char]++;
        } else {
            charFrequency[char] = 1;
        }
    }

    return charFrequency;
}

const multiStr = "Привет, мир! Это тестовая строка.";
const charFrequency = getCharFrequency(multiStr);
console.log(charFrequency);
