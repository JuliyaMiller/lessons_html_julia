const API = 'https://swapi.dev/api/people/';
const $list = document.querySelector('.serch-filed .drop-menu > ul');
const $filed = document.querySelector('.serch-filed > input');

let list = [];

function listGenerator(data){
    let template = '';
    if(data.length == 0){
        $list.innerHTML = '<li class="not-found">NOT FOUND</li>';
    }else{
        data.map( e => {
            template += `<li>${e.name}</li>`;
        } )
        $list.innerHTML = template;
    }
}

fetch('https://swapi.dev/api/people/')
    .then(res=>res.json())
    .then(json=>{
        list = json.results;
        listGenerator(list);
        console.log(list);
    });

$filed.addEventListener('input',  function(){
    let query = this.value.toLowerCase();
    let buffer = list; 

    buffer = buffer.filter(function(element){
        let el = element.name.toLowerCase().indexOf(query) + 1;
        return el;
    })

    listGenerator(buffer);
})

$filed.addEventListener('focus', function(event){
    this.parentNode.classList.add('active');
})

$filed.addEventListener('blur', (event) => {
    $filed.parentNode.classList.remove('active');
})
