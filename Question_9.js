// 9. Write a JavaScript program to find the largest of three numbers.
let a = 6;
let b = 4;
let c = 9;
let max = 0;
if (a > b){
    if(a > c){
        console.log("max is",a);
    }
    else{
        console.log("max is",c);
    }
}
else if(b > a){
    if(b > c){
        console.log("max is",b);
    }
    else{
        console.log("max is",c);
    }
}
