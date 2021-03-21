const a = 10;
const b = 25;

console.log("A = " + a + ", B = " + b);
console.log("A + B = " + (a + b));
console.log("A - B = " + (a - b));
console.log("A * B = " + (a * b));
console.log("A / B = " + (a / b));

let min, max;

if (a >= b) {
    max = a;
    min = b;
} else {
    max = b;
    min = a;
}

let sum = 0;
for (let i = min; i <= max; i++) {
    sum += i;
}

console.log("The sum of numbers from " + min + " to " + max + " = " + sum);

function showSum(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    alert("The sum of numbers from " + min + " to " + max + " = " + sum);
}

showSum(1, 10);
showSum(-5, 5);
showSum(1, 1_000_000);
