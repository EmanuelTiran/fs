const myArray = ["div-red", "div-blue", "div-yellow", "div-green"];

var ranArr = [];

let randomCell;
var c = 1;
for (let i = 0; i < c; i++) {
  let randomCell = myArray[Math.floor(Math.random() * myArray.length)];
  ranArr[i] = randomCell;
  let redBut = document.getElementById(randomCell);
  redBut.style.backgroundColor = '#FF0';
  setTimeout(() => {
    redBut.style.backgroundColor = '';
  }, 1000);


  document.body.appendChild(redBut);


  redBut.addEventListener('click', () => {
    redBut.style.backgroundColor = '#FF0';
    setTimeout(() => {
      redBut.style.backgroundColor = '';
    }, 1000);
  });

  document.body.appendChild(redBut);
}
c++;
console.log(ranArr)