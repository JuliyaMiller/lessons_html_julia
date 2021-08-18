const free_guy = document.querySelector('.gamer');
const coins = document.querySelectorAll('.coin');
let free_guy_X = 0; 
let free_guy_Y = 0;

const sizeX = window.innerWidth;
const sizeY = window.innerHeight;

console.log(coins);
console.log(sizeX, sizeY, free_guy_X, free_guy_Y);

//что движение. И как наш должен двигаться? 
document.addEventListener("keypress", 
    function(element) // ананимная функция, ОН СРАБАТІВАЕТ СРАЗУ (ПОТОМУ ЧТО У НЕЁ НЕТ ИМЕНИ)
    {
        switch(element.charCode){
            case 97:
            case 65:
                if(free_guy_X > 0)
                {
                    free_guy_X -= 5;
                    free_guy.style.left = free_guy_X + "px";
                    console.log(free_guy_X)
                }
                break;
            
            case 115: 
            case 83: 
                if(free_guy_Y < sizeY)
                {
                    free_guy_Y += 5;
                    free_guy.style.top = free_guy_Y + "px";
                    console.log(free_guy_Y);
                    }
                    break;
            
            case 100: 
            case 68: 
                if(free_guy_X < sizeX - 200)
                {
                    free_guy_X += 5;
                    free_guy.style.left = free_guy_X + "px";
                    console.log(free_guy_X)
                }
                break;
            
            case 119: 
            case 87: 
                if(free_guy_Y > 0)
                {
                free_guy_Y -= 5;
                free_guy.style.top = free_guy_Y + "px";
                console.log(free_guy_Y)
                }
                break;
            
                default:
                console.log(element.charCode)
        }
    }
)

document.addEventListener("click", 
    function(element)
    {
        for(let i = 0; i < coins.length; i++){
            if(coins[i] == element.target)
            {
                element.target.style.display = "none";
            }
        } 
    }
)