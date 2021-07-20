const billInput= document.getElementById('bill-input');
const tipButtons= document.querySelectorAll('.tip-btn');
const tipValue= document.getElementById('custom-tip');
const numPeople= document.getElementById('number-of-people');
const tipAmount= document.getElementById('tip-amount-value');
const totalAmount= document.getElementById('total-amount-value');
const resetBtn= document.getElementById('btn');



let tipFraction= 0;

tipButtons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        tipFraction= Number(e.target.value);
    });
});

const clacTips= (tip)=>{
    let bill= Number(billInput.value);
    let numPeopleValue= Math.round(Number(numPeople.value,2));
    let tipAmountValue=Math.round(Number(bill*tip),2);
    let amount= Math.round((bill+tipAmountValue)/numPeopleValue);
    tipAmount.innerHTML=`$${Math.round(tipAmountValue / numPeopleValue)}`;
    totalAmount.innerHTML=`$${amount}`;
};

numPeople.addEventListener("keypress", (e)=>{
    resetBtn.disabled=false;
    if (e.key==='Enter'){
        if (numPeople.value==='0'){
            document.getElementById('warn').style.display='block';
        }
        else{
            clacTips(tipFraction || tipValue);
            document.getElementById('warn').style.display='none';
        }
    }
});

numPeople.addEventListener("focus", ()=>{
    if (numPeople.value==='0'){
        numPeople.style.borderColor='hsl(0, 100%, 60%)';
    }
    else{
        numPeople.style.borderColor='hsl(185, 41%, 84%)';
    } 
})

resetBtn.addEventListener("click", ()=>{
    billInput.value='';
    tipValue.value='';
    numPeople.value='';
    tipAmount.innerHTML='$0.00';
    totalAmount.innerHTML='$0.00';
    document.getElementById('warn').style.display='none';
})
