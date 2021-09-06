class Rectangle
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }

    sqrt(){
        return this.x * this.y     
    }

    dataAboutAngle(){
        return 90
    }
}

class Squart extends Rectangle
{
    constructor(x = 0){
        super(x, x)
    }
    
}



g1 = new Rectangle(1, 1)
g2 = new Rectangle(2, 2)
s1 = new Squart(10)

