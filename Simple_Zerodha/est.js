function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}
const ans=sum(1,2);
console.log(sum(1,2));
displayResult(ans);

// You are only allowed to call one function after this
// How will you displayResult of a sum