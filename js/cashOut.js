const cashOutBtn = document.getElementById("cash-out-btn");

cashOutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const cashOutPin = document.getElementById("cash-out-pin").value;
  const cashOutAmount = document.getElementById("cash-out-amount").value;

  const inputAmountNumber = parseFloat(cashOutAmount);
  const mainAmountElement = document.getElementById("main-amount");
  const mainAmountNumber = parseFloat(mainAmountElement.innerText);

  if (cashOutPin === "1234" && inputAmountNumber > 0 && mainAmountNumber >= inputAmountNumber) {
    // Cash Out
    const newAmount = mainAmountNumber - inputAmountNumber;
    mainAmountElement.innerText = newAmount;

    // Transaction History
    const transectionContainer = document.getElementById("prependId");
    const p = document.createElement("p");
    p.className = "p-4 mt-4 text-center bg-gray-700 border border-gray-300 rounded-xl";
    p.innerText = `Cash Out ${inputAmountNumber} Tk | New Amount ${newAmount} Tk`;
    transectionContainer.prepend(p);
  } else {
    alert("Failed to cash out! Please try again.");
  }

  // Clear input fields
  document.getElementById("cash-out-pin").value = "";
  document.getElementById("cash-out-amount").value = "";
});
