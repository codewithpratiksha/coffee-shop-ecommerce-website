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
    let cart =JSON.parse(localStorage.getItem("cart"))|| [];
    let totalCount = 0;
    cart.forEach(function(product){
        totalCount += product.quantity;
    });

    document.getElementById("cartCount").innerHTML =totalCount;
}

//Initial-load
updateCartCount();

//Get-wishlist
let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

let wishlistContainer = document.getElementById("wishlistContainer");

//Display-products
function displayWishlist(){

    wishlistContainer.innerHTML = "";

    //Empty-wishlist
    if(wishlist.length === 0){

        wishlistContainer.innerHTML =

        `
        <h3 class="text-center text-secondary">Wishlist Is Empty</h3>
        `;

        return;

    }

    //Loop-Product
    wishlist.forEach(function(product, index){

        wishlistContainer.innerHTML +=

        `
        <div class="col-lg-3 col-md-6">

            <div class="card wishlist-card border-0">

                <img src="${product.image}" class="card-img-top wishlist-img">

                <div class="card-body">

                    <h5 class="wishlist-name">${product.name}</h5>
                    
                    <div class="d-flex justify-content-between align-items-center">

                        <h5 class="wishlist-price">${product.price}</h5>

                        <button class="remove-btn" onclick="removeWishlist(${index})">

                            <i class="fa-solid fa-heart"></i>

                        </button>

                    </div>

                </div>

            </div>

        </div>
        `;

    });

}

//Remove-product
function removeWishlist(index){

    wishlist.splice(index, 1);

    localStorage.setItem("wishlist",JSON.stringify(wishlist)

    );
    
    displayWishlist();
}

//Initial-Load
displayWishlist();
