if(localStorage.getItem("isLoggedIn") !== "true"){

    window.location.href = "loginpage.html";

}

//get user name
let username =
localStorage.getItem("loggedInUser");


//show user
if(username){

    document.getElementById("navbarUser")
    .innerHTML =
    "Welcome, " + username;

}

//logout
function logout(){

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("loggedInUser");


    window.location.href =
    "loginpage.html";

}

//Get-cart
let cart = 
JSON.parse(localStorage.getItem("cart"))
|| [];

let cartContainer = document.getElementById("cartContainer");

let discountAmount = 0;

//Delivery-date
let today = new Date();

today.setDate(today.getDate());

document.getElementById("deliveryDate").innerHTML = today.toDateString();

//Display-cart
function displayCart(){

    cartContainer.innerHTML = "";

    //Empty-cart
    if(cart.length === 0){

        cartContainer.innerHTML =

        `
        <div class="text-center">

            <h3 class="text-secondary">

                Your Cart Is Empty

            </h3>

        </div>
        `;

        document.getElementById("subtotal").innerHTML = "₹0";

        document.getElementById("totalPrice").innerHTML = "₹0";

        return;
    }

    //Loop-Products
    cart.forEach(function(product, index){

        let price = parseInt(product.price.replace("₹",""));

        let total = price * product.quantity;

        cartContainer.innerHTML +=
        `
        <div class="cart-card">
        
        <div class="row align-items-center g-4">
        
        <!-- IMAGE -->
        
        <div class="col-md-3 text-center">

            <img src="${product.image}"
                 class="cart-img">

        </div>

        <!-- DETAILS -->

        <div class="col-md-6">

            <h3 class="cart-name">

                ${product.name}

            </h3>

            <p class="cart-desc">

                Rich handcrafted premium coffee

            </p>

            <h4 class="cart-price">

                ${product.price}

            </h4>



            <!-- QUANTITY -->

            <div class="quantity-box">

                <button class="qty-btn"
                        onclick="decreaseQty(${index})">

                    -

                </button>

                <span class="qty-number">

                    ${product.quantity}

                </span>

                <button class="qty-btn"
                        onclick="increaseQty(${index})">

                    +

                </button>

            </div>

        </div>



        <!-- REMOVE -->

        <div class="col-md-3 text-center">

            <button class="remove-btn"
                    onclick="removeCart(${index})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>
        
        </div>
    </div>
    
    `;

});

    calculateTotal();
}

//Increase-quantity
function increaseQty(index){
    cart[index].quantity++;
    updateCart();
}

//Decrease-quantity
function decreaseQty(index){

    if(cart[index].quantity > 1){
        cart[index].quantity--;
    }

    updateCart();
}

//Remove-cart
function removeCart(index){

    cart.splice(index, 1);

    updateCart();

}

//Update-product
function updateCart(){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
    
    displayCart();
    
    updateCartCount();
}

//Calculate-total
function calculateTotal(){

    let subtotal = 0;

    cart.forEach(function(product){

        let price = parseInt(product.price.replace("₹",""));

        subtotal += price * product.quantity;

    });

    document.getElementById("subtotal").innerHTML = "₹" + subtotal;

    let total = subtotal + 49 - discountAmount;

    document.getElementById("totalPrice").innerHTML = "₹" + total;

}

//Apply-coupon
function applyCoupon(){

    let coupon = document.getElementById("couponInput").value;

    if(coupon === "COFFEE50"){

        discountAmount = 50;
        
        document.getElementById("discount").innerHTML = "₹50";

        calculateTotal();
        
        alert("Coupon Applied");

    }
    else{
        alert("Invalid Coupon");
    }
}

//Initial
displayCart();

//Go-to-checkout-page
function goToCheckout(){

    window.location.href = "checkout.html";

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