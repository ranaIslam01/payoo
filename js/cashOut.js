const cashOutBtn = document.getElementById('cash-out-btn');
cashOutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const cashOutPin = document.getElementById('cash-out-pin').value;
  const cashOutAmount = document.getElementById('cash-out-amount').value;
  const mainAmount = document.getElementById('main-amount').innerText;

  if(cashOutPin === '1122'){
    const inputAmountNumber = parseFloat(cashOutAmount);
    const mainAmountNumber = parseFloat(mainAmount);
    const newAmount = mainAmountNumber - inputAmountNumber;
    document.getElementById('main-amount').innerText = newAmount;
  }else{
    alert("Faild to add money! Please try again.");
  }
})