function add(x, y) { //addition function
    document.getElementById=("math").innerHTML;
    var sum = x + y;
    document.write(sum);
}

function subtract(x, y) { //subtraction function
    document.getElementById=("math").innerHTML;
    var difference = x - y;
    document.write(difference);
}

function multiply(x, y) { //multiplication function
    document.getElementById=("math").innerHTML;
    var product = x * y;
    document.write(product);
}

function divide(x, y) { //division function
    document.getElementById=("math").innerHTML;
    var quotient = x / y;
    document.write(quotient);
}

function multiply_and_divide(x, y, z) { //function to first multiply, then divide
    document.getElementById=("math").innerHTML;
    var result = (x * y) / z;
    document.write(result);
}

function remainder(x, y) { //function to display the remainder of a division operation
    document.getElementById=("math").innerHTML;
    var result = x % y;
    document.write(result);
}

function negation(x) { //function to convert given value to a negative number
    document.getElementById=("math").innerHTML;
    var negative = -x;
    document.write(negative);
}

function increment(x) { //fn  to increment given value by 1
    document.getElementById=("math").innerHTML;
    x++;
    document.write(x);
}

function decrement(x) { //function to decrement given value by 1
    document.getElementById=("math").innerHTML;
    x--;
    document.write(x);
}

window.alert(Math.round((Math.random()*100))) //function to return a random number between 0-100, and round it to the nearest whole number. Then displays in a window alert upon load