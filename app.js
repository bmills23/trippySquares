
const button = document.querySelector('button') //unused code for future interactivity

randomInt = (x) => {
    const rand = Math.floor(Math.random() * x); //defines a function which will make random number between 0 and x
    return rand;
}

//functions below this line are where the magic happens

//the function below cycles between all 13 squares simultaneously and changes their border colors and backgrounds to a color
//between purple (rgb(255,0,255)) and blue (rgb(0,0,255))

setInterval(function() {  
    for (let i = 1; i <= 13; i++) {
    const r = randomInt(256) //random number needs to be 256 because 0 is included
    const r2 = randomInt(256) //it's crucial that the border color is changed with a separate # or it'll look too samey
    document.getElementById(`${i}`).style.backgroundColor = `rgb(${r},0,255)`
    document.getElementById(`${i}`).style.borderColor = `rgb(${r2},0,255)`
    }
}, 400) //cycles the function every 400 milliseconds

//the function below cycles between the same colors but for the background color of the webpage

setInterval(function() {
    const r = randomInt(256)
    document.body.style.backgroundColor = `rgb(${r},0,255)`
}, 200) 
