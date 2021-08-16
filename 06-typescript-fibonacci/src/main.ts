function fibonacci(number: number): number {
    if (number <= 1) {
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

let number = 20;
let str = "";
let sum = 0;
for (let i = 0; i < number; i++) {
    str += fibonacci(i) + " ";
    sum += fibonacci(i);
}
console.log("Dãy số fibonacci là: " + str + "có tổng là: " + sum);
