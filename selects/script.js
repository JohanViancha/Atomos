const selectStandards = Array.from(document.getElementsByClassName('select-container-standard__frame'));
const selectOptions = document.querySelector('#select-options');
const options = Array.from(document.getElementsByClassName('option'));
//const selectArrow = document.querySelector('#arrow');


selectStandards.forEach((select)=>{
    let selected = document.querySelector(`#${select.id} + .select-container-standard__options`);
    select.addEventListener('click', (el)=>{
        if(select.id == 'select-standard'){
            selected.classList.toggle('show-options');
        }else{
            selected.classList.toggle('show-options-animations');    
        }
       
       
    })
})



options.forEach((opt)=>{
    opt.addEventListener('click', (el)=>{
        selectOptions.classList.toggle('show-options');
        selectStandard.innerHTML = el.target.dataset.value;
    })
})
