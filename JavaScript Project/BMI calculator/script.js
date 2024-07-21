const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const result_box = document.querySelector(`#result_box`)
    result_box.style.borderColor = 'black';
    result_box.style.borderWidth = '5px';
    result_box.style.borderStyle = 'solid';
    

   const height =parseInt( document.querySelector('#height').value)

   const weight =parseInt( document.querySelector('#weight').value)
   
   const result = document.querySelector('#results')
   const resdescri = document.querySelector('#resdescri')

   if(height == "" || height < 0 || isNaN(height)){
    result.innerHTML = 'please enter valid height';
    resdescri.innerHTML = '';
   }
   else if(weight == "" || weight < 0 || isNaN(weight)){
    result.innerHTML = 'please enter valid weight';
    resdescri.innerHTML = '';
   }
   else{
    
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`

    if(bmi < 18.6) { 
        resdescri.innerHTML = `<span>Under Weight</span>`
    }
    else if(bmi < 24.9 && bmi >= 18.6) { 
        resdescri.innerHTML = `<span>Under Weight</span>`
    }
    
    else{
        resdescri.innerHTML = `<span>Overweight</span>`
    }
   }

 
   

})