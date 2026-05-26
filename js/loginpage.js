function togglePassword(){

    let password = document.getElementById("password");

    let eyeIcon = document.getElementById("eyeIcon");

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

//Login-form
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    //Get-input-values
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    //Get-user-from-localstorage
    let storedUser = JSON.parse(localStorage.getItem("coffeeUser"));

    //Check-if-user-exists
    if(storedUser == null){

        alert("No account found! Please register first.");

        return;

    }

    //Login-validation
    if(email === storedUser.email && password === storedUser.password){

        //Save-login-status
        localStorage.setItem("isLoggedIn", "true");

        //Save-username
        localStorage.setItem("loggedInUser",storedUser.name);

        alert("Login Successful!");

        //Redirct-to-home-page
        window.location.href = "index.html";

    }

    else{

        alert("Invalid Email or Password!");

    }

});

//:ogin-form
document.getElementById("loginForm").addEventListener("submit",

function(event){

    event.preventDefault();

    //Get-values
    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value.trim();

    //Get-user
    let storedUser = JSON.parse(localStorage.getItem("user"));

    //Check-if-user-exist
    if(!storedUser){

        alert("No User Found");

        return;

    }

    //Validate-email
    if(email !== storedUser.email){

        alert("Invalid Email");

        return;

    }

    //Validate-password
    if(password !== storedUser.password){

        alert("Invalid Password");

        return;

    }

    //Login-success
    localStorage.setItem("isLoggedIn","true");

    localStorage.setItem("loggedInUser",storedUser.name);

    alert("Login Successful ☕");

    //Redirect
    window.location.href = "index.html";

});