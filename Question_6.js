// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
let c_p = 60;
let s_p = 80;
if(c_p > s_p){
    let loss = c_p-s_p;
    console.log(`loss is ${loss}`);
}
else if (s_p > c_p){
    let profit = s_p - c_p;
    console.log(`profit is ${profit}`);
}
else if(c_p === s_p){
    console.log("No profit No loss");
}
