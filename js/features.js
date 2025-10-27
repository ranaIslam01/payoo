const showAddMoney = document.getElementById('show-add-money');
const showCashOut = document.getElementById('show-cash-out');
const addMoneyContainer = document.getElementById('add-money-container');
const cashOutContainer = document.getElementById('cash-out-container');
showAddMoney.addEventListener('click', (e) => {
  e.preventDefault();
  addMoneyContainer.classList.remove('hidden');
  cashOutContainer.classList.add('hidden');
})
showCashOut.addEventListener('click', (e) => {
  e.preventDefault();
  addMoneyContainer.classList.add('hidden');
  cashOutContainer.classList.remove('hidden');
})