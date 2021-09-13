class Geometry{
    static Pi = 3.14;
    static Exp = 2.7;

    constructor(){

    }
}
class Triangle extends Geometry{
    constructor(a, b, c){
        super();
        if(this.check(a, b, c)){
            //полем называем ключи и их значение
            this.A = a;
            this.B = b;
            this.C = c;
        }
        else{
            throw "Невозможно построить треугольник"
        }
    }


    check(a, b, c){
        if(a + b > c && b + c > a && a + c > b){
            return true
        }
        return false
    }
}
class Rigth_Triangle extends Triangle{
    
    #find_angle(){
        if(this.A > this.B && this.A > this.C){
            return this.#sqrt(this.B, this.C)
        }else if(this.A < this.B && this.B > this.C){
            return this.#sqrt(this.A, this.C)
        }else if(this.C > this.B && this.C > this.A){
            return this.#sqrt(this.B, this.A)
        }
    }

    #sqrt(num1, num2){
        return (num1*num2)/2
    }

    get Sqrt(){
       return this.#find_angle()
    }

    constructor(a, b, c)
    {
        super(a, b, c);
    }
}

//наследие. Класс может наследовать поля от родителя.
class TriangleWithAvSide extends Triangle{
    // private - означает, что никто, кроме самого класса не имеет доступ. 
    #angle = 60; 
    // статик доступен 
    static side = 3;

    /*
        # - приватное, поле которое доступно, только класск, которому принадлжеит (__ - используют два нижних подчеркивания - __name (PEP8))
    */

    // методы к которым обращаются и работают через класс, не через переменные
    static info(){
        return "Равностороним треугольник называют, треугольник, который имеет .....";
    }

    // инсттрумент для возрата значений. 
    get angle(){
        return this.#angle
    }
    // инструент для получаения данных 
    set ChangeValue(value){
        this.A = this.B = this.C = value;
        
    }
    //метод - это функция внутри класса
    //this - контекст вызова 
    sqrt(){
      return Math.pow(this.A, 2) * Math.pow(3, 0.5) * 0.25 
    }

    //конструктор - это то что принимает начальные значения и записывает в себя 
    constructor(a){
        // передача данных родителю. 
        super(a, a, a);
    }

}

f1 = new Rigth_Triangle(3, 4, 5);
f2 = new TriangleWithAvSide(4);
