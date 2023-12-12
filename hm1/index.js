/*
1. Дан массив const arr = [54, 63, 76, 34, 21, 57, 25, 301, 94];
вывести в консоль наибольшее число из этого массива
 */

const arr = [54, 1000, 606, 34, 21, 505, 25, 301, 94];
let number = 0;
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
        arr[i] = arr[i + 1];
        number = arr[i];
    }
    if (arr[i] > arr[i + 1]) {
        arr[i + 1] = arr[i];
        number = arr[i];
    }
}

console.log(number);