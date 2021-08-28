// Методы 

/*
    for - 
    for in - работает для массивов (возращает индекс, порядковый номер)
    for of - работает для массивов (возращает занчение)
    for on - работает с объектами
    foreach - массив - метод


    push() - добавление на последнее место, меняет наш массив - 
    unshift() добавление на первое место, меняет наш массив - 
    pop() - удаление с последней позиции, меняет наш массив - в перменную можем записать, что удаляем 
    shift() - удаление с первой позиции, меняет наш массив
    splice - универсальный метод.

    concat - добавление елементов, но не меняет массив

*/

let list1 = [];
let list2 = new Array(1, 2, 3, 4); // OOP

list1.push("data"); // на создает новую ячейку и туда запихивает значение
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(7);
list1.push(6);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);

console.log(list1);
y = list1.slice();

list1.pop(); // производят изменения в нашем массиве 

y = list1.shift();
console.log("shift",list1);

list1.unshift("Unshift el");
console.log("unshift", list1);

list1.splice("spilce el1", "spilce el1", "spilce el1", "spilce el1", "spilce el1", "spilce el1");
console.log("splice", list1);

list1 = list1.concat(list2);
console.log("concat", list1);

let z1 = list1.indexOf(1); // возращает первое значение
let z2 = list1.lastIndexOf(1); // возращает последнее значение
let z3 = list1.includes(10) // возращает существует ли значение
console.log("z1 = ", z1, "z2 = ", z2, "z3 = ", z3)

// => 
let list3 = list1.map( /*function*/ (item) => {
    if(item == 1){
        item = 454
    }
    else
    {
        return true
    }          
})
console.log("map", list3);

list1.forEach( (item, index, array) => {
    //console.log(item, index)
})

let list4 = list1.filter(el => el != 1)
console.log(list4);
console.log(list1);

list4.push(11, 22, 33)
list4.sort()
console.log(list4)

list4.reverse()
console.log(list4)

console.log(typeof(list4))

const dict1 = {};
const dict2 = new Object(); 

let x1 = 10;
let x2 = new Number(10); // конструкторы 


// Функции 
