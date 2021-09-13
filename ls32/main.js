class Geometry{
    static Pi = 3.14;
    static Exp = 2.7;

    constructor(){

    }
}
// класс Круг !!
// класс Треугольник 
// класс Правильный треугольник (60*)

class Rigth_Triangle extends Geometry{
    
    #find_angle(){
        if(this.A > this.B && this.A > this.C){
            return this.#sqrt_r(this.B, this.C)
        }else if(this.A < this.B && this.B > this.C){
            return this.#sqrt_r(this.A, this.C)
        }else if(this.C > this.B && this.C > this.A){
            return this.#sqrt_r(this.B, this.A)
        }
    }

    #sqrt_r(num1, num2){
        return (num1*num2)/2
    }

    RigthTriangleSqrt(){
       return this.#find_angle()
    }

    constructor(a, b, c){
        super()
        this.A = a;
        this.B = b;
        this.C = c;
    }
}

ABC = new Rigth_Triangle(3, 4, 5)

