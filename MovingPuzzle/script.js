const boardElem = document.getElementById('board')

// the position of elements for win
const winning = [
    ['1', '1'],
    ['2', '1'],
    ['3', '1'],
    ['1', '2'],
    ['2', '2'],
    ['3', '2'],
    ['1', '3'],
    ['2', '3'],
]

// set up elements
for (let i=0; i < 8; i++) {
    const posX = i % 3 + 1
    const posY = Math.floor(i / 3) + 1
    const x = Math.floor(parseFloat((i % 3) / 2) * 100)
    const y = Math.floor(Math.floor(i / 3) / 2 * 100)
    const pic = document.createElement('img')
    pic.src = './shokuhou.jpg'
    pic.style.width = '200px'
    pic.style.height = '200px'
    pic.style.objectFit = 'none'
    pic.style.objectPosition = `${x}% ${y}%`
    pic.style.gridColumnStart = posX
    pic.style.gridRowStart = posY
    pic.classList.add('item')
    boardElem.appendChild(pic)
}


const itemsElems = document.querySelectorAll('.item')
const messageElem = document.getElementById('message')
const btnElem = document.getElementById('btn')
const emptyElem = ['3', '3']

btnElem.addEventListener('click', () => start())

// check win
function checkwin() {
    if (emptyElem[0] == 3 && emptyElem[1] == 3) {
        for (let i=0; i < 8; i++) {
            const elem = itemsElems[i]
            const tempArr = [elem.style.gridColumnStart, elem.style.gridRowStart]
            if (!compareArr(tempArr, winning[i])) {
                return false
            }
        }
        return true
    }
}

// mix the puzzle and start game
function start() {

    itemsElems.forEach((item) => {
        item.addEventListener('click', handleClick)
   })

    messageElem.textContent = 'Game start!'

    for (let i=0; i < 8; i++) {
        if ((itemsElems[i].style.gridColumnStart == 3) &&
        (itemsElems[i].style.gridRowStart == 3)) {
            itemsElems[i].style.gridColumnStart = emptyElem[0]
            itemsElems[i].style.gridRowStart  = emptyElem[1]
        }
    }
    
    emptyElem[0] = '3'
    emptyElem[1] = '3'

    for (let i=0; i < 8; i++) {
        for (let j=0; j < 8; j++) {
            const swap = parseInt(Math.ceil(Math.random() * 8) - 1)
            const currentElem = [itemsElems[i].style.gridColumnStart, 
            itemsElems[i].style.gridRowStart]

            itemsElems[i].style.gridColumnStart = itemsElems[swap].style.gridColumnStart
            itemsElems[i].style.gridRowStart = itemsElems[swap].style.gridRowStart
            itemsElems[swap].style.gridColumnStart = currentElem[0]
            itemsElems[swap].style.gridRowStart = currentElem[1]
        }
    }

}

// move a piece
function move(e) {

    function changePos() {
                e.target.style.gridColumnStart = emptyElem[0]
                e.target.style.gridRowStart  = emptyElem[1]
                emptyElem[0] = tempArr[0]
                emptyElem[1] = tempArr[1]        
    }

    const tempArr = [e.target.style.gridColumnStart, e.target.style.gridRowStart]
    if (tempArr[0] == emptyElem[0]) {
        if (
            Math.abs(parseInt(tempArr[1]) - parseInt(emptyElem[1])) == 1
            ) {
                changePos()
            }
    }
    if (tempArr[1] == emptyElem[1]) {
        if (
            Math.abs(parseInt(tempArr[0]) - parseInt(emptyElem[0])) == 1
            ) {
                changePos()
            }
    }
}

function handleClick(e) {
    move(e)
    if (checkwin()) {
        itemsElems.forEach((item) => {
            messageElem.textContent = 'You win!'
            item.removeEventListener('click', handleClick)
            item.classList.add('pointer')
       })
    }
}

// supporting functions
/*
    @para: a, b - int array of length 2
*/
function compareArr(a, b) {
    if (parseInt(a[0]) == parseInt(b[0]) && 
        parseInt(a[1]) == parseInt(b[1])) {
        return true
    }
}