
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







