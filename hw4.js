//функции
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


//number1
function getMin(a, b) {
    return a < b ? a : b;
}

//number2

function checkParity(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}


// number 3

// Функция которая просто выводит в консоль
function printSquare(n) {
    console.log(n * n);
}

// Функция которая возвращает значение для последующего использования
function getSquare(n) {
    return n * n;
}


//number 4

function checkAge() {
    let age = prompt("Сколько вам лет?");
    
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}


//number 5

function multiplyNumbers(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}


//number 6

function cubeNumber() {
    let n = prompt("Введите число");
    
    if (isNaN(Number(n)) || n === null || n.trim() === "") {
        return 'Переданный параметр не является числом';
    } else {
        let result = Math.pow(n, 3);
        return `${n} в кубе равняется ${result}`;
    }
}

// Проверка для чисел от 0 до 10
for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i)); 
}


//number 7

function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
};

const circle2 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter
};