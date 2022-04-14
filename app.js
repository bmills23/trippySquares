const topDiv = document.querySelector('#top');
const button = document.querySelector('button')

randomInt = (x) => {
    const rand = Math.floor(Math.random() * x);
    return rand;
}

button.onclick = setInterval(function() { 
    const r = randomInt(256)
    const g = randomInt(256)
    const b = randomInt(256)
    topDiv.style.backgroundColor = `rgb(${r},${g},${b})`
    }, 250);

