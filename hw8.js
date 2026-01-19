let hiderElem = document.querySelector('.test')

let buttonClick = document.querySelector('.test__click')

let isVisible = true

buttonClick.addEventListener('click', function () {
    if (isVisible) {
        hiderElem.style.display = 'none'
        buttonClick.textContent = 'Показать'
    } else {
        hiderElem.style.display = 'block'
        buttonClick.textContent = 'Скрыть'
    }
    isVisible = !isVisible
})

// number 2

let pColor = document.querySelector('.ElemColor')

let btnColor = document.querySelector('.btnColor')

let colorControl = true

btnColor.addEventListener('click', function () {

    if (colorControl) {
        pColor.style.color = 'blue'

    }
    else {
        pColor.style.color = 'black'

    }
    colorControl = !colorControl
})

// number 3

let texttr = document.querySelector('.text')

let btntrade = document.querySelector('.textTrade')

btntrade.addEventListener('click', function () {

    texttr.textContent = `«Привет, мир!».`
})

// number 4

let btnAlltrade = document.querySelector('.btntrade2')

btnAlltrade.addEventListener('click', function () {

    let textAllTrade = document.querySelectorAll('.description')

    for (let element of textAllTrade) {
        element.textContent = '«Измененный текст»'
    }
})


// number 5 одинаковое задание с 4 ?

let btnAlltrade2 = document.querySelector('.btntrade3')

btnAlltrade2.addEventListener('click', function () {

    let textAllTrade1 = document.querySelectorAll('.description')

    for (let element of textAllTrade1) {
        element.textContent = '«Новый текст»'
    }
})


// number 6


const btn = document.querySelector('.addBtn');


btn.addEventListener('click', function () {

    const newP = document.createElement('p')

    newP.textContent = `Новый параграф `

    newP.classList.add('description')

    document.body.appendChild(newP)
})

// number 7

const remove = document.querySelector('.remove')

remove.addEventListener('click', function () {

    let ElemDesc = document.querySelector('.description')

    ElemDesc.remove()
})