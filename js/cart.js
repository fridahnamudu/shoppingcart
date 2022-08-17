// let shop = document.getElementById('shop');
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

// let shopItemsData = [{
//     id:"abcd",
//     name:"Casual dress",
//     price:"6,000",
//     desc:"Lorem Ipsum",
//     Img: "/images/dress1.png"
// } 
// ,{
//     id:"lmn",
//     name:"Official dress",
//     price:"7,000",
//     desc:"Lorem Ipsum",
//     Img: "/images/dress2.png"
// },{
//     id:"opq",
//     name:" Dress 2",
//     price:"8,000",
//     desc:"Lorem Ipsum",
//     Img: "/images/dress3.png"
// },{
//     id:"mfgh",
//     name:"Dress 3",
//     price:"6,000",
//     desc:"Lorem Ipsum",
//     Img: "/images/dress4.png"
// }]

// let generateShop = () => {
//     return (shop.innerHTML = shopItemsData.map((x) => {
//         return ` 
//         <div class="item">
//             <img width="220" src="/images/dress1.png">
//             <div class="details">
//                 <h3> Casual dress</h3>
//                 <p>Lorem ipsum </p>
//                 <div class="price-quantity">
//                     <h2> 6,000</h2>
//                     <div class="buttons">
//                         <i class='fas fa-minus' style="color: red;"></i>
    
//                         <div class="quantity">0</div>
//                         <i class='fas fa-plus' style="color: green;"></i>
    
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `
//     }));
// };


// generateShop ();

// let increment = ()=>{}
// let decrement = ()=>{}
// let update = ()