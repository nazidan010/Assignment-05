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
        // console.log(additionBalance);
        // return additionBalance;
        
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
        // console.log(additionBalance);
        // return additionBalance;
        
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
        // console.log(additionBalance);
        // return additionBalance;
        
    }
    else{
        
    }
});



// History Button >>>
// document.getElementById('btn-history').addEventListener('click', function(event){
//     event.preventDefault();
//     //Balance Display>>>>
//     const balanceDisplay=document.createElement('p');
//     balanceDisplay.innerText=`Cash In: ${btn-history} Tk. Balance ${additionBalance}`
//     document.getElementById('donate-balance').appendChild(balanceDisplay);
// });