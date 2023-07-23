function coercion () { //coercion, and typeof examples+
    x = 10
    y = "ten"
    document.write(typeof x)
    document.write(x + y)
    document.write("fourteen" + 14)
    
    document.write(0/0)
    document.write(isNaN('word'))
    document.write(isNaN('20'))
}

function infinite () { //displays infiity and negative infinity
    document.getElementById("body");
    document.write(3E400)
    document.write(3E400)
}

function bool() { //displays boolean logic
    document.getElementById("body");
    document.write(5 > 6)
    document.write(5 < 6)
}

console.log(2+2) //practicing console log in browser developer tools
console.log(5 > 6)

function double_equal() { //shows that each sides are equal or not and returns true/false
    document.write(5+5 == 10);
    document.write(9 == 10);
}

function triple_equal() { // === used to deterimine if value AND data type are equal
    document.write("fourty" === "fourty");
    document.write("fourty" === 40);
    document.write("40" === 40);
    document.write(40 === 41);
}

function and() { //using and operator (&&)
    document.write( 5 > 4 && 10 > 1)
    document.write( 5 > 4 && 10 > 11)
}

function not() { //using not operator (!)
    document.write(! (5>4));
    document.write(! (5>6));
}