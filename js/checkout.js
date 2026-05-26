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

//Get-cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let checkoutProducts = document.getElementById("checkoutProducts");

let total = 0;

//Display-products
cart.forEach(function(product){

    let price = parseInt(product.price.replace("₹",""));

    let productTotal = price * product.quantity;

    total += productTotal;

    checkoutProducts.innerHTML +=

    `
    <div class="checkout-product">

        <span> ${product.name} x ${product.quantity} </span>

        <span> ₹${productTotal} </span>

    </div>
    `;
});

//Add-delivery
total += 49;

//Show-total
document.getElementById("checkoutTotal").innerHTML = "₹" + total;

//Place-order
function placeOrder(){

    alert("Order Placed Successfully ☕");

    //Clear-cart
    localStorage.removeItem("cart");

    //redirect
    window.location.href = "index.html";

}

//Update-cart-counter
function updateCartCount(){
    let cart =JSON.parse(localStorage.getItem("cart"))|| [];
    let totalCount = 0;
    cart.forEach(function(product){
        totalCount += product.quantity;
    });

    document.getElementById("cartCount").innerHTML =totalCount;
}

//Initial-load
updateCartCount();