/* 
Status:
1хх - информационные  
2xx - даные успешно получены 
3xx - переадресация 
4xx - проблемы на стороне клиента 
5xx - ошибки на стороне сервера 
*/

//ajax 
const xhr = new XMLHttpRequest();
const url = 'https://fakestoreapi.com/products/';
let data; 

xhr.open('GET', url, false);
xhr.send();

if(xhr.status != 200){
    console.log('erorr');
}else{
    data = JSON.parse(xhr.response);
}

console.log(data);

// let - используют 
for(let j = 0; j < 3; j++){
    setTimeout(
        () => console.log(j)        
    )
}

/*new Promise( function(resolve, reject){
    setTimeout(() => reject(1), 1000)
}).then( function(result){
    console.log(result)
} )*/

/*
try:

*/

let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve(1), 1000)
})

promise.then( function(result){
    console.log(result)
})

promise.then( function(result){
    console.log(result * 4)
})



fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))

fetch('https://swapi.dev/api/people/1')
    .then(res=>res.json())
    .then(json=>console.log(json))