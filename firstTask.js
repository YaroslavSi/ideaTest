/* 1. Завдання:
Задано масив чисел
Необхідно вивести найбільший добуток сусідніх чисел.
Наприклад:
var inputArray = [3, 6, -2, -5, 7, 3];
Результат: 21 тому що добуток 7*3 дає найбільший результат
P.S. Добуток рахуємо в такий спосіб
3 * 6, потім 6 * -2, потім -2 * -5 і т.д.
*/

function findMaxProductOfMultiplying (inputArray) {
    if (inputArray.length < 2) {
        return 0;
    }
    let maxValue = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
        let currentValue = inputArray[i] * inputArray[i + 1];
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    }
    return maxValue;
}

const ourArrays = {
    first: [3, 6, -2, -5, 7, 3],
    second: [-1, -2],
    third: [5, 1, 2, 3, 1, 4],
    fouth: [1, 2, 3, 0],
    fifth: [9, 5, 10, 2, 24, -1, -48],
};

console.log(findMaxProductOfMultiplying(ourArrays.first));
console.log(findMaxProductOfMultiplying(ourArrays.second));
console.log(findMaxProductOfMultiplying(ourArrays.third));
console.log(findMaxProductOfMultiplying(ourArrays.fouth));
console.log(findMaxProductOfMultiplying(ourArrays.fifth));