function greet(){
    console.log("helloo");
    setTimeout(greet,3*1000);
}
// setTimeout(greet,3*1000);
setInterval(setTimeout(greet,4*1000),1*1000)