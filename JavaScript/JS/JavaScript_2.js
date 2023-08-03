function validateForm() {
    let x = document.forms["form"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    let y = document.forms["form"]["lname"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }

    let z = document.forms["form"]["email"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }

    let a = document.forms["form"]["phone"].value;
    if (a == "") {
        alert("Phone number must be filled out");
        return false;
    }
}

