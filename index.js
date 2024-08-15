const bill = document.querySelector(".bill-input");
let billValue = NaN;

const people = document.querySelector(".people-input");
let peopleValue = NaN;

const tip = document.querySelector(".tip-input");
let tipValue = NaN;

const tipBtns = document.querySelectorAll(".tip-btn");
const resetBtn = document.querySelector(".reset-btn");

// Handle click on the tip buttons
tipBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tipBtns.forEach((btn) => {
      btn.classList.remove("checked");
    });
    e.target.classList.add("checked");
    tipValue = parseInt(e.target.innerHTML);
    document.querySelector(".tip-input").value = "";
    checkInputs();
  });
});

// Get bill input value from user and convert it to number
bill.addEventListener("input", (e) => {
  billValue = parseFloat(e.target.value) || NaN;
  checkInputs();
});

// Get people input value from user and convert it to number
people.addEventListener("input", (e) => {
    peopleValue = parseInt(e.target.value) || NaN;
    // if (peopleValue === 0) {
    //   errorMessage.style.display = "block";
    // } else {
    //   errorMessage.style.display = "none";
    // }
    checkInputs();
  });

// Get tip input value from user and convert it to number
tip.addEventListener("input", (e) => {
  tipValue = parseFloat(e.target.value) || NaN;
  tipBtns.forEach((btn) => {
    btn.classList.remove("checked");
  });
  checkInputs();
});

// Calculate tip
function calculateTip() {
  if (peopleValue === 0) {
    alert("Number of people cannot be zero.");
    return;
  }
  let tipAmount = (billValue * tipValue) / 100 / peopleValue;
  let total = (billValue * (1 + tipValue / 100)) / peopleValue;
  document.querySelector(".tip-amount-amount").innerHTML = `$${tipAmount.toFixed(2)}`;
  document.querySelector(".total-amount").innerHTML = `$${total.toFixed(2)}`;
}

// Check if bill, people, and tip input are valid numbers
function checkInputs() {
  if (isNaN(billValue) || isNaN(peopleValue) || isNaN(tipValue) || peopleValue <= 0) {
    resetBtn.style.opacity = "0.5";
    resetBtn.disabled = true;
    document.querySelector(".tip-amount-amount").innerHTML = `$0.00`;
  document.querySelector(".total-amount").innerHTML = `$0.00`;
  } else {
    resetBtn.style.opacity = "1";
    resetBtn.disabled = false;
    calculateTip();
  }
}

// Handle reset button click
resetBtn.addEventListener("click", () => {
  billValue = NaN;
  peopleValue = NaN;
  tipValue = NaN;
  bill.value = '';
  people.value = '';
  tip.value = '';
  tipBtns.forEach((btn) => btn.classList.remove("checked"));
  document.querySelector(".tip-amount-amount").innerHTML = `$0.00`;
  document.querySelector(".total-amount").innerHTML = `$0.00`;
  resetBtn.style.opacity = "0.5";
  resetBtn.disabled = true;
});
