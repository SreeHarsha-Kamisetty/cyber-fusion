let sendMsgBtn = document.getElementById("msgSendBtn");
let msgEmail = document.getElementById("msgemail");
let msgName = document.getElementById("msgname");
let msgText = document.getElementById("msgtext");

sendMsgBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    alert("Message sent");
    msgEmail.value="";
    msgName.value="";
    msgText.value="";
})