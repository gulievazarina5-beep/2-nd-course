const marquee = document.getElementById('marquee');

marquee.innerHTML += marquee.innerHTML;

marquee.parentElement.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
});
marquee.parentElement.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
});



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

function startMathGame() {
    
    const operators = ['+', '-', '*', '/'];
    
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    
    if (randomOperator === '/') {
        num1 = num1 * num2; 
    }

    
    const task = `${num1} ${randomOperator} ${num2}`;
    
    
    let correctAnswer;
    if (randomOperator === '+') correctAnswer = num1 + num2;
    else if (randomOperator === '-') correctAnswer = num1 - num2;
    else if (randomOperator === '*') correctAnswer = num1 * num2;
    else if (randomOperator === '/') correctAnswer = num1 / num2;

    
    const userAnswer = prompt(`Решите задачу: ${task}`);


    if (userAnswer === null) {
        alert("Игра отменена");
    } else if (parseInt(userAnswer) === correctAnswer) {
        alert(`Верно! ${task} = ${correctAnswer}`);
    } else {
        alert(`Ошибка. Правильный ответ: ${correctAnswer}`);
    }
}



// game 3

function reverseText() {
    let textUser = prompt("Введите текст для игры: ")
    let reversedText = textUser.split('').reverse().join('')
    return alert(`Ваш текст: ${reversedText}`)

}

// game 4
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    let score = 0; 
    let answeredQuestions = 0; 

    for (let i = 0; i < quiz.length; i++) {
        const fullQuestion = `Вопрос ${i + 1} из ${quiz.length}:\n\n${quiz[i].question}\n\nВарианты:\n${quiz[i].options.join('\n')}`;
        
        const userAnswer = prompt(fullQuestion);

        
        if (userAnswer === null) {
            alert("Вы вышли из игры.");
            break; 
        }

        answeredQuestions++;

        
        if (parseInt(userAnswer) === quiz[i].correctAnswer) {
            score++;
            alert("✅ Верно!");
        } else {
            alert(`❌ Ошибка. Правильный ответ был под номером ${quiz[i].correctAnswer}.`);
        }
    }

    
    if (answeredQuestions > 0) {
        alert(`Викторина завершена!\n\nРезультат: ${score} из ${answeredQuestions} (всего в игре было ${quiz.length} вопросов).`);
    }
}


startQuiz();


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


const display = document.getElementById('color-display');
const text = document.getElementById('hex-code');
const button = document.getElementById('btn');

const gameblok = document.getElementById('mini-game');
function startColorGame() {
    
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    
    const userChoice = prompt(
        `Сгенерирован цвет: ${randomColor.toUpperCase()}\n\nХотите применить его как фон страницы?\nВведите "да" или "нет"`
    );

    
    if (userChoice === null) {
        alert("Генерация отменена.");
    } else if (userChoice.toLowerCase() === 'да') {

        gameblok.style.backgroundColor = randomColor;
        alert(`Цвет ${randomColor.toUpperCase()} успешно установлен!`);
    } else if (userChoice.toLowerCase() === 'нет') {
        alert("Хорошо, оставим текущий цвет.");
    } else {
        alert("Не совсем понял ответ, но цвет был: " + randomColor.toUpperCase());
    }
}


startColorGame();
