function concat_method() { //concatenates arguments together
    var p1 = "This is ";
    var p2 = "part of ";
    var p3 = "a full ";
    var p4 = "sentence.";
    var complete_sentence = p1.concat(p2, p3, p4);
    document.getElementById("concat").innerHTML = complete_sentence;
}

function slice_method() { //returns characters in specified indicies
    var sentence = "Don't fly to close to the sun Icarus";
    var section = sentence.slice(30, 36);
    document.getElementById("slice").innerHTML = section;
}

function toUpperCase_method() { //converts to upper case
    var sentence = "Don't fly to close to the sun Icarus";
    var upper = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}

function search_method() { //returns value of the index of first letter in specified word/phrase
    var sentence = "Don't fly to close to the sun Icarus";
    var section = sentence.search("Icarus");
    document.getElementById("search").innerHTML = section;
}

function toString_method() { //converts data type to string
    var x = 35;
    document.getElementById("string").innerHTML = x.toString();
}

function toPrecision_method() { //rounds to specified amount of digits
    var x = 21.1658463216854731651;
    document.getElementById("precision").innerHTML = x.toPrecision(5);
}

function toFixed_method() { //converts to string and rounds to specified number in ()
    var x = 21.1744351654546;
    document.getElementById("fixed").innerHTML = x.toFixed(2);
}

function valueOf_method() { //converts different data types to string values
    var x = true;
    document.getElementById("value").innerHTML = x.valueOf();
}