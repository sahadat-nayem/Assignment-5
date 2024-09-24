
document.getElementById('btn-noakhali-donate-now').addEventListener('click',function(){
    const noakhaliAmount = getInputFirldValueById("input-donate-noakhali");
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
    
    const div = document.createElement('div');
    div.classList.add('bg-slate-50','border-2', 'p-4');
    div.innerHTML= `
    <p class="text-xl font-bold ">${noakhaliAmount} Taka is Donate for Flood at Noakhali, Bangladesh</p>
    <p>Date :  ${new Date().toLocaleDateString()}  GMT +0600 (Bangladesh Standard Time)</p>
    `
 

  
   document.getElementById('history-section').appendChild(div);
      
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
    
    const div = document.createElement('div');
    div.classList.add('bg-slate-50','border-2', 'p-4');
    div.innerHTML= `
    <p class="text-xl font-bold ">${noakhaliAmount} Taka is Donate for Flood at Noakhali, Bangladesh</p>
    <p>Date :  ${new Date().toLocaleDateString()}  GMT +0600 (Bangladesh Standard Time)</p>
    `
 

  
   document.getElementById('history-section').appendChild(div);
      
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
    
    const div = document.createElement('div');
    div.classList.add('bg-slate-50','border-2', 'p-4');
    div.innerHTML= `
    <p class="text-xl font-bold ">${noakhaliAmount} Taka is Donate for Flood at Noakhali, Bangladesh</p>
    <p>Date :  ${new Date().toLocaleDateString()}  GMT +0600 (Bangladesh Standard Time)</p>
    `
 

  
   document.getElementById('history-section').appendChild(div);
      
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

  donationTab.addEventListener('click', function(){
    donationTab.classList.add(
        "bg-[#B4F461]"
      );

    historyTab.classList.remove(
        "bg-[#B4F461]"
    );

  });
  