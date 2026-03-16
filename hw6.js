//встроенные обЪекты





//number1

console.log('js'.toUpperCase());

//number2

function filterByPrefix(array, prefix) {
    return array.filter(item => 
        item.toLowerCase().startsWith(prefix.toLowerCase())
    );
}

//number3

const num = 32.58884;

console.log(Math.floor(num)); // До меньшего (32)
console.log(Math.ceil(num));  // До большего (33)
console.log(Math.round(num)); // До ближайшего (33)

//number4

const numbers = [52, 53, 49, 77, 21, 32];

console.log("Минимальное:", Math.min(...numbers));
console.log("Максимальное:", Math.max(...numbers));

//number5

function getRandomTen() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

//number6

function getRandomArray(n) {
    let arr = [];
    let length = Math.floor(n / 2);
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (n + 1)));
    }
    return arr;
}

//number7

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//number8

console.log(new Date());


//number9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


//number10

function formatDateTime(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", 
                    "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let weekDay = days[date.getDay()];
    
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekDay}.
Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDateTime(new Date()));
