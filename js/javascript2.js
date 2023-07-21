function myFunction() {
    let login = prompt("Please enter your name");

    if (login == "Admin"){
        let password = prompt("Enter Password");
        if (password == "TheMaster"){
            document.getElementById("app").innerHTML = "Hello " + login + "Welcome home!";
        } else if (password === null || password === '') {
            document.getElementById("app").innerHTML = "Cancelled login as admin";
        } else {
            alert("Wrong Password!");
            document.getElementById("app").innerHTML = "Password Incorrect!";
        }
    } else if (login === '' || login === null) {
        document.getElementById("app").innerHTML = "Cancelled login";
    } else {
        alert("I don't know you! Go away!")
    }
}

myFunction;