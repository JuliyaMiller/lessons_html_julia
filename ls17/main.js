//Global - СУПЕР РОДИТЕЛЬ - ДЕДУШКА 
let t1 = true;
if(t1)
{
    //ЛОКАЛЬНАЯ ОБЛАСТЬ - СЫН
    let t2 = true;
    console.log(t1, t2);

    if(t2)
    {
        // ЛОКАЛЬНАЯ - ВНУК
        let t3 = true;
        //console.log(t1, t2, t3);
    }
}

//циклы 
list = ["a", "s", "d", "f", "g", "h"];
/*
let j = 0;
//console.log("Начало цикла");
while(j <= 5)
{
    //console.log(j++);
};
//console.log("Конец цикла");
for(let i = 0; i < list.length; i++)
{
    //console.log(list[i]);
};
//console.log("---------");
for(let i = list.length - 1; i >= 0; i--)
{
    //console.log(list[i]);
};
*/
//100 - 1

for(let i = 99; i >= 1; i -= 3){
    //console.log(i);
}

for(i in list){
  /*  if(list[i] === "a")
    {
        console.log("A");
    }
    console.log(list[i]);
    */
} 

let A = 1;
let B = 10;
let sum = 1;


for(let i = A; i <= B; i++){
    sum *= i;
}
console.log(sum);

let Fibanachi = [0, 1, 1];
let N = 20;
for(let i = 4; i <= N; i++)
{
    let x1 = Fibanachi[Fibanachi.length - 1];
    let x2 = Fibanachi[Fibanachi.length - 2];
    Fibanachi[Fibanachi.length] = x1 + x2;
}

console.log(Fibanachi);

