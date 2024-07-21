const buttons=document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        
        const color = e.target.id ;
        switch(color)
        {
        case "grey" :
            body.style.backgroundColor=e.target.id
            break;
        case "white":
            body.style.backgroundColor=e.target.id
            break;
        case "blue":
            body.style.backgroundColor=e.target.id
            break;
        case "yellow" :
            body.style.backgroundColor=e.target.id
            break;
                
        default:
            body.style.backgroundColor="pink"
            break;
        }

    })
})