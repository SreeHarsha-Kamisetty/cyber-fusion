//Login
let plogIn = document.getElementById("loginModal")
let ploginBtn = document.getElementById("plogin")
let passInput = document.getElementById("password");
let shwPass = document.querySelector(".show-password");
let peamail = document.getElementById('email').value;
let password = document.getElementById('password').value; 

function openLogin(){
    plogIn.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeLoginModal(){
    plogIn.style.display = 'none';
    document.body.style.overflow = 'auto';
}
ploginBtn.addEventListener("click",openLogin);
// Password
function togglePassword(){
  if(passInput.type === 'password'){
    passInput.type = 'text';
    shwPass.textContent = 'Hide';
  }else{
    passInput.type = 'password';
    shwPass.textContent = 'Show';
  }
}

function performLogin(){
  console.log(peamail);
  console.log(password);
  closeLoginModal();

}
let pregistration = document.getElementById('registrationPage');
function showRegistrationPage() {
    plogIn.style.display = 'none';
    pregistration.classList.remove('hidden');
    pregistration.style.display = 'block';

    document.body.style.overflow = 'hidden';
  }

  function showLoginForm() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('registrationPage').classList.add('hidden');
    document.body.style.overflow = 'hidden'; 
  }
  document.getElementById('createAccountBtn').addEventListener('click', showRegistrationPage);
  function closeRegForm(){
    pregistration.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Bottom cards----Top offers--

let hotelURL = "https://apicyberfusion.onrender.com/hotels";
async function fetchData(url){
  try{
    let res = await fetch(`${url}?_limit=20`);
    let data = await res.json();
    renderCard(data);
  }
  catch(error){
    console.log("error");
  }
}
fetchData(hotelURL);

function renderCard(item){
  let card = document.createElement("div");
}

