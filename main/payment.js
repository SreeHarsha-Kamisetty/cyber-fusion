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

function validateDeliveryForm() {
  // Get the values of the input fields
  var emailValue = document.getElementById("formGroupExampleInput").value;
  var firstNameValue = document.getElementById("firstName").value;
  var lastNameValue = document.getElementById("lastName").value;
  var countyValue = document.getElementById("exampleSelect").value;
  var addressValue = document.getElementById("formGroupExampleInput1").value;
  var cardValue = document.getElementById("rCard").value;
  var cvvValue = document.getElementById("rcvv").value;
  var phoneValue = document.getElementById("Phone").value;
  var dobValue = document.getElementById("d-o-b").value;

  // Checking if any of the required fields are empty
  if (
    emailValue === "" ||
    firstNameValue === "" ||
    lastNameValue === "" ||
    countyValue === "Choose a county" ||
    addressValue === "" ||
    cardValue === "" ||
    cvvValue === "" ||
    phoneValue === "" ||
    dobValue === ""
  ) {
    alert("All * fields are mandatory. Please fill in all required fields.");
  } else {
    alert("Payment  successful!");
  }
}

// Script for the payment section
let payment_desc = document.getElementById('payment-desc');
let payment_price = document.getElementById('payment-price');
console.log(payment_desc.innerText)
console.log(payment_price.innerText)

// checking which hotel card is checked
let total_price = document.getElementById('total-price');
let checkbox_2 = document.getElementById('rcheckbox-2');
let checkbox_2_text = document.getElementById('rcheckbox-2-text');
let checkbox_2_price = document.getElementById('rcheckbox-2-price');
checkbox_2.addEventListener('click',()=>{
  console.log(checkbox_2.checked)
  if(checkbox_2.checked){
    checkbox_3.checked = false;
    checkbox_4.checked = false;
    payment_desc.innerText = checkbox_2_text.innerText;
    payment_price.innerText = checkbox_2_price.innerText;
    total_price.innerText = checkbox_2_price.innerText;
  }
})

let checkbox_3 = document.getElementById('rcheckbox-3');
let checkbox_3_text = document.getElementById('rcheckbox-3-text');
let checkbox_3_price = document.getElementById('rcheckbox-3-price');
checkbox_3.addEventListener('click',()=>{
  console.log(checkbox_3.checked)
  if(checkbox_3.checked){
    checkbox_2.checked = false
    checkbox_4.checked = false
    payment_desc.innerText = checkbox_3_text.innerText;
    payment_price.innerText = checkbox_3_price.innerText;
    total_price.innerText = checkbox_3_price.innerText;
  }
})

let checkbox_4 = document.getElementById('rcheckbox-4');
let checkbox_4_text = document.getElementById('rcheckbox-4-text');
let checkbox_4_price = document.getElementById('rcheckbox-4-price');
checkbox_4.addEventListener('click',()=>{
  console.log(checkbox_4.checked)
  if(checkbox_4.checked){
    checkbox_2.checked = false;
    checkbox_3.checked = false;
    payment_desc.innerText = checkbox_4_text.innerText;
    payment_price.innerText = checkbox_4_price.innerText;
    total_price.innerText = checkbox_4_price.innerText;
  }
})
