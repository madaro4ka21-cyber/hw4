

function greet(name) {
     console.log("Привет, " + name + "!"); 
    }
let userName = prompt("Введите ваше имя:"); 
greet(userName);


console.log(calculateSum(5, 3)); 
console.log(calculateSum(10, 20));


console.log(checkAge(16));
 console.log(checkAge(21));


 console.log(checkNumber(8));
 console.log(checkNumber(5));


function calculator(a, b, operator) {
    switch (operator) {
        case '+': 
        return a + b
    }
case "-": 
    return a - b;
        
case "*":
    return a * b;

case "/":
    if (b === 0) {
        return "На ноль делить нельзя";
    }
        return a / b;

    default:
        return "Неизвестная операция";
}

console.log(calculator(10, 5, "+"));
 console.log(calculator(10, 5, "-")); 
 console.log(calculator(10, 5, "*"));
 console.log(calculator(10, 5, "/"));
  console.log(calculator(10, 0, "/"));
   console.log(calculator(10, 5, "%"));