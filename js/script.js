const main = document.querySelector(".main")
const button = document.querySelector("button")
button.addEventListener('click', resetCanvas)

function startingCanvas() {
    for (let i = 1; i <= 1024; i++) {
        let newDiv = document.createElement("div")
        newDiv.classList.add(`column-${[i]}`,"grid-squares")
        main.appendChild(newDiv);
    }
    fillSquares()
}

function fillSquares() {
    const squares = document.querySelectorAll(".grid-squares")
    squares.forEach((square) => {square.addEventListener('mouseover', (e) => {
        if (!square.classList.contains('drawn')) {
            square.classList.add('drawn', 'opacity01')       
        } else {
            switch(square.classList[3]) {
                case 'opacity01' : square.classList.remove('opacity01');
                square.classList.add('opacity02')
                break;
                case 'opacity02' : square.classList.remove('opacity02');
                square.classList.add('opacity03')
                break;
                case 'opacity03' : square.classList.remove('opacity03');
                square.classList.add('opacity04')
                break;
                case 'opacity04' : square.classList.remove('opacity04');
                square.classList.add('opacity05')
                break;
                case 'opacity05' : square.classList.remove('opacity05');
                square.classList.add('opacity06')
                break;
                case 'opacity06' : square.classList.remove('opacity06');
                square.classList.add('opacity07')
                break;
                case 'opacity07' : square.classList.remove('opacity07');
                square.classList.add('opacity08')
                break;
                case 'opacity08' : square.classList.remove('opacity08');
                square.classList.add('opacity09')
                break;
                case 'opacity09' : square.classList.remove('opacity09');
                break;
                default: 
                break;
            }
        }
        })})
}


function resetCanvas(squares) {
    const currentDivs = document.querySelectorAll(".grid-squares")
    currentDivs.forEach(div => div.parentNode.removeChild(div))
    canvasPicker()
    fillSquares()
}

function canvasPicker() {
    let num = prompt("What size canvas do you want? (enter numbers only)")
        for (let i = 1; i <= num*num; i++) {
            let newDiv = document.createElement("div")
            newDiv.classList.add("grid-squares")
            main.style.setProperty('--square-grid', num)
            main.appendChild(newDiv)
        }

}

startingCanvas();