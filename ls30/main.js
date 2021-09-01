const cost = 2223200;
z = adapteCost(cost);

z = newCost(1234)
console.log(z)
z = newCost(12345)
console.log(z)
z = newCost(12346)
console.log(z)
z = newCost(123467)
console.log(z)
z = newCost(1234678)
console.log(z)
z = newCost(12346789)
console.log(z)
z = newCost(123467890)
console.log(z)

function adapteCost(num){  
    return num
        .toString()
        .replace(
        /\B(?=(\d{3})+(?!\d))/g, ","
    )
}

function newCost(num){
    let pow = Math.log10(num);
    pow = Math.floor(pow); 

    if(pow >= 3 && pow < 6)
    {
        const K = Math.floor(num / Math.pow(10, pow));
        const I = Math.floor((num / Math.pow(10, (pow - 1))) - Math.pow(10, (pow - 4)));
        return `${K}.${I}K`
    }
    else if(pow >= 6 && pow < 9){
        const K = Math.floor(num / Math.pow(10, pow));
        const I = Math.floor((num / Math.pow(10, (pow - 1))) - Math.pow(10, (pow - 7)));
        return `${K}.${I}M`
    }
}

//4! = 1 * 2 * 3 * 4

let g = 749; 
// 749 - не содержит нулей - 947  


function Some(num)
{
    if(num == 1)
    {
        return 1
    }
    return num * Some(num - 1)
}



x = Some(4)
console.log(x)

