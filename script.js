var counter = document.getElementById('counter');

counterData = 0;

counter.innerHTML = counterData;

function makeCounter(countertype){
  
    if(countertype == 'add'){
        changeCounter = ++counterData
        initialTranslate = 'translateY(-100%)'
        addTranslate = 'translateY(100%)'

            if(counterData > 0){
                counter.style.color = 'yellow'
            }else if(counterData == 0){
                counter.style.color = 'white'
            }

    }else if(countertype == 'subtract'){
        changeCounter = --counterData
        initialTranslate = 'translateY(100%)'
        addTranslate = 'translateY(-100%)'

        if(counterData < 0){
            counter.style.color = 'red'
        }else if(counterData == 0){
            counter.style.color = 'white'
        }
    }

   counter.style.transform = initialTranslate;
   counter.style.opacity = '0';

   timeOut = 200;

   setTimeout(function () {
        counter.innerHTML = changeCounter;
        setTimeout(function () {
            counter.style.transform = addTranslate;    
            counter.style.opacity = '0'; 
            setTimeout(function () {
                counter.style.transform = 'translateY(0%)';   
                counter.style.opacity = '1'; 
            },timeOut)
        },timeOut)
   },timeOut)

}
