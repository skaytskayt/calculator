const text = "Привет, я калькулятор!"

const input = document.querySelector(".input-task")


function setPlaceholder(text){
  input.placeholder = text
}

setPlaceholder(text)






document.addEventListener("keydown", (event) => {
  if (event.key === 'Enter'){
    event.preventDefault()
    calculate(input.value)
  }

  if (event.key >= '0' && event.key <= '9' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '.'){
    input.value += event.key
  }

  if (event.key === 'Backspace'){
    removeOnDisplay()
  }

})



function addOnDisplay(inputNumb){
  input.value += inputNumb
}

function removeOnDisplay(){
  input.value = input.value.slice(0, -1)
}

function calculate(inputExample){
  input.value = eval(inputExample)
}