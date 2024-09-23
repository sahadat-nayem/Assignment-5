
document.getElementById('btn-noakhali-donate-now').addEventListener('click',function(){
    const noakhaliAmount = getInputFirldValueById("input-donate-noakhali")
    const BalanceAmount = getTextFirldValueById('donation-balance');
    const totalAmount = BalanceAmount + noakhaliAmount;
    const fristBalance = getTextFirldValueById('total-balance');
    const totalBalance = fristBalance  -  totalAmount;

     if(isNaN(noakhaliAmount)){
        alert('Fild to add money');
        return;
    }

    document.getElementById('donation-balance').innerText = totalAmount;
    document.getElementById('total-balance').innerText = totalBalance;;
  
    if(noakhaliAmount <= 0){
        alert('File to Donation');
    }
    
    
      
  });

  const historyTab = document.getElementById('show-history');
  const donationTab = document.getElementById('show-donation');
  historyTab.addEventListener('click', function(){
    historyTab.classList.add(
        "bg-[#B4F461]"
      );

    donationTab.classList.remove(
        "bg-[#B4F461]"
    );
  });