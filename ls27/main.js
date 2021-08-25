/*типы - информация, которую храним */


let  good = {
    price: 124,
    name: "IKEA Lamp Standart",
    quantity: 12,
    colors: ["yellow"],
    type: "lamp",
    goods: {

    },
    do: () => {
        console.log("do")
    }
};

let letters = {
    a: 1,
    b: 2, 
    c: 3 
}


function Hello(user) 
{
    return `Hello, ${user}`
}

console.log(Hello("Генадий"))
console.log(Hello("I"))
console.log(Hello("U"))
console.log(Hello("G"))
console.log(Hello("k"))


