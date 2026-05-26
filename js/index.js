if(localStorage.getItem("isLoggedIn") !== "true"){
    window.location.href = "loginpage.html";
}

//Get-user-name
let username =
localStorage.getItem("loggedInUser");

//Show-user
if(username){
    document.getElementById("navbarUser").innerHTML ="Welcome, " + username;
}

//Logout
function logout(){
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    window.location.href ="loginpage.html";
}

//Update-cart-counter
function updateCartCount(){
    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];
    
    let totalCount = 0;
    cart.forEach(function(product){
        totalCount += product.quantity;
    });

    document.getElementById("cartCount").innerHTML =totalCount;
}

//Initial-load
updateCartCount();