let selected_product;
let cart_info = {};
let cart_totals = [0];

let cart_quantity = document.getElementsByClassName("cartAmount")[0];
cart_quantity.innerHTML = 0;

let total_display = document.getElementsByClassName("cart-total-price")[0];
total_display.innerHTML = 0;


function Product(name, price, quantity)
{
    this.name = name;
    this.price = parseFloat(price);
    this.quantity = parseInt(quantity);
    this.total = this.price * this.quantity;
}


function reset()
{
    alert("Thank you for shopping with us, your total amount is " + `${total_display.innerHTML}`);
    location.reload();
}


function getCartTotal(cart_info)
{
    //displayPurchase(cart_info);
    let grand_total = 0.0;
    let selected_quantity = 0;

    for(let i = 0; i < Object.keys(cart_info).length; i++)
    {
        selected_quantity += cart_info[Object.keys(cart_info)[i]][1];
        cart_quantity.innerHTML = selected_quantity;

        //Display total amount
        grand_total += cart_info[Object.keys(cart_info)[i]][2];
        total_display.innerHTML = `$${grand_total}.00`;
    }
    return grand_total;
}


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('fas fa-minus');
    for (var i = 0; i < removeCartItemButtons.length; i++)
    {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityinputs = document.getElementsByClassName('cart-quantity-input');
    
    for (var i = 0; i < quantityinputs.length; i++)
    {
        var input = quantityinputs[i]; 
        input.addEventListener('change', quantityChanged);
    }
}


function removeCartItem(event)
{
    var buttonClicked = event.target;
    let item_name = buttonClicked.parentElement.parentElement.parentElement.parentElement.children[0].innerHTML;
    //console.log("ITEM NAME: ", item_name);

    delete cart_info[item_name];

    buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    //console.warn(getCartTotal(cart_info));
}

function quantityChanged(event)
{
    let input = event.target;
    

    let quantity_selected = parseInt(input.value);

    //Extract product name
    let product_name = input.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;

    //Extract price from H2
    let price = input.parentElement.parentElement.getElementsByTagName("h2")[0].innerHTML;
    
    //Remove comma from price
    price = price.replace(',',"");
    
    //Cast price from string to float
    price = parseFloat(price);



    selected_product = new Product(product_name, price, quantity_selected);
    


    if(!(selected_product.name in cart_info))
    {
        //console.log("Not exist");
        //console.log(cart_info);
        cart_info[`${selected_product.name}`] = [selected_product.price, selected_product.quantity, selected_product.total, selected_product.name];
        //console.log(getCartTotal(cart_info));
        getCartTotal(cart_info);
    }
    else{
        //console.log("Exists");
        cart_info[`${selected_product.name}`][1] = selected_product.quantity;
        cart_info[`${selected_product.name}`][2] = selected_product.total;
        //console.log(cart_info);
        //console.log("GRAND TOTAL: ", getCartTotal(cart_info));

        getCartTotal(cart_info);
    }
}