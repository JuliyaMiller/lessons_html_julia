class Pole{
    pole = [
    [null, null, null], 
    [null, null, null],
    [null, null, null]]

    constructor(){
    
    }
}

class Element extends Pole{
    #state = null; 
    constructor(el, state){
        super();
        this.el = el;
    }

    get getState(){
        return this.#state
    }

    setState(player){
        if(this.state){
            return null
        }
        this.#state = player;  
        this.el.style.backgroundColor = player;
    }
}

class Player{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    get PlayerName(){
        return this.name
    }
    get PlayerColor(){
        return this.color
    }
}

const map = document.querySelector("#pole"); 
const pole = {
    q1: new Element(document.querySelector('#i1'), null), 
    q2: new Element(document.querySelector('#i2'), null),
    q3: new Element(document.querySelector('#i3'), null),
    q4: new Element(document.querySelector('#i4'), null),
    q5: new Element(document.querySelector('#i5'), null),
    q6: new Element(document.querySelector('#i6'), null),
    q7: new Element(document.querySelector('#i7'), null),
    q8: new Element(document.querySelector('#i8'), null),
    q9: new Element(document.querySelector('#i9'), null),
}

const Player1 = new Player("1", "blue");
const Player2 = new Player("2", "red")

let i = 2;
map.addEventListener("click", e => {
    if(i%2 == 0){
        player = Player1;
    }else{
        player = Player2;
    } 

    Object.entries(pole).map(item => {
        if(e.target === item[1].el){
            console.log(item[1].el);
            console.log(item[0]);
        }
    })
})

/*    
    }*/