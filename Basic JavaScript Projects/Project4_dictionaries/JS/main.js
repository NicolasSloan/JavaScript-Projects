function my_Dictionary() { //defining and initializing the function
    var Vehicle = { // setting a variable object called vehicle
        Make:"Hyundai",
        Model:"Sonata",
        Color:"Grey",
        Year:2018,
        NumofCylinders:4 //multiple key-value pair characteristics of the vehicle object separated by commas
    };
    delete Vehicle.Year; //deleteing the Year value from the vehicle object
    document.getElementById("Dictionary").innerHTML = Vehicle.Year; //output returned will be "undefined", as we deleted its value
}