//Callback, setTimeout, setInterval

function playRockPaperScissors() {
    
    const options = ["камень", "ножницы", "бумага"];
    
    
    let userChoice = prompt(
        "Выберите: камень, ножницы или бумага?\n(Введите точно: 'камень', 'ножницы' или 'бумага')"
    );
    
    // Проверка ввода
    if (!options.includes(userChoice.toLowerCase())) {
        alert("❌ Неверный выбор! Играйте заново.");
        return;
    }
    
    userChoice = userChoice.toLowerCase();
    
    
    const computerIndex = Math.floor(Math.random() * 3);
    const computerChoice = options[computerIndex];
    
    
    let result = "";
    if (userChoice === computerChoice) {
        result = "🤝 Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "🎉 Вы победили!";
    } else {
        result = "😢 Компьютер победил!";
    }
    
    
    alert(
        `Ваш выбор: ${userChoice}\n` +
        `Компьютер: ${computerChoice}\n\n` +
        `${result}`
    );
}

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

sayHi.bind(null, 'Глеб')

