const calculateExpense = () => {
 const income = document.querySelector("#income").value;
 const food = document.querySelector("#food").value;
 const rent = document.querySelector("#rent").value;
 const clothes = document.querySelectorAll("#clothes")[0].value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    document.querySelector("#income").value = "";
    document.querySelector("#food").value = "";
    document.querySelector("#rent").value = "";
    document.querySelectorAll("#clothes")[0].value = "";
    return;
  }
  // calculate expense
  const expense =
    parseInt(food) + parseInt(rent) + parseInt(clothes);

  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");

    document.querySelector("#income").value = "";
    document.querySelector("#food").value = "";
    document.querySelector("#rent").value = "";
    document.querySelectorAll("#clothes")[0].value = "";
    return;
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;

    document.querySelector("#income").value = "";
    document.querySelector("#food").value = "";
    document.querySelector("#rent").value = "";
    document.querySelectorAll("#clothes")[0].value = "";
  }
 

};

const calculateSavings = () => {
  const income = document.querySelector("#income").value;
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");

    document.querySelector("#income").value = "";
    document.getElementById("save").value = "";
    return;
  }
  const savingAmountPrimary = (savePercentage / 100) * income;
  const savingAmount = savingAmountPrimary.toFixed(2);
  // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
    
    document.querySelector("#income").value = "";
    document.getElementById("save").value = "";
    document.querySelector("#food").value = "";
    document.querySelector("#rent").value = "";
    document.querySelectorAll("#clothes")[0].value = "";
    return;
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
    

    document.getElementById("save").value = "";
    document.querySelector("#food").value = "";
    document.querySelector("#rent").value = "";
    document.querySelectorAll("#clothes")[0].value = "";
  }

};

