//inner Input Field
function getInputFieldValueById(id){
    // Input Field
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
   
    return inputNumber;
}
//Inner Text Field
function getTextFieldValueById(id){
     // Inner Text
     const innerText=document.getElementById(id).innerText;
     const innerValue=parseFloat(innerText);
     return innerValue;
}