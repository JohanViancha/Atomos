const $triquis = Array.from(document.getElementsByClassName('loading-triqui__item'));
const $lineDiagonal = document.querySelector("#line-diagonal");
let setIntervalAnimations = null;
let index = 1;

const runAnimations = () =>{
    setIntervalAnimations = setInterval(()=>{
        if(index==10){
            $lineDiagonal.classList.add('line-diagonal');
            clearInterval(setIntervalAnimations)
            index = 1;
            
            setTimeout(()=>{
                $lineDiagonal.classList.remove('line-diagonal');
                deleteClassTriqui();
                runAnimations();
            },3000)
        }else{
            const xoro = $triquis.find(({dataset})=> dataset.index == index);
            xoro.classList.add('animation_triqui')
            index++;
        }
        
        
    },1000)
}

const deleteClassTriqui = () =>{
    $triquis.forEach((el)=>{
        el.classList.remove('animation_triqui')
    })

}   

runAnimations()
    


