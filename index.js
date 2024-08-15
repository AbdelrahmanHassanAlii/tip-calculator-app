const bill = document.querySelector(".bill-input");
let billValue = NaN;

const people = document.querySelector(".people-input");
let peopleValue = NaN;

const tip = document.querySelector(".tip-input");
let tipValue = NaN;

const tipBtns = document.querySelectorAll(".tip-btn");

//handle click on the tip buttons
tipBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        tipBtns.forEach((btn) => {
            btn.classList.remove("checked");
        });
        e.target.classList.add("checked");
        tipValue = parseInt(e.target.innerHTML);
        console.log( "tipValue", tipValue);
    });
});

//get bill input value from user and convert it to number 
bill.addEventListener("input", (e) => {
    billValue = parseInt(e.target.value);
    console.log(billValue);
});

//get people input value from user and convert it to number 
people.addEventListener("input", (e) => {
    peopleValue = parseInt(e.target.value);
    console.log(peopleValue);
});

//get tip input value from user and convert it to number 
tip.addEventListener("input", (e) => {
    tipValue = parseInt(e.target.value);
    console.log( "tipValue", tipValue);
    tipBtns.forEach((btn) => {
        btn.classList.remove("checked");
    })
});


