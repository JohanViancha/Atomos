
const backgroundColor = document.getElementsByClassName('config-standard-background')[0];
const textColor = document.getElementsByClassName('config-standard-color')[0];
const buttons = document.getElementsByClassName('buttons-container__standard');
const buttonOutline = document.getElementsByClassName('buttons-container__standard--outline')[0];


backgroundColor.addEventListener('change', ()=>{
    changeColor(textColor.value, backgroundColor.value)
});

textColor.addEventListener('change', ()=>{
    changeColor(textColor.value,backgroundColor.value)
});


buttonOutline.addEventListener('mousemove', ()=>{
    buttonOutline.style.backgroundColor = backgroundColor.value
    buttonOutline.style.color = textColor.value

})


buttonOutline.addEventListener('mouseout', ()=>{
    buttonOutline.style.backgroundColor = textColor.value
    buttonOutline.style.color = backgroundColor.value 

})

const changeColor = (color = '#fff', background = '#363aa9') =>{

    for (let index = 0; index < buttons.length; index++) {
        if(Object.values(buttons[index].classList).includes('buttons-container__standard--outline')){
  
            buttons[index].style.backgroundColor =color;
            buttons[index].style.color = background; 
            buttons[index].style.borderColor = background; 
            continue;
        }
        buttons[index].style.backgroundColor = background
        buttons[index].style.border = '0px'
        buttons[index].style.color = color
    
    }
}

changeColor();
