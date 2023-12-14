//Login
let plogIn = document.getElementById("loginModal")
let ploginBtn = document.getElementById("plogin")
let passInput = document.getElementById("password");
let shwPass = document.querySelector(".show-password");
let peamail = document.getElementById('email').value;
let password = document.getElementById('password').value; 
let mainSection = document.getElementById("container");
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
    let res = await fetch(`${url}?_limit=5`);
    let data = await res.json();
    renderCard(data);
    console.log(data);
  }
  catch(error){
    console.log(error);
  }
}
fetchData(hotelURL);

function renderCard(data){
  mainSection.innerHTML = "";
  const cardList = document.createElement("div");
  cardList.className = "p-cardlist";
  data.forEach((item)=>{
    let card = createCard(item);
    cardList.append(card);
  })
  mainSection.append(cardList);
}
function createCard(item){
  const card = document.createElement("div");
  card.className = "p-card";

  const image = document.createElement("img");
  image.src = `../APIserver/${item.image}`;
  card.appendChild(image);

  const title = document.createElement("h3");
  title.className = "p-title";
  title.textContent = item.name;
  card.appendChild(title);

  const address = document.createElement("h6");
  address.className = "p-address"
  address.textContent = item.address;
  card.appendChild(address);

  const price = document.createElement("p");
  price.className = "p-price"
  price.textContent = `CHF ${item.price}`;
  card.appendChild(price);

  return card;

}

