function goodfetch(){
    setTimeout( () => {
        console.log("20")
    }, 2)
}

console.log("asd");
goodfetch();
console.log("asd");
let i = 0;
while(i < 1000){
    console.log(i++);
}

/*
    *.json - text, str; -> object = {} person.name


    name -> "name"

    new Promise -> конструктор ()
    AJAX -  
*/

//JSON.parse - извлечение данные 
//JSON.stringify - .json 


/*обычные функции - для них существует стэк. Порядок выполнения операций. 
В стэке работает принцип, кто последний пришёл, тот первый ушел. 

Асинхронные функции, они захоядт в стэк, они в Веб Апи (они ложатся на плечи), браузер выполняет (V8), отправляя все очередь.
*/
/*let requset = new XMLHttpRequest();
console.log(requset.open("GET", '../dn.json', true))
*/


/*
Get - получить 
POSt - отправка 

*/