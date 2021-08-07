function WriteHelloWorld(){
    console.log("Hello World")
} 

function sum(x, y = 0){ 
    console.log(x, y)
}

z = sum(2, 4, 6, 7)
console.log(z)


let fruits = ['Апельсин', 'Яблоко', 'Банан']

fruits.map( fruit => console.log(fruit) )

function ButtonClick(){
    alert("You Click")
}

