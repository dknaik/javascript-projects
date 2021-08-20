const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let num = 0;
let hex1 = 0;
btn.addEventListener("click", function () {
  let hex1 = "#";
  for (let i = 0; i < 6; i++) {
    hex1 += hex[getRandomNumber()];
    // console.log(randomNmuber);
    color.textContent = hex1;
    document.body.style.backgroundColor = hex1;
  }
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
console.log(hex1);

// return Math.floor(Math.random()*colors.length);
