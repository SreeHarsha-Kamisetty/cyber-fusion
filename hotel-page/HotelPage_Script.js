// logn and Membership     Start------>
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

// Login and memberShip   end----->



// Card creation   start ---->

let hotelURL = "https://apicyberfusion.onrender.com/hotels";
let container=document.getElementsByClassName("a-container");
let pagination=document.getElementsByClassName("a-pagination");

fetchData(hotelURL, 1);

async function fetchData(url, pageNo,qparams=""){
    try{
        let res=await fetch(`${url}?_limit=8&_page=${pageNo}${qparams}`);
        let totalPost=res.headers.get("X-Total-Count");
        let totalbtns=Math.ceil(totalPost/8);

        pagination.innerHTML=null;
        for(let i=1; i<=totalbtns; i++){
            pagination[0].append(getAsButton(i,qparams));
        }

        let data=await res.json();
        console.log(data);
        CreateCards(data);
    }
    catch(error){
        console.log(error);
    }
};


function CreateCards(data){
    container.innerHTML="";
    data.forEach((element)=>{
        let cardContainer=document.createElement("div");
        cardContainer.setAttribute("class", "horizontal-card");

        let image=document.createElement("img");
        image.setAttribute("class", "card-img");
        image.alt="Card Image";
        image.src=`../APIserver/${element.image}`;

        let cardDetails=document.createElement("div");
        cardDetails.setAttribute("class", "card-details");

        let h1=document.createElement("h1");
        h1.setAttribute("class", "card-title");
        h1.textContent=element.name;

        let small=document.createElement("small");
        small.setAttribute("class", "card-text");
        small.textContent=element.address;

        let p1=document.createElement("p");
        p1.setAttribute("class", "card-text");
        let discount=document.createElement("button");
        discount.setAttribute("class", "bg-danger");
        discount.textContent=`Discount: ${element.discount*100}%`;
        p1.appendChild(discount);

        let p2=document.createElement("p");
        p2.setAttribute("class", "card-text");
        let s=document.createElement("s");
        s.textContent=`Original Price: CHF ${element.price*2}`;
        p2.appendChild(s);

        let p3=document.createElement("p");
        p3.setAttribute("class", "card-text");
        p3.textContent=`Book now for: CHF ${element.price}`;
        

        let p4=document.createElement("p");
        p4.setAttribute("class", "card-text");
        p4.textContent=`Rating: ${element.rating}`;

        let h4=document.createElement("h4");
        h4.setAttribute("class", "card-text");
        h4.textContent=`Region: ${element.region}`;

        let h3=document.createElement("h3");
        h3.setAttribute("class", "card-text");
        h3.textContent=`Country: ${element.country}`;
        
        let book = document.createElement('button');
        book.className = "page-item"
        book.setAttribute('class','book-button');
        book.innerText = "Book Now"

        cardDetails.append(h1, small, p1, p2, p3, p4, h4, h3,book);

        let hr1=document.createElement("hr");

        cardContainer.append(image, cardDetails, hr1);

        let hr2=document.createElement("hr");

        container[0].append(cardContainer, hr2);
    });
}


function getAsButton(text,qparams){
    let btn=document.createElement("button");
    btn.setAttribute("data-id", text);
    btn.setAttribute("class", "a-each-button");
    btn.textContent=text;

    btn.addEventListener("click", (e)=>{
      container[0].innerHTML =  ""
      pagination[0].innerHTML = ""
        fetchData(hotelURL, e.target.dataset.id,qparams);
    });
    return btn;
}
// Sorting and filtering 

let sort = document.getElementById('h-sort-by');

sort.addEventListener('click',()=>{
  
  if(sort.value != 'default' && sort.value == "price-low-to-high"){
    pagination[0].innerHTML = ""
    container[0].innerHTML = ""
    fetchData(hotelURL,1,'&_sort=price&_order=asc');
    
  }
  if(sort.value != 'default' && sort.value == "price-high-to-low"){
    pagination[0].innerHTML = ""
    container[0].innerHTML = ""
    fetchData(hotelURL,1,'&_sort=price&_order=desc');
    
  }
  if(sort.value != 'default' && sort.value == "rating-low-to-high"){
    pagination[0].innerHTML = ""
    container[0].innerHTML = ""
    pagination[0].innerHTML = ""
    container[0].innerHTML = ""
    fetchData(hotelURL,1,'&_sort=rating&_order=asc');
   
  }
  if(sort.value != 'default' && sort.value == "rating-high-to-low"){
    pagination[0].innerHTML = ""
    container[0].innerHTML = ""
    fetchData(hotelURL,1,'&_sort=rating&_order=desc');
  }

})