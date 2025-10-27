const addMoney = document.getElementById('add-money');
addMoney.addEventListener('click', (e) => {
  e.preventDefault();
  const inputPin = document.getElementById('input-pin').value;
  const inputAmount = document.getElementById('input-amount').value;
  const mainAmount = document.getElementById('main-amount').innerText;

  if(inputPin === '1122'){
    const inputAmountNumber = parseFloat(inputAmount);
    const mainAmountNumber = parseFloat(mainAmount);
    const newAmount = mainAmountNumber + inputAmountNumber;
    document.getElementById('main-amount').innerText = newAmount;
  }else{
    alert("Faild to add money! Please try again.");
  }
})