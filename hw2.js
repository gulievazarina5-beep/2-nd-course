
//Variables 
//number1

let a =10 
alert(a)
a = 20
alert(a)

//number2

let dateIphoneCreate = 2007
alert(dateIphoneCreate)

//number3

let creatorJS = 'Brendan Eich'
alert(creatorJS)

//number4

let first = 10
let second = 2

alert(
    "Сложение " + (first+second) + '\n' +
    "Вычитание " + (first-second) + '\n' +
    "Умножение " + (first*second) + '\n' +
    "Деление " + (first/second) + '\n'
    
)

//number5

let result = 2**5
alert(result)

//number6
//Вместо А буду использовать переменную с 

let c = 9 
let b = 2

alert(c%b)

//number7

let num = 1
num += 5
num -= 3
num *= 7
num /= 3
num += 1
num -= 1
alert(num)

//number8

age = Number(prompt('Сколько вам лет: '))
alert(age)

//number9

let user = {
    name: 'Ivan',
    age: 12,
    isAdmin: true
}

//number10

let nameUser = prompt('Как вас зовут: ')
alert(`Привет ${nameUser}`)



//number1 conditional branching
// Создаем переменную с правильным паролем
let password = 'мойПароль123';

// Запрашиваем пароль у пользователя
let userPassword = prompt('Введите пароль');

// Проверяем введенные данные
if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно');
}

//number2
let c = 2; // Проверьте также значения: 0, 10, -3

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Результаты проверки:
// При c = 0  -> Неверно
// При c = 10 -> Неверно
// При c = -3 -> Неверно
// При c = 2  -> Верно

//number3
let d = 150;
let e = 50;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//number4
let a = '2';
let b = '3';

// Используем функцию Number() или унарный плюс для преобразования строк в числа
alert(Number(a) + Number(b)); 


//number5
let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца не существует (введите число от 1 до 12)');
        break;
}

//cucles
let i = 0

for (i; i < 2; i++) {
    console.log('Привет')
}


//number 2


for (j = 1; j < 6; j++) {
    console.log(j)
}

// number 3

for (l = 7; l <= 22; l++) {
    console.log(l)
}

// number 4
let obj = {
    "Коля": "200",
    'Вася': '300',
    'Петя': '400'
}


for (key in obj) {
    console.log(`Имя сотрудника- ${key}, зарплата - ${obj[key]}`)
}

// number 5

let n = 1000

while (n > 50) {
    n /= 2
    console.log(n)
}

// number 6

function getFridays(year, month) {
    let fridays = [];
    let date = new Date(year, month, 1);

    
    while (date.getMonth() === month) {
        if (date.getDay() === 5) { 
            fridays.push(new Date(date));
        }
        date.setDate(date.getDate() + 1);
    }

    return fridays;
}

function printFridayReports(year, month) {
    const fridays = getFridays(year, month);
    fridays.forEach((friday, index) => {
        const day = friday.getDate();
        console.log(`Пятница ${index + 1}: ${friday.toLocaleDateString()}. Необходимо подготовить еженедельный отчет.`);
    });
    console.log(`Всего сообщений: ${fridays.length}`);
}

//functions

function randomNumberGame() {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNumber = getRandomInt(1, 100);

    for (i = 6; i > 0; i--) {

        let userNumbner = Number(prompt('Введите число от 1 до 100: '))

        if (userNumbner == '') {
            break
        }

        if (randomNumber > userNumbner) {
            alert(`Число меньше загаданного осталось попыток ${i}`)
        }

        if (randomNumber < userNumbner) {
            alert(`Число большего загаданного осталось попыток ${i}`)
        }

        if (randomNumber == userNumbner) {
            alert('Вы молодец, угадали загаданное число')
            break
        }

        if (randomNumber != userNumbner && i == 1) {
            alert('Попробуй снова!')
        }

    }
}


// number 1

function minValue(a, b) {
    

    if (a < b) {
        return a
    } else if (a > b) {
        return b
    } else {
        return a
    }

}

//  number 2

function chetnost(a) {
    return (a % 2 == 0) ? 'Число четное' : 'Чсило нечетное'
}

// number 3

function kvadrat(a) {
    console.log(a ** 2)
    return a ** 2
}

// number 4

function age() {
    let age = Number(prompt('Сколько вам лет: '))

    if (age < 0) {
        alert('Вы ввели неправильное значение')
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!')
    } else {
        alert('Добро пожаловать!')
    }

}

// number 5

function isNan(a, b) {
    function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    if (isNumber(a) && isNumber(b)) {
        return a * b
    } else {
        return 'Одно или оба значения не являются числом'
    }
}

// number 6

function kub() {
    let a = Number(prompt('Введите число: '))
    

    function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    if (isNumber(a)) {
        return `${a} в кубе равняется ${a ** 3}`
    } else {
        return 'Переданный параметр не является числом'
    }
}

// number 7 

function getArea() {
    return 3.14 * (this.radius ** 2)
}

function getPerimetr() {
    return 2 * 3.14 * this.radius
}

let circle1 = {
    radius: 15,
    getArea: getArea,
    getPerimetr: getPerimetr
}

let circle2 = {
    radius: 20,
    getArea: getArea,
    getPerimetr: getPerimetr
}


//массивы

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




// number 1
let mas = [1, 5, 4, 10, 0, 3]

for (i = 0; i < mas.length; i++) {
    if (mas[i] == 10) {
        break
    }
    console.log(mas[i])
}

// number 2

let mas1 = [1, 5, 4, 10, 0, 3]

console.log(mas1.indexOf(4))

// number 3

let mas2 = [1, 3, 5, 10, 20]

console.log(mas2.join(' '))

// number 4

let mas3 = []

for (i = 0; i <= 2; i++) {
    mas3[i] = []
    for (j = 0; j <= 2; j++) {
        mas3[i][j] = 1
    }
}

// number 5

let mas4 = [1, 1, 1]

mas4.push(2)
mas4.push(2)
mas4.push(2)

// number 6

let mas5 = [9, 8, 7, 'a', 6, 5]

const mas51 = mas5.filter(num => /\d/.test(num))

let mas52 = mas51.sort()

// number 7

let mas6 = [9, 8, 7, 6, 5]

let userNumbner = prompt('Угадайте число из массива! Введите число: ')

if (mas6.includes(Number(userNumbner))) {
    alert('Угадал')

} else {
    alert('Не угадал!')
}

// number 8 

let stroka = 'abcdef'

let revStroka = stroka.split('').reverse().join('')
console.log(revStroka)
// number 9

let mas7 = [[1, 2, 3], [4, 5, 6]]

let mas71 = []

for (i = 0; i < 2; i++) {
    for (j = 0; j <= 2; j++) {
        mas71.push(j)
    }

}

console.log(mas71)

// number 10

const ranMas = []

for (let i = 0; i < 8; i++) {
    ranMas.push(Math.floor(Math.random() * 10) + 1)
}

for (let i = 0; i < ranMas.length - 1; i++) {
    let sum = ranMas[i] + ranMas[i + 1]
    console.log(`Сумма элементов ${ranMas[i]} + ${ranMas[i + 1]} = ${sum}`)
}

// number 11

function kvadtratMas(mas8) {
    return mas8.map(num => num * num)
}

//  number 12

function bigStroka(mas9) {
    let masLenght = []
    for (i = 0; i < mas9.length; i++) {
        masLenght.push(mas9[i].length)
    }
    return masLenght
}

// number 13

function otrizNum(mas10) {
    return mas10.filter(num => num < 0)
}

// number 14

let randMas = []

for (let i = 0; i < 10; i++) {
    randMas.push(Math.floor(Math.random() * 10) + 1)
}

let chetMas = []

for (i = 0; i < ranMas.length; i++) {
    if (ranMas[i] % 2) {
        chetMas.push(ranMas[i])
    }
}

console.log(`Исходный массив ${ranMas} \n Массив из четных чисел ${chetMas} `)

// number 15

let randMas2 = []
let sum1 = 0

for (let i = 0; i < 6; i++) {
    randMas2.push(Math.floor(Math.random() * 10) + 1)
}

for (i = 0; i < randMas2.length; i++) {
    sum1 += randMas2[i]
}

let average = sum1 / randMas2.length

console.log(average)





