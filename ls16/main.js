//1. Проектируем данные 
/*
x = parseInt(prompt("Enter you nuber"))
//2. Проверка данных, на тип ("1" + "1" = "11". 1 + 1 = 2. true + true = 2/true, undefined)
console.log(x, typeof(x))
if(x > 0)
{
    console.log("V = ", Math.pow(x, 3));
}
else
{
    console.log("Invalid value")
}
*/

/*
let a, b, c, V;
// V = a * b * c - это 

a = parseInt(prompt("Enter a"));
b = parseInt(prompt("Enter b"));
c = parseInt(prompt("Enter c"));

if(a > 0 && b > 0 && c > 0)
{
    V = a * b * c;
    console.log(V)
}
else
{
    console.log("Error")
}
*/

/*
let a = (Math.floor(Math.random() * 100));
let b = (Math.floor(Math.random() * 100));

console.log(a);
console.log(b);
console.log( (a + b)/2);
*/

/*
let A = [123, 123, 123];
let B = "asd";

let temp = A;
A = B;
B = temp;
console.log(A, B)
*/

/*
let L = Math.floor(Math.random() * 1000);
console.log(L, Math.floor(L/100))
*/

/*
let x = Math.floor(Math.random() * 90 + 10) ;
let x1 = Math.floor(x / 10); 
let x2 = x % 10; //8 

console.log(x1, x2);
console.log(x1 + x2);
console.log(x1 * x2);
*/

// 7 = 0 - 
// 8 = 1 - 

/*
let days = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"]; //0 1 2 3 4 5 6
let K = Math.floor(Math.random() * 365); //1 - 365; 123 -
let week = Math.floor(K / 7);
let day = (K % 7);
console.log(K, week, day, days[day])
*/

/*
let A, B, C;
A =  Math.floor(Math.random() * 200 - 100);
B =  Math.floor(Math.random() * 200 - 100);
C =  Math.floor(Math.random() * 200 - 100);

console.log(A, B, C)
if(A > 0 || B > 0 || C > 0){
    console.log("Хотя бы одно из чисел A, B, C положительное")
}
*/