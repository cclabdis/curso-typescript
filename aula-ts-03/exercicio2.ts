function multiply(num1:number, num2:number):number {
    return num1 * num2;
    
}
console.log(multiply(2, 4))
function sum(num1: number, num2:number):number {
    return num1 * num2;
}
console.log(sum(2, 4))
function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(showResult(4))
function showResult(result:number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}