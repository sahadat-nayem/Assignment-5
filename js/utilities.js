function getInputFirldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFirldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('noakhali-form').classList.add('hisdden');
    document.getElementById('history-section').classList.add('hidden');
    
    // Show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}


