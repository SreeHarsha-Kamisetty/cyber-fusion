const btn1 = document.querySelector("#rQbtn-r-1");
const btn2 = document.querySelector("#rQbtn-r-2");
const btn3 = document.querySelector("#rQbtn-r-3");
const btn4 = document.querySelector("#rQbtn-r-4");
const btn5 = document.querySelector("#rQbtn-r-5");
const btn6 = document.querySelector("#rQbtn-r-6");
const btn7 = document.querySelector("#rQbtn-r-7");

let list = document.querySelectorAll(".r-Queue");

btn1.addEventListener("click", function () {
  toggleDivVisibility(this.id);
});
btn2.addEventListener("click", function () {
  toggleDivVisibility(this.id);
});
btn3.addEventListener("click", function () {
  toggleDivVisibility(this.id);
});
btn4.addEventListener("click", function () {
  toggleDivVisibility(this.id);
});
btn5.addEventListener("click", function () {
  toggleDivVisibility(this.id);
});
btn6.addEventListener("click", function () {
  toggleDivVisibility(this.id);
});
btn7.addEventListener("click", function () {
  toggleDivVisibility(this.id);
});

function toggleDivVisibility(btnId) {
  const divId = `rQ-${btnId.split("-")[2]}`; // Extract the number from the button ID
  const divToToggle = document.getElementById(divId);

  if (divToToggle.style.display === "none") {
    divToToggle.style.display = "block";
  } else {
    divToToggle.style.display = "none";
  }
}
