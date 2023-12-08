function arithmaticalculator(a,b,functiontocall1,functiontocall2){
const ans=(functiontocall1(a,b));
functiontocall2(ans);
}
function sum(a,b){
    return(a+b);
}
function sub(a,b){
    return(a-b);
}
function product(a,b){
    return(a*b);
}
function division(a,b){
    return(a/b);
}
function displayresult(fuck){
console.log(fuck);
}
const d=arithmaticalculator(1,3,division,displayresult);
