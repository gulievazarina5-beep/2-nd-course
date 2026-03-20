//Callback, setTimeout, setInterval
//number1

const people = [
{ name: 'Глеб', age: 29 },
{ name: 'Анна', age: 17 },
{ name: 'Олег', age: 7 },
{ name: 'Оксана', age: 47 }
];

// Используем разность возрастов: если результат отрицательный, a идет перед b
console.log(people.sort((a, b) => a.age - b.age));

//number2

function isPositive(num) {
    return num > 0;
}

function isMale(user) {
    return user.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        // Если колбэк вернул true, добавляем элемент в новый массив
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive)); // [3, 1, 9]

const peopleArr = [
{name: 'Глеб', gender: 'male'},
{name: 'Анна', gender: 'female'},
{name: 'Олег', gender: 'male'},
{name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleArr, isMale)); // [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]

//number3

const intervalId = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);

//number4

function delayForSecond(callback) {
   // Оборачиваем вызов колбэка в setTimeout
setTimeout(callback, 1000);
}

delayForSecond(function () {
console.log('Привет, Глеб!');
});


//number5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(sayHi('Глеб'))

sayHi.bind(null, 'Глеб')

