const text = "Привет, я калькулятор!"
let text1 =''

let cursor = document.createElement('span')
cursor.className = 'cursor'
cursor.textContent = "|"


let index = 0

const input = document.querySelector(".input-task")


const p = document.querySelector('.greetings')


function symbolOutPut(){
  if (index < text.length){
    text1 += text[index]
    p.textContent = text1
    p.append(cursor)
    index ++
    setTimeout(symbolOutPut, 100)
  }
}

symbolOutPut()







document.addEventListener("keydown", (event) => {

  if (event.key === 'Enter'){
    event.preventDefault()
    calculate(input.value)
  }

  if (event.key >= '0' && event.key <= '9'){
    let preDisplay = input.value
    let lastOperIndex = findLastOperatorIndex(preDisplay)
    let numbPart = preDisplay.slice(lastOperIndex + 1).split(' ').join('')
    numbPart += event.key
    numbPart = String(Number(numbPart).toLocaleString('en').replaceAll(',', ' '))
    input.value = preDisplay.slice(0, lastOperIndex + 1) + numbPart

  }
  

  if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '.'){
    input.value += event.key
    
  }

  if (event.key === 'Backspace'){
    removeOnDisplay()
  }

})




function findLastOperatorIndex(str){
  let operators = ['+', '-', '*', '/', '.']
  let lastOperIndex = -1
  operators.forEach((char) => {
    let index = str.lastIndexOf(char)
    if (index > lastOperIndex){
      lastOperIndex = index
    }
  })
  return lastOperIndex
}




function addOnDisplay(inputNumb){
  if (inputNumb >= '0' && inputNumb <= '9'){
    let preDisplay = input.value
    let lastOperIndex = findLastOperatorIndex(preDisplay)
    let numbPart = preDisplay.slice(lastOperIndex + 1).split(' ').join('')
    numbPart += inputNumb
    numbPart = String(Number(numbPart).toLocaleString('en').replaceAll(',', ' '))
    input.value = preDisplay.slice(0, lastOperIndex + 1) + numbPart
  }

  if (['+', '-', '*', '/', '.'].includes(inputNumb)){
    input.value += inputNumb
  }

}

function removeOnDisplay(){
  input.value = input.value.trim().slice(0, -1)
}

function calculate(inputExample){
  let countInput = inputExample.split(' ').join('')
  input.value = eval(countInput).toLocaleString('en').replaceAll(',', ' ')
}



