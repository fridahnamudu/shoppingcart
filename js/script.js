if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('fas fa-minus')
    for (var i = 0; i <removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
        
    }
    var quantityinputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityinputs.length; i++){
        var input = quantityinputs[i]
        input.addEventListener('change', quantityChanged)
    }
}

function removeCartItem(event){

    var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
            updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}


function updateCartTotal() {
    var shop =  document.getElementsByClassName('shop')[0]
    var items = shop.getElementsByClassName('item')
    var total = 0
    for (var i = 0; i < items.length; i++){
        var item = items[i]
        var priceElement = item.getElementsByClassName('cart-price')[0]
        var quantityElement = item.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText)
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = total

}