function color_function() {
    var Color_output;
    var Color_string = " is a great color!";
    var colors = document.getElementById("color_input").value;
    switch(colors) {
        case "Red":
            Color_output = "Red" + Color_string;
        break;
        case"Yellow":
            Color_output = "Yellow" + Color_string;
        break;
        case "Green":
            Color_output = "Green" + Color_string;
        break;
        case "Blue":
            Color_output = "Blue" + Color_string;
        break;
        case "Pink":
            Color_output = "Pink" + Color_string;
        break;
        case "Purple":
            Color_output = "Purple" + Color_string;
        break;
        default:
            Color_output = "Please enter a color exactly as it's written in the above list."
    } 
    document.getElementById("switch").innerHTML = Color_output;
}

function change_text() {
    x = document.getElementsByClassName("doc");
    x[0].innerHTML = "this text has changed!";
}

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

ctx.font = "50px Helvetica";

//create gradient
const gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "red");
gradient.addColorStop("0.2", "orange");
gradient.addColorStop("0.4", "yellow");
gradient.addColorStop("0.6", "green");
gradient.addColorStop("0.8", "blue");
gradient.addColorStop("1.0", "purple");

//fill with gradient
ctx.fillStyle = gradient;
ctx.fillText("Hello World!", 10, 90)