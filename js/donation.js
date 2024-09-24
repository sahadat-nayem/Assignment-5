
document.getElementById('btn-noakhali-donate-now').addEventListener('click',function(){
    const noakhaliAmount = getInputFirldValueById("input-donate-noakhali")
    const BalanceAmount = getTextFirldValueById('donation-balance-noakhali');
    const totalAmount = BalanceAmount + noakhaliAmount;
    const fristBalance = getTextFirldValueById('total-balance');
    const totalBalance = fristBalance  -  totalAmount;

     if(noakhaliAmount <= 0 || isNaN( noakhaliAmount)){
        alert('Failed to Donation');
        return;
    }

    document.getElementById('donation-balance-noakhali').innerText = totalAmount;
    document.getElementById('total-balance').innerText = totalBalance;
    
    
      
  });


document.getElementById('btn-feni-donate-now').addEventListener('click',function(){
    const noakhaliAmount = getInputFirldValueById("input-donate-feni")
    const BalanceAmount = getTextFirldValueById('donation-balance-feni');
    const totalAmount = BalanceAmount + noakhaliAmount;
    const fristBalance = getTextFirldValueById('total-balance');
    const totalBalance = fristBalance  -  totalAmount;

     if(noakhaliAmount <= 0 || isNaN( noakhaliAmount)){
        alert('Failed to Donation');
        return;
    }

    document.getElementById('donation-balance-feni').innerText = totalAmount;
    document.getElementById('total-balance').innerText = totalBalance;
    
    
      
  });


document.getElementById('btn-quota-donate-now').addEventListener('click',function(){
    const noakhaliAmount = getInputFirldValueById("input-donate-quota")
    const BalanceAmount = getTextFirldValueById('donation-balance-quota');
    const totalAmount = BalanceAmount + noakhaliAmount;
    const fristBalance = getTextFirldValueById('total-balance');
    const totalBalance = fristBalance  -  totalAmount;

     if(noakhaliAmount <= 0 || isNaN( noakhaliAmount)){
        alert('Failed to Donation');
        return;
    }

    document.getElementById('donation-balance-quota').innerText = totalAmount;
    document.getElementById('total-balance').innerText = totalBalance;
    
    
      
  });


  const Btn = document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = '/blog.html';
  });

  const historyTab = document.getElementById('show-history');
  const donationTab = document.getElementById('show-donation');
  const noakhaliForm = document.getElementById('noakhali-form')
  historyTab.addEventListener('click', function(){
    historyTab.classList.add(
        "bg-[#B4F461]"
      );

    donationTab.classList.remove(
        "bg-[#B4F461]"
    );

  });