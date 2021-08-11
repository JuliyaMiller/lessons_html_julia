// DOM - 

// mousemove - движение мышки
// click 
// 

const btn1 = document.querySelector('#b1');
const btn2 = document.querySelector('#b2');
const btn3 = document.querySelector('#b3');
const btn4 = document.querySelector('#b4');

const sizeX = window.innerWidth; 

let x = 1;

const perc = document.querySelector('.persone');


document.addEventListener("mousedown", e => {
    console.log("down")
})

document.addEventListener("mouseup", e => {
    console.log("up")
})

document.addEventListener("keypress", e => {
    switch(e.which){
        // a
        case 65:
        case 97:
        case 37:
            if(x > 0){
                x -= 1;
                perc.style.left = x + "px"
            }else{
                console.log("Границі")
            } 
            break;
        // d
        case 68:
        case 100:
        case 39:
            if(x < sizeX){    
                x += 1;
                perc.style.left = x + "px" 
            
            }
            break;
        default:
            console.log(e.which)
    }

})

document.addEventListener("click", (e) => {
    switch(e.target){
        case btn1:
            console.log(1);
            break;
        case btn2:
            console.log(2);
            break;
        case btn3:
            console.log(3);
            break;
        case btn4:
            console.log(4);
            break;
        default: 
            console.log(NaN)
            break;
    }
})

