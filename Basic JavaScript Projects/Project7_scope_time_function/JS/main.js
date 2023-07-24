x=10; //global variable
function local_var() {
    var y=10;
    console.log(x + 10);
    console.log(y + 10);
}
console.log(local_var())
console.log(x+10);
console.log(y+10); //intentional error using local variable outside of its defined function

function getdate() { //function to return a string based upon users local time
    if (new Date().getHours() < 18) {
        document.getElementById("date").innerHTML = "Good morning or afternoon!"
    }
    else {
        document.getElementById("date").innerHTML = "Good evening!"
    }
}

function carRental() { //function that accepts a using input for age to determine if they are old enought to rent a car
    age = document.getElementById("age").value; //declaring age value and assigning it the value from the HTML input tag
                                                //with the id "age"
    if (age < 25) {
        document.getElementById("can_you_rent_a_car?").innerHTML = "You are not old enought to rent a vehicle";
    }
    else {
        document.getElementById("can_you_rent_a_car?").innerHTML = "You may rent a vehicle!";
    }
}

function time_of_day() {
    var Time = new Date().getHours();
    var minutes = new Date().getMinutes();
    if (minutes <10) {
        minutes = "0" + new Date().getMinutes() //if minutes are a single digit the getMinutes() function does not return
    }                                           //the leading zero, using this if statement to correct that
    var Reply;
    if (12 > Time == Time > 0) {
        Reply = "It is " + Time + ":" + minutes + " in the morning!";
    }
    else if (12 <= Time == Time < 18) {
        Reply = "It is " + Time + ":" + minutes + " in the afternoon!";
    }
    else {
        Reply = "It is " + Time + ":" + minutes + " in the evening!";
    }
    document.getElementById("time").innerHTML = Reply;
}