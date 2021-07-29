//break 
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
        break;
    }
}

list = ["Galya", "Dan", "Dan", "Dan", "Dan", "anna", "Dan", "lysha"];
for(i in list){
    if(list[i] === "anna"){
        console.log("anna");
        break; 
    }
    console.log(0);
}

for(let i in list){
    if(list[i] === "Dan"){
        continue;
    }
    console.log(list[i]);
}


/*
let tries = 3; 
let pas = "1";
let login = false;
do{
    if(pas === "123"){
        login = !login;
        break;
    }
    tries--;
}while(tries >= 0
*/
let u = ["qwe", 123, true, ["qwe", 123, true, []]]
console.log(u[3]);

let matrix = [[1,2,3],[3,4,5],[6,7,8]];
console.log(matrix[0][1])

/*
let e = [1,2,3,4,5];
let y = e; 
y[0] = 0; //[0,2,3,4,5]

console.log(e)
*/


// 
const x = 4;
//for, while, switch, if else, massive[], var, function
/*
x = 10
int x = 10;
let/const/var x = 10;
*/

switch(x){
    case 0: 
    console.log("У вас не осталось попыток")
    break;
    case 1: 
    console.log("Осталась одна попытка")
    break;
    
    case 2:
    case 3:
    case 4: 
    console.log(`Осталось ${x} попытки`)
    break;

    default:
        console.log("Cheater")
}