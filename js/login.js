const buttonLogIN = document.getElementById('button-login');
buttonLogIN.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("button was click");
  const mobileNumber = document.getElementById('mobile-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  
  if(mobileNumber === "1122" && pinNumber === "1122"){
    console.log("You are login");
    window.location.href = "home.html"
  }else{
    alert("Wrong phone number or pin");
  }

})