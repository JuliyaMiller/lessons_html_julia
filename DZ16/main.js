let A, B, C;
A =  Math.floor(Math.random() * 100);
B =  Math.floor(Math.random() * 100);
C =  Math.floor(Math.random() * 100);

console.log(A, B, C);

if(A === B && B === C && A === C)
{
    console.log("==")
}
else{
    if(A < B && A < C)
    {
        console.log("A is small");
    }else if(B < A && B < C)
    {
        console.log("B is small");
    }else if(C < A && C < B)
    {
        console.log("C is small");
    }
    else{
        console.log("Слив");
    }

    if(A > B && A > C)
    {
        console.log("A is biggest");
    }else if(B > A && B > C)
    {
        console.log("B is biggest");
    }else if(C > A && C > B){
        console.log("C is biggest");
    }
}




