const colors = ["green", "red", "yellow"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  console.log(document.body);
  const randomNmuber = getRandomnumber();
  console.log(randomNmuber);
  document.body.style.backgroundColor = colors[randomNmuber];
  color.textContent = colors[randomNmuber];
  // for(let i=0;i<=3;i++){
  // randomNmuber =randomNmuber+ Math.round(Math.random()*3);
  // }
  // console.log(randomNmuber);
});
function getRandomnumber() {
  return Math.floor(Math.random() * colors.length);
}
