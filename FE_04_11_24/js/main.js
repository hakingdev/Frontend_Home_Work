//Задача 1

function numbersEqual() {
    let num1 = +document.querySelector('.number-1').value;
    let num2 = +document.querySelector('.number-2').value;
    let num3 = +document.querySelector('.number-3').value;
    let result;

    if (num1 === num2 && num1 === num3) {
        result = document.querySelector('.result').textContent = 'Все числа равны';
    } else {
        result = document.querySelector('.result').textContent = 'попробуйте еще раз'
    }
}

// Задача 2

function hasZero() {
    let num1 = +document.querySelector('.number-4').value;
    let num2 = +document.querySelector('.number-5').value;
    let num3 = +document.querySelector('.number-6').value;
    let hasNumber = num1 === 0 || num2 === 0 || num3 === 0;
    document.querySelector('.result-2').textContent = hasNumber ? 'Да, есть' : 'Нет'
}

//Задача 3

function sameOne() {
    let num1 = +document.querySelector('.number-7').value;
    let num2 = +document.querySelector('.number-8').value;
    let num3 = +document.querySelector('.number-9').value;
    let equalField = num1 === num2 || num1 === num3 || num2 === num3;
    document.querySelector('.result-3').textContent = equalField ? 'Есть равные поля' : 'Нет равных полей';
}

//Задача 4

function sorNumbers() {
    let num1 = +document.querySelector('.number-10').value;
    let num2 = +document.querySelector('.number-11').value;
    let num3 = +document.querySelector('.number-12').value;
    let result;
    let min = Math.min(num1, num2, num3)
    let max = Math.max(num1, num2, num3)
    let mid = num1 + num2 + num3 - min - max
    result = document.querySelector('.result-4').textContent = `${min} ${mid} ${max}`;
}

function timeConverter() {
    let time = +document.querySelector('.number-13').value;
    let minutes = (time / 60).toFixed(2);
    let hours = (minutes / 60).toFixed(2);
    let days = (hours / 24).toFixed(2);
    let result = document.querySelector('.result-5').textContent = `из ${time} секунд: 
    - количество минут - ${minutes} мин, 
    - количество часов - ${hours} ч, 
    - количество дней - ${days} дней`;
}

