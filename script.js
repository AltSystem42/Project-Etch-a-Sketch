const container = document.querySelector('.container')
const changeGridSize = document.querySelector(`.changegridsize`)
const reset = document.querySelector(".reset")
const rainbowButton = document.querySelector(".rainbow")


container.style.maxWidth = "400px"
let gridSize = 100
let rainbow = false;
let opacity = 0;
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
//make a listening event for rainbow button
rainbowButton.addEventListener('click', () => {
    if (rainbow === false){
        rainbow = true
    }   else {
        rainbow = false
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
    if(rainbow === true)
    {
        boxElement.style.backgroundColor = `rgb(${getRandomColorNumber()}, ${getRandomColorNumber()}, ${getRandomColorNumber()})`
        boxElement.style.opacity = getOpacityCounter() + "%";
    } else {
        boxElement.style.backgroundColor = `black`
        boxElement.style.opacity = "100%"
    }
}
// change the opacity counter
function getOpacityCounter() {
    if(opacity == 100){
        opacity = 0
        return 0
    } else {
        opacity += 10
        return opacity;
    }
    
}
//get randomnumber from 0 to 255
function getRandomColorNumber() {
    return  Math.floor(Math.random() * (255 - 0 + 1))
}