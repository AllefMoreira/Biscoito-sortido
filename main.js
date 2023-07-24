let numberRandom = Math.ceil(Math.random() * 10)
let attemps = 1

const btnTry = document.querySelector('#btnTry')
const again = document.querySelector('#btnAgain')
const screen1 =  document.querySelector('.screen1')
const screen2 =  document.querySelector('.screen2')

//events:
btnTry.addEventListener('click', handleClick) // função callback
btnAgain.addEventListener('click', handleResetClick)// função callback
document.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})

// callback functions:
function handleClick(event){
    event.preventDefault()
    const inputNumber = document.getElementById('inputNumber')

    if(Number(inputNumber.value) == numberRandom){
        toggleScreen()

        screen2.querySelector("p")
            .innerText = `Acertou em ${attemps} tentativas!`  
    }

    inputNumber.value = ''
    attemps++
}
function handleResetClick(){
    toggleScreen()
    attemps = 1
    numberRandom = Math.ceil(Math.random() * 10)
}

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}