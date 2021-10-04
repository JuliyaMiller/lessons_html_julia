// super 
function doSomething(i = 0){
    return i 
}

// () => { } // lambd func  this не работает.  
// 
const x = 10;
const y = 13;

const dots = {x, y};

console.log(dots)


a = [0, 1, 2];
b = [3, 4, ...a];
console.log(b);

user = 'Petya';
const V = `hello ${user}`; 

function f(x, y, ...a){
    
};

list = [ 1, 2, 3 ];
[ c, d ] = list;
[ d, c ] = [ c, d ];

console.log(d, c, list);


let x1 = 11;

if(x1 == 10){
    console.log(1, 10)
}
else{
    console.log(1, x1)
}

x1 === 10 && console.log(2, 10);

x1 === 10 ? console.log(3, 10): console.log(3, x1);


// for in // for on



