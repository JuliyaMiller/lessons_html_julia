function sum(num1, num2 = 0)
{
    console.log(arguments);

    if('string' == typeof(num1) || 'string' == typeof(num2))
    {
        return 0;
    }

    console.log(num1, num2)
    return num1 + num2;
}
/*
z = sum(4, 3, 5, 6, 7, 8, 9); //42
f = sum(4, 7);
g = sum(4, 0);
console.log(z, f, g)
*/ 

const input_name = document.querySelector('#input_name');
const label_name = document.querySelector('#label_name');

document.addEventListener("input", 
    (element) => 
    {
        label_name.innerHTML = input_name.value; 
    }
)

const root = document.querySelector('#root');

for(let i = 0; i < 10; i++){
    const para = document.createElement("div");
    para.classList.add("good");
    const node = document.createTextNode(i);
    para.appendChild(node);
    root.appendChild(para)
}




/*document.addEventListener("ДЕЙСТВИЕ", ФУНКЦИЯ )*/