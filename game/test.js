let divs = document.querySelectorAll('.div');

divs.forEach(div => {
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.borderRadius = '100%';
    div.style.background = 'radial-gradient(circle, red, rgba(0, 0, 0, 0))';
    div.style.border = '2px solid black';
});

setInterval(() => {
    let randomDiv = divs[Math.floor(Math.random() * divs.length)];
    randomDiv.style.boxShadow = '0 0 5px 2px red';

    setTimeout(() => {
        randomDiv.style.boxShadow = 'none';
    }, 300);
}, 500);