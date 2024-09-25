// Donate NoaKhali
document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();
    const inputMoney=getInputFieldValueById('input-money');
    // console.log(typeof inputMoney);
   
    const donateBalance=getTextFieldValueById('donate-balance');
    
    const mainAccount=getTextFieldValueById('main-account');
    
    if(isNaN(inputMoney)===false){
        // if(isNaN===inputMoney){
        //     alert('');
        // }
        const additionBalance=donateBalance+parseFloat(inputMoney);
        document.getElementById('donate-balance').innerText=additionBalance;
        my_modal_1.showModal()
        //Display Subtraction with Main balance Noakhali Section
        const subtractionBalance=mainAccount-inputMoney;
        document.getElementById('main-account').innerText=subtractionBalance;
        
    }
    else{
        
    }
});
//Donate For feni
document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();
    const inputMoneyFeni=getInputFieldValueById('input-money-feni');
    console.log(inputMoneyFeni);
   
    const donateBalanceFeni=getTextFieldValueById('donate-balance-feni');
    
    const mainAccount=getTextFieldValueById('main-account');
    
    if(isNaN(inputMoneyFeni)===false){
        // if(isNaN===inputMoney){
        //     alert('');
        // }
        const additionBalanceFeni=donateBalanceFeni+parseFloat(inputMoneyFeni);
        document.getElementById('donate-balance-feni').innerText=additionBalanceFeni;
        my_modal_1.showModal()
        
        //Display Subtraction with Main balance Feni Section
        const subtractionBalanceFeni=mainAccount-inputMoneyFeni;
        document.getElementById('main-account').innerText=subtractionBalanceFeni;
        
    }
    else{
        
    }
});
//Donate For Quota Movement
document.getElementById('btn-donate-quota').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('clicked');
    const inputMoneyQuota=getInputFieldValueById('input-money-quota');
    // console.log(inputMoneyFeni);
   
    const donateBalanceQuota=getTextFieldValueById('donate-balance-quota');
    
    const mainAccount=getTextFieldValueById('main-account');
    
    if(isNaN(inputMoneyQuota)===false){
        // if(isNaN===inputMoney){
        //     alert('');
        // }
        const additionBalanceQuota=donateBalanceQuota+parseFloat(inputMoneyQuota);
        document.getElementById('donate-balance-quota').innerText=additionBalanceQuota;
        my_modal_1.showModal()
        //Display Subtraction with Balance Quota Movement Section
        const subtractionBalanceQuota=mainAccount-inputMoneyQuota;
        document.getElementById('main-account').innerText=subtractionBalanceQuota;
        
    }
    else{
        
    }
});

// Transaction History
const transactionHistory=document.getElementById('p');
transactionHistory.innerText=`Donate: ${inputMoney} Tk. Balance: ${subtractionBalance}`
document.getElementById('btn-history').appendChild(transactionHistory);