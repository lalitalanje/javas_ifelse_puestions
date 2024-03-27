// 11. Write a JavaScript program to check whether a given number is prime or not.
let a = 13;
let p = 1;
let count = 0;
while(p <= a){
    if(a % p === 0){
        count++;
    }
    p++;
}
if(count == 2 || a === 1){
    console.log(a,"is prime");
}
else{
    console.log(a, "is not prime");
}