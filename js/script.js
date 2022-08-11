// let shop = document.getElementById('shop');

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
var removeCartItemButtons = document.getElementsByClassName('fas fa-minus')
console.log(removeCartItemButtons)
for (var i = 0; i <removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
       var buttonClicked = event.target
       buttonClicked.parentElement.remove()
       updateCartTotal()
    })
}

function updateCartTotal() {
    var cartItemContainer =  document.getElementsByClassName('shop')[0]
}