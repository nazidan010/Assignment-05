//inner Input Field
function getInputFieldValueById(id){
    // Input Field
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    // const inputNumber=isNaN(inputValue);
    return inputNumber;
}
//Inner Text Field
function getTextFieldValueById(id){
     // Inner Text
     const innerText=document.getElementById(id).innerText;
     const innerValue=parseFloat(innerText);
     return innerValue;
}
//Button Part
// function ShowSectionById(id){
//     document.getElementById('btn-donation').classList.add('hidden');
    
//     document.getElementById('btn-history').classList.add('hidden');
    
//     document.getElementById(id).classList.remove('hidden');
// }