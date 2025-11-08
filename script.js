const container = document.querySelector('.container')
const changeGridSize = document.querySelector(`.changegridsize`)
const reset = document.querySelector(".reset")
container.style.maxWidth = "400px"
let gridSize = 100
buildGrid(gridSize)

function buildGrid(boxCount) {
  const fragment = document.createDocumentFragment()
  for (let j = 0; j < boxCount; j++) {
    const column = document.createElement('div')
    column.classList.add(`column${j}`, 'column')

    for (let i = 0; i < boxCount; i++) {
      const box = document.createElement('div')
      box.classList.add(`box${i}${j}`, 'box')
      column.appendChild(box)
    }

    fragment.appendChild(column)
  }

  container.innerHTML = '' // clear old grid
  container.appendChild(fragment)
}

//button to choose what size of grid you want
changeGridSize.addEventListener('click', () => {
    
    gridSize = parseInt(prompt('Size of new grid'))
    if (gridSize > 100 || isNaN(gridSize)){
        alert("Error too big")
    } else {
    let px = (gridSize * 4) + "px"
    container.style.maxWidth = px;
    buildGrid(gridSize)
    }
})

//reset event listener button
reset.addEventListener('click', () => {
    buildGrid(gridSize)
})

//mouseover event for changing background color of boxes
container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('box')) {
    changeBackGround(e.target)
  }
})


//  change background color of a box
function changeBackGround(boxElement) {
    boxElement.style.backgroundColor = "black" 
}
