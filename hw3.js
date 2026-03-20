//циклы
//number1
console.log("Привет");
console.log("Привет");
//number2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//number3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}
//number4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}
//number5
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log("Результат:", n);
console.log("Количество итераций:", num);
//number6
let firstFriday = 3; // например первая пятница выпала на 3 число

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
