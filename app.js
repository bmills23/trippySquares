const topDiv = document.querySelector('#top');
const button = document.querySelector('button')

randomInt = (x) => {
    const rand = Math.floor(Math.random() * x);
    return rand;
}

setInterval(function() {
    for (let i = 1; i <= 13; i++) {
    const r = randomInt(256)
    // const g = randomInt(256)
    // const b = randomInt(256)
    document.getElementById(`${i}`).style.backgroundColor = `rgb(${r},0,255)`
    document.getElementById(`${i}`).style.borderColor = `rgb(${r},0,255)`
    }
}, 400)

