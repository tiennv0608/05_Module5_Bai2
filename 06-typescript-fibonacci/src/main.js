function fibonacci(number) {
    if (number <= 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var number = 10;
for (var i = 0; i < number; i++) {
    console.log(fibonacci(i));
}
