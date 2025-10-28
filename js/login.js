const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("button was click");
  const mobileNumber = document.getElementById('mobile-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  
  if(mobileNumber === "1234" && pinNumber === "1234"){
    console.log("You are login");
    window.location.href = "home.html"
  }else{
    alert("Wrong phone number or pin");
  }

})