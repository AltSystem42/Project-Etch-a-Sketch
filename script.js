const container = document.querySelector('.container')
const boxCountRow = 16
const boxCountColumn = 16

for(let j = 0; j < boxCountColumn; j++){
    const column = document.createElement(`div`)
    column.classList.add(`column${j}`)
    column.classList.add('column')
    container.appendChild(column)
    for(let i = 0; i < boxCountRow; i++){
        const box = document.createElement("div")
        box.classList.add(`box${i}${j}`)
        box.classList.add("box")
        column.appendChild(box)
    }
}

// get player input from mouse over
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        changeBackGround(box)
    })
})


//  change background color of a box
function changeBackGround(boxElement) {
    boxElement.style.backgroundColor = "black" 

}

