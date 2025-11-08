const body = document.querySelector("body")
const boxCountRow = 16
const boxCountColumn = 16

for(let j = 0; j < boxCountColumn; j++){
    const column = document.createElement(`div`)
    column.classList.add(`column${j}`)
    column.classList.add('column')
    body.appendChild(column)
    for(let i = 0; i < boxCountRow; i++){
        const box = document.createElement("div")
        box.classList.add(`box${i}${j}`)
        box.classList.add("box")
        column.appendChild(box)
        console.log(i)
    }
    console.log(j)
}

// get player input from arrow keys to either change the background color of boxXY
function changeBackGround(x, y) {
    const box = document.querySelector(`.box${x}${y}`);
    box.style.backgroundColor = "black" 

}

