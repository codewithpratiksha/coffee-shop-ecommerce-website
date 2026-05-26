// SHOW / HIDE PASSWORD

function togglePassword(){

    let password =
    document.getElementById("password");

    let eyeIcon =
    document.getElementById("eyeIcon");

    if(password.type === "password"){

        password.type = "text";

        eyeIcon.classList.remove("fa-eye");

        eyeIcon.classList.add("fa-eye-slash");

    }

    else{

        password.type = "password";

        eyeIcon.classList.remove("fa-eye-slash");

        eyeIcon.classList.add("fa-eye");

    }

}



// REGISTER FORM

document.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    
    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    let confirmPassword =
    document.getElementById("confirmPassword").value;



    // PASSWORD CHECK

    if(password !== confirmPassword){

        alert("Passwords do not match!");

        return;

    }



    // USER OBJECT

    let user = {

        name:name,
        email:email,
        password:password

    };



    // SAVE TO LOCAL STORAGE

    localStorage.setItem(
        "coffeeUser",
        JSON.stringify(user)
    );



    alert("Registration Successful!");



    // REDIRECT

    window.location.href =
    "loginpage.html";

});

// REGISTER FORM

document.getElementById("registerForm")
.addEventListener("submit",

function(event){

    event.preventDefault();



    // GET VALUES

    let name =
    document.getElementById("name")
    .value.trim();



    let email =
    document.getElementById("email")
    .value.trim();



    let password =
    document.getElementById("password")
    .value.trim();



    let confirmPassword =
    document.getElementById("confirmPassword")
    .value.trim();



    // EMAIL REGEX

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




    // VALIDATION

    // NAME

    if(name === ""){

        alert("Enter Your Name");

        return;

    }



    // EMAIL

    if(!emailPattern.test(email)){

        alert("Enter Valid Email");

        return;

    }


    // PASSWORD LENGTH

    if(password.length < 8){

        alert("Password Must Be At Least 8 Characters");

        return;

    }



    // CONFIRM PASSWORD

    if(password !== confirmPassword){

        alert("Passwords Do Not Match");

        return;

    }



    // USER DATA

    let user = {

        name:name,
        email:email,
        password:password

    };



    // SAVE USER

    localStorage.setItem(

        "user",

        JSON.stringify(user)

    );



    alert("Registration Successful");



    // REDIRECT

    window.location.href =
    "loginpage.html";

});