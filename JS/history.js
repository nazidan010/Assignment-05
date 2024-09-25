//Donation Button
document.getElementById('btn-donation').addEventListener('click', function(){
    document.getElementById('noaKhali-page').classList.remove('hidden');
    document.getElementById('feni-page').classList.remove('hidden');
    document.getElementById('quota-page').classList.remove('hidden');
    document.getElementById('footer-section').classList.remove('hidden');
});
//History Button
document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById('noaKhali-page').classList.add('hidden');
    document.getElementById('feni-page').classList.add('hidden');
    document.getElementById('quota-page').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('footer-section').classList.add('hidden');
});
