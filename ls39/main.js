window.addEventListener("load", event => console.log(1))

const url = 'https://fakestoreapi.com/products/';
let list = [];
const root = document.querySelector('#root');
const loader = document.querySelector('.load');

fetch(url)
    //200
    .then(res => res.json())
    .then(data => {
        loader.style.display = "none";
        list = list.concat(data);
        list.map( item => build(item));    
    })
    .catch(err => console.error("Ошибка загрузки"))


function build(data){
    let tag = document.createElement('p');
    let text = document.createTextNode(data.title);
    tag.appendChild(text);
    root.appendChild(tag);
}

