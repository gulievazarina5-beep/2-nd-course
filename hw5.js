
//массивы
//number1
function mathQuiz() {

    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;


    const operation = Math.floor(Math.random() * 4);
    let correctAnswer;
    let operationSign;

    switch (operation) {
        case 0:
            correctAnswer = num1 + num2;
            operationSign = '+';
            break;
        case 1:
            correctAnswer = num1 - num2;
            operationSign = '-';
            break;
        case 2:
            correctAnswer = num1 * num2;
            operationSign = '*';
            break;
        case 3:
            num2 = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * (Math.floor(Math.random() * 10) + 1);
            correctAnswer = num1 / num2;
            operationSign = '÷';
            break;
    }


    const userAnswer = prompt(`${num1} ${operationSign} ${num2} = ?`);


    if (parseFloat(userAnswer) === correctAnswer) {
        alert('✅ Правильно! Молодец!');
    } else {
        alert(`❌ Неправильно! Правильный ответ: ${num1} ${operationSign} ${num2} = ${correctAnswer}`);
    }


    if (confirm('Хочешь еще задачу?')) {
        mathQuiz();
    }
}



const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) break;
}

//number2

const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4)); // Выведет 2

//number3

const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

//number4

let matrix = [];
for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix[i].push(1);
    }
}
console.log(matrix);

//number5

let arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//number6

let arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop(); // Удаляет последний элемент ('a' после сортировки окажется в конце)
console.log(arr6);

//number7

const arr7 = [9, 8, 7, 6, 5];
let userNum = Number(prompt("Угадайте число из массива"));
if (arr7.includes(userNum)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

//number8

let str = 'abcdef';
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

//number9

const arr9 = [[1, 2, 3], [4, 5, 6]];
const flatArr = arr9.flat();
console.log(flatArr);

//number10

const arr10 = [3, 1, 8, 5, 9];
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i+1]);
}

//number11

function getSquares(arr) {
    return arr.map(num => num ** 2);
}

//number12

function getWordLengths(arr) {
    return arr.map(word => word.length);
}

//number13

function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

//number14

let randomArr = [];
for (let i = 0; i < 10; i++) {
    randomArr.push(Math.floor(Math.random() * 11));
}
let evenArr = randomArr.filter(num => num % 2 === 0);

console.log("Исходный массив:", randomArr);
console.log("Четные числа:", evenArr);

//number15

let arr15 = [];
for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10) + 1);
}
let sum = arr15.reduce((acc, curr) => acc + curr, 0);
let average = sum / arr15.length;

console.log("Массив:", arr15);
console.log("Среднее арифметическое:", average);

