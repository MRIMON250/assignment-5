document.getElementById('calculate-button').addEventListener('click',

function(){
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const inputeAmount = parseFloat(incomeAmountText);
    
    // Expenses part 
    const foodInput = document.getElementById('food-input');
    const incomeFoodAmountText = foodInput.value;
    const inputeFoodAmount = parseFloat(incomeFoodAmountText);
  
    const rentInput = document.getElementById('rent-input');
    const ncomeInputeAmountText = rentInput.value;
    const rentInputeAmount = parseFloat(ncomeInputeAmountText);

    const clotheInput = document.getElementById('clothes-input');
    const clotheInputAmountText = clotheInput.value;
    const clotheInputAmount = parseFloat(clotheInputAmountText);
    const totleExpense = inputeFoodAmount + rentInputeAmount + clotheInputAmount;
    const totleBalance = inputeAmount - totleExpense ;

    // totle balance and Expense part 
    const expense = document.getElementById('totle-expenses-amount').innerText = totleExpense;
    const balance = document.getElementById('totle-balance-amount').innerText = totleBalance;  

  });