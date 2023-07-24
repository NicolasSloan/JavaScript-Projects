//ride function
function Ride_function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//voting function
function vote_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are not old enough to vote":"You may vote!";
    document.getElementById("vote").innerHTML = can_vote
}

//vehicle function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

var Nic = new Vehicle("Hyundai", "Sonata", 2018, "Grey");
function nicVehicle () {
    document.getElementById("New_and_This").innerHTML =
    "Nic drives a " + Nic.Vehicle_Color + "-colored " + Nic.Vehicle_Model +
    " manufactured in " + Nic.Vehicle_Year;
}


//nested function
function outer_nest() {
    document.getElementById("Nested_Function").innerHTML = inner_nest()
    function inner_nest() {
        var product = 2 * 5;
        return product;
    }
}