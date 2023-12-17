function checkUserLogin(){
    if(localStorage.getItem("login")=="true"){
     user_name = localStorage.getItem('user_name')
     let newUserp = document.getElementById("pright");
      newUserp.innerHTML = `<div><span id="user-image-pr" class="usericonn"><button id="logout-btnp"> ${user_name}</button></span></div>`;
      let logoutp = document.getElementById("logout-btnp");
      logoutp.addEventListener("click",(e)=>{
       // e.preventDefault();
       console.log(e);
       logoutUser();
     })
    }
  }
  checkUserLogin();