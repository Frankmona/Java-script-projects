const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random colors from array [0-3]
  const randomNumber = getRandonNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  console.log(randomNumber);
  //   to be pick the color text
  color.textContent = colors[randomNumber];
});

function getRandonNumber() {
  return Math.floor(Math.random() * colors.length);
}
