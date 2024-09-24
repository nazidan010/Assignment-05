document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();
    const inputMoney=getInputFieldValueById('input-money');
   
    const donatBalance=getTextFieldValueById('donate-balance');
    
    const mainAccount=getTextFieldValueById('main-account');
    
    if(inputMoney>donatBalance){
        alert('Un Available Balance');
        if(isNaN===inputMoney){
            alert('Please! Input a Valid Number');
            
        }
        const additionBalance=[mainAccount+donatBalance]-donatBalance;
        console.log(additionBalance);
        return additionBalance;
    }
    else{
        
    }
})