class Apple{
    
    constructor(link, x, y){
        this.link = link;
        this.x = x;
        this.y = y;
        this.draw()
    }

    draw(){
        this.link.style.left = this.x + 'px';
        this.link.style.top = this.y + 'px';
        this.link.style.display = 'block';
    }
}

const player = document.querySelector('.igrock');
const position = {
    x: 0,
    y: 0
}
function vericalMove(move){
    if(position.x >= 0 && position.x <= 900)
    {
        position.x += move; 
        player.style.left = position.x + "px";
    }else
    {
        console.log("You die")
    }
    
}
function horizontalMove(move){
    if(position.y >=0 && position.y <= 400)
    {
        position.y +=move;
        player.style.top = position.y + "px";
    }
}

apple = new Apple(document.querySelector('.apple'), 300, 200);
document.addEventListener('keypress', event => 
    {
        switch(event.key)
        {
            case 'a':
                vericalMove(-10);
                break;
            case 'd':
                vericalMove(10);
                break;
            case 's':
                horizontalMove(10);
                break;
            case 'w':
                horizontalMove(-10);
                break;
        }
        
    })