const topDiv = document.querySelector('#top')
const secDiv = document.querySelector('#two')
const thdDiv = document.querySelector('#three')
const frthDiv = document.querySelector('#four')
const fthDiv = document.querySelector('#five')
const sixDiv = document.querySelector('#six')
const sevDiv = document.querySelector('#seven')
const eigDiv = document.querySelector('#eight')
const ninDiv = document.querySelector('#nine')
const tenDiv = document.querySelector('#ten')
const eleDiv = document.querySelector('#eleven')
const twvDiv = document.querySelector('#twelve')
const thrDiv = document.querySelector('#thirteen')
const button = document.querySelector('button')

randomInt = (x) => {
    const rand = Math.floor(Math.random() * x)
    return rand
}

button.onclick = function() { 
    for (let i = 0; i < 13; i++){
    const r = randomInt(256)
    const g = randomInt(256)
    const b = randomInt(256)
    document.getElementById(`#${i}`).style.backgroundColor = `rgb(${r},${g},${b})`

    }
}
