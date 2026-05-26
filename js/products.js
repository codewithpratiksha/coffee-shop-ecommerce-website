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

    document.getElementById("cartCount").innerHTML = totalCount;
}

//Initial-load
updateCartCount();

//Filter-products
function filterProducts(category, button){
    let products = document.querySelectorAll(".product-item");
    let buttons = document.querySelectorAll(".category-btn");

    //Remove-active-class
    buttons.forEach(function(btn){
        btn.classList.remove("active");
    });

    //Add-active-class
    button.classList.add("active");

    //Filter-products
    products.forEach(function(product){
        if(category === "all"){
            product.style.display = "block";
        }
        else if(product.classList.contains(category)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }
    });
}

//Toggle-wishliat
function toggleWishlist(button){

    //Toggle-active-class
    button.classList.toggle("active");

    //Get-icon
    let icon =button.querySelector("i");

    //Change-icon
    if(button.classList.contains("active")){
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
    }
    else{
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
    }
}

//Add-to-wishlist
function addToWishlist(name, price, image, button){

    //Get-exisiting-wishlist
    let wishlist =JSON.parse(localStorage.getItem("wishlist"))|| [];

    //Check-if-product-exist
    let existingProduct =wishlist.find(function(item){
        return item.name === name;
    });

    //If-not-exist
    if(!existingProduct){
        wishlist.push({
            name:name,
            price:price,
            image:image
        });

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        //Heart-active
        button.classList.add("active");

        let icon = button.querySelector("i");

        icon.classList.remove("fa-regular");

        icon.classList.add("fa-solid");

        alert("Added To Wishlist ❤️");
    }
    else{
        alert("Already In Wishlist");
    }

}

//Add-to-cart
function addToCart(name, price, image){

    // GET EXISTING CART
    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    //Check-if-product-exists
    let existingProduct =
    cart.find(function(item){

        return item.name === name;
        
    });

    //If-product-exist
    if(existingProduct){
        existingProduct.quantity += 1;
    }
    else{
        cart.push({
            name:name,
            price:price,
            image:image,
            quantity:1
        });
    }

    //Save-cart
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert("Added To Cart 🛒");


}