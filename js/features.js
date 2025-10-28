// Button 
const showAddMoney = document.getElementById('show-add-money');
const showCashOut = document.getElementById('show-cash-out');
const showTransections = document.getElementById('show-transection');

//Container
const addMoneyContainer = document.getElementById('add-money-container');
const cashOutContainer = document.getElementById('cash-out-container');
const transectionContainer = document.getElementById('transection-container');

showAddMoney.addEventListener('click', (e) => {
  e.preventDefault();
  addMoneyContainer.classList.remove('hidden');
  cashOutContainer.classList.add('hidden');
  transectionContainer.classList.add('hidden')
})
showCashOut.addEventListener('click', (e) => {
  e.preventDefault();
  addMoneyContainer.classList.add('hidden');
  transectionContainer.classList.add('hidden')
  cashOutContainer.classList.remove('hidden');
})
showTransections.addEventListener('click', (e) => {
  e.preventDefault();
  transectionContainer.classList.remove('hidden');
  addMoneyContainer.classList.add('hidden');
  cashOutContainer.classList.add('hidden');
  
})