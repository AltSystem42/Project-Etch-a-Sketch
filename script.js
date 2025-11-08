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
        box.classList.add(`boxRow${i}${j}`)
        box.classList.add("box")
        column.appendChild(box)
        console.log(i)
    }
    console.log(j)
}