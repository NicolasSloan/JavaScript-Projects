function my_first_function() {                              //defining and naming function
    var str = "This is the button text!";                   //defining variable and giving it a string value
    str += " And this is a concatenated portion of the string!"
    document.getElementById("Button_Text").innerHTML = str; //putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}

function divide_two_numbers(numerator, denominator) { //division function
    return numerator/denominator
}

F = divide_two_numbers(8, 4);
document.write(F)