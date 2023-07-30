function Call_Loop () {
    var digit = "";
    var num=1
    while (num < 11) {
        digit += "<br>" + num;
        num++;
    }
    document.getElementById("Loop").innerHTML = digit;
}


var instruments = ["Guitar", "Drums", "Piano", "Violin"];
var x;
var content = "";
function for_loop () {
    for (x=0; x < instruments.length; x++) {
        content += instruments[x] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

function array_Function() {
    var array = ["Cats", "Dogs", "Birds", "Monkeys"];
    document.getElementById("Array").innerHTML = array[2];
}

function constant_function() {
    const pet = {type:"dog", breed:"boxer", color:"brown"};
    pet.color = "white";
    pet.size = "medium";
    document.getElementById("Constant").innerHTML = pet.breed + pet.color + pet.size;
}

function let_keyword() {
    var x = 10;
    document.write(x + "<br>")
    {
        let x = 20;
        document.write(x + "<br>");
    }
    document.write(x);
}



function return_function() {
    return "hello world!";
}
document.getElementById("return").innerHTML = return_function();


let pet = {
    type: "Dog ",
    breed: "Boxer ",
    color: "Brown ",
    description: function  pet_description() {
        return "My pet is a " + this.color + this.breed + this.type
    }
};
document.getElementById("object").innerHTML = pet.description();


function break_function() { //counts to 4 then breaks the loop at x==5
    var count = 0;
    for  (x = 1; x < 11; x++) {
        if (x == 5) {break; }
        count += "<br>" + x;
    }
    document.getElementById("break").innerHTML = count;
}

function continue_function() { //counts to 4 then continues or "skips" over x == 5
    var count = 0;
    for  (x = 1; x < 11; x++) {
        if (x == 5) {continue; }
        count += "<br>" + x;
    }
    document.getElementById("continue").innerHTML = count;
}