let block = document.querySelector(".a1"); 
let user = "Jack";
let age = 18;

block.style.backgroundColor = "red";

block.innerHTML = `
<h1 class="h1">Hello, ${user}</h1>
<p>lorem lorem lorem loremlorem lorem lorem</p>
`
console.log(block);

if(age < 18){
    block.style.display = "none";
}else{

}

console.log(document.body)

let input = document.querySelector('#name');
let button = document.querySelector('#send_messange');


function Hello(target){
    console.log("Hello")
}

input.addEventListener("change", function(e){
    console.log(input.value)
})

button.addEventListener("click", function(e){
    console.log("button")
});




