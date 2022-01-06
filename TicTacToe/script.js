const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let count
let currentClass

const r = document.querySelector(':root')
const boardElem = document.querySelector('[data-board]')
const gridElems = document.querySelectorAll('[data-grid]')
const buttonElem = document.querySelector('#button')
const headerElem = document.querySelector('#header')

buttonElem.addEventListener('click', startGame)

startGame()

function startGame() {

    // set color
    let bgHue = Math.floor(Math.random() * 361)
    let xHue = (bgHue + 110) % 360
    let circleHue = (bgHue + 240) % 360
    r.style.setProperty('--bgHue', bgHue)
    r.style.setProperty('--xHue', xHue)
    r.style.setProperty('--circleHue', circleHue)

    count = 0
    currentClass = (count % 2 == 0) ? X_CLASS : CIRCLE_CLASS
    gridElems.forEach(grid => {
        grid.classList.remove(X_CLASS)
        grid.classList.remove(CIRCLE_CLASS)
        grid.classList.remove('pointer')
        grid.addEventListener('click', handleClick, {once: true})
    })
    setCurrentClass()
}

function handleClick(e) {
    const grid = e.target
    currentClass = (count % 2 == 0) ? X_CLASS : CIRCLE_CLASS
    // place mark
    placeMark(grid)
    // check for win
    if (checkWin()) {
        endGame()
    } else {
        if (count === 8) {
            // draw
            headerElem.textContent = 'draw'
        } else {
            // switch turn
            count++
            setCurrentClass()
        }
    }
}

function endGame() {
    boardElem.classList.remove(X_CLASS)
    boardElem.classList.remove(CIRCLE_CLASS)
    gridElems.forEach(grid => {
        grid.classList.add('pointer')
        grid.removeEventListener('click', handleClick)
    })
    headerElem.textContent = `${currentClass} win`
}

function placeMark(grid) {
    grid.classList.add(currentClass)
}

function checkWin() {
    if (count > 3) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return gridElems[index].classList.contains(currentClass)
            })
        })
    }
}

function setCurrentClass() {
    boardElem.classList.remove(X_CLASS)
    boardElem.classList.remove(CIRCLE_CLASS)
    currentClass = (count % 2 == 0) ? X_CLASS : CIRCLE_CLASS
    boardElem.classList.add(currentClass)
    headerElem.textContent = `${currentClass}'s turn`
}