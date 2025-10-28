const addMoney = document.getElementById('add-money');

addMoney.addEventListener('click', (e) => {
  e.preventDefault();

  const inputPin = document.getElementById('input-pin').value;
  const inputAmount = document.getElementById('input-amount').value;

  const inputAmountNumber = parseFloat(inputAmount);
  const mainAmountElement = document.getElementById('main-amount');
  const mainAmountNumber = parseFloat(mainAmountElement.innerText);

  if (inputPin === '1234' && inputAmountNumber > 0) { 
    // Add Money 
    const newAmount = mainAmountNumber + inputAmountNumber;
    mainAmountElement.innerText = newAmount;

    // Trasection History 
    const transectionContainer = document.getElementById('prependId');
    const p = document.createElement('p');
    p.className = "p-4 mt-4 text-center bg-gray-700 border border-gray-300 rounded-xl";
    p.innerText = `Added ${inputAmountNumber} Tk | New Amount ${newAmount} Tk`;
    transectionContainer.prepend(p);

  } else {
    alert("Failed to add money! Please try again.");
  }

  document.getElementById('input-pin').value = '';
  document.getElementById('input-amount').value = '';
});
