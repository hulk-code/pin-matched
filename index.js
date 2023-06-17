function getRendomNumber(){
   const rendomRoundnumber =Math.round(Math.random()*10000);
   return rendomRoundnumber;
}

function getFourDigitpin(){
   const pin=getRendomNumber();
   const pinString=pin + ''
   if(pinString.length === 4){
      return pin;
   }
   else{
      return getFourDigitpin();
   }
}

document.getElementById('generate-pin').addEventListener('click',function(){

   const one=getFourDigitpin();
   const displayPin=document.getElementById('display-pin');
   displayPin.value = one;
   
})

document.getElementById('calculator').addEventListener('click',function(event){
   const typedNumberField=document.getElementById('typed-number')
   const pretypedNumber=typedNumberField.value ;
   const number=(event.target.innerText);
   if(isNaN(number)){
      if(number==='C'){
         typedNumberField.value=''
      }
      else if(number==='<'){
         const digit=pretypedNumber.split('');
         digit.pop();
         const remainDigits=digit.join('');
         typedNumberField.value=remainDigits;

      }
      
   }
   else{
      const newTypedNumber=pretypedNumber+number;
      typedNumberField.value= newTypedNumber;
    }

})
document.getElementById('verify-pin').addEventListener('click', function(){
   const displayPin=document.getElementById('display-pin');
   const displayPinValue=displayPin.value ;
   const typedNumberField=document.getElementById('typed-number')
   const pretypedNumber=typedNumberField.value ;
   const pinSuccess=document.getElementById('pin-success')
   const pinFailure=document.getElementById('pin-failure')
   if(displayPinValue===pretypedNumber){
      pinSuccess.style.display='block'
      pinFailure.style.display='none'
      
   }
   else{
     
      pinFailure.style.display='block'
      pinSuccess.style.display='none'
     

   }

})