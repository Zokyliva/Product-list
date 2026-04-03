export const dataDessert = [
    {
        "id": "p1",
        "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
        },
        "name": "Waffle with Berries",
        "category": "Waffle",
        "price": 6.50
    },
    {
        "id": "p2",
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
    },
    {
        "id": "p3",
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
    },
    {
        "id": "p4",
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
    },
    {
        "id": "p5",
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
    },
    {
        "id": "p6",
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
    },
    {
        "id": "p7",
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
    },
    {
        "id": "p8",
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
    },
    {
        "id": "p9",
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
    }
]


// /*########################    Main js of the product list    ##########################*/
// import { dataDessert, getDataDessert } from './data.js'
// import { cart } from './cart.js'

// // We use an design pattern PRO work in more frameworks like REACT , VUE , Angular

// /* 1 - render() -> show the data and take this data in the DOM 
//     2 - events() -> logic , hearing click of user , update the data 
//       3 - updateUI -> sychroniser the data with the screen , update the UI after a change
// */

// /* 1 - ######## First: Showing all items in the web with these information ############ */
// // The pages is empty;
// function loadDessertAll() {

//   const showAllItems = document.querySelector('.tous-items');
//   // map() -> transform each element and join() -> paste all they results

//   showAllItems.innerHTML = dataDessert.map(dessert => `
//         <div class="items">
//           <div class="image">
//             <picture>
//               <source srcset="${dessert.image.desktop}" media="(min-width: 1023px)">
//               <source srcset="${dessert.image.tablet}" media="(min-width: 426px)">
//               <img class="image-items" src="${dessert.image.mobile}" alt="">
//             </picture> 
//           </div>
//           <a class="addCart" data-dessert-id = ${dessert.id}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
//             <g fill="#C73B0F" clip-path="url(#a)">
//               <path
//                 d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
//               <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
//             </g>
//             <defs>
//               <clipPath id="a">
//                 <path fill="#fff" d="M.333 0h20v20h-20z" />
//               </clipPath>
//             </defs>
//           </svg> Add to Cart</a>
//           <div class="info-dessert">
//             <p>${dessert.category}</p>
//             <p class="nameDessert">${dessert.name}</p>
//             <p class="price">$${dessert.price}</p>
//           </div>
//         </div>
//     `
//   ).join('');
// }

// /* We are going using event delegation */
// /* 2 - ######## Second: Event for the button Add to cart and updating the cart quantity ######## */
// // event for the button add to Cart
// document.querySelector('.tous-items').addEventListener('click' , (e) => {

//   let quantity = 0;

//   const btn = e.target.closest('.addCart');
//   const dessertId = btn.dataset.dessertId;
//   if(!btn.classList.contains('active')){
//     btn.classList.toggle('active');
//     quantity += 1;
//     btn.innerHTML = `
//   <svg class="decrease-quantity" xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg><p class="quantity-item">${ quantity }</p><svg class="increase-quantity" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
//   `

//     const item = e.target.closest('.items');

//     const imgActive = item.querySelector('.image-items');

//     imgActive.classList.add('active');

//     cart.addToCart(dessertId);
//     console.log('Success');
//     getDataDessert(dessertId);
//   } else {
//     console.log('Failed');
//   }

//   if(e.target.closest('.increase-quantity')) {


//     cart.increaseItemsCartQuantity(dessertId);
//     quantity += 1;
//     console.log('Incrementer++');
//     e.stopPropagation();
//     return;
//   }
  
// })
// // function calculOrderCart() {
// //   let total = 0;
// //   let cartOrderHtml = '';
// //   let orderTotalItem = '';
// //   cart.cartItems.forEach((cartItem) => {

// //     let ID = getDataDessert(cartItem.dessertId);
// //     console.log(ID.id);
// //     /*let totalPerItem = cartItem.quantity;

// //     total += totalPerItem;

// //     cartOrderHtml += `
// //         <li class="cart-item-container cart-one-item-${id.id}">
// //           <div class="list-cart">
// //             <p>${id.name}</p><br>
// //             <p class="price-cart">${cartItem.quantity}x @${id.price} $${totalPerItem} </p>
// //           </div>
// //           <svg class="btn-delete-item" data-dessert-id="${id.id}" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
// //             <path fill="#CAAFA7"
// //               d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
// //           </svg>
// //         </li>
// //       `

// //     orderTotalItem = `
// //           <p>Order Total</p>
// //           <p>$${total}</p>
// //       `
// // */
// //   });
// //   document.querySelector('.total-cart').innerHTML = orderTotalItem;
// //   document.querySelector('.ul-liste').innerHTML = cartOrderHtml;
// // }
// // /* 3 - ######## Third: Showing the item add in the cart to the page web ######## */
// // function showCartItem() {
// //   if (cart.cartItems.length !== 0) {
// //     document.querySelector('.cart-Not-empty').style.display = 'block';
// //     document.querySelector('.cart-empty').style.display = 'none';
// //   } else {
// //     document.querySelector('.cart-Not-empty').style.display = 'none';
// //     document.querySelector('.cart-empty').style.display = 'block';
// //   }
// // }

// // /* 5 - ######## Five: Event for showing the modal to confirmed the order ######## */
// // function confirmedOrderCart() {
// //   let total = 0;
// //   let cartOrderHtml = '';
// //   let orderTotalItem = '';

// //   cart.cartItems.forEach((cartItem) => {

// //     let id = getDataDessert(cartItem.dessertId);

// //     let totalPerItem = cartItem.quantity;

// //     total += totalPerItem;


// //     cartOrderHtml += `
// //     <li>
// //     <div class="items-confirmed">
// //       <img src="${id.image.thumbnail} " alt="">
// //       <div class="info-item-confirmed">
// //         <p>${id.name} </p>
// //         <p>${cartItem.quantity}x   @ $${id.price} </p>
// //       </div>
// //     </div>
// //     <p>${totalPerItem} </p>
// //   </li>
// //       `

// //     orderTotalItem = `
// //     <p>Order Total</p>
// //     <p>$${total} </p>
// //       `

// //   });
// //   document.querySelector('.total-confirmed').innerHTML = orderTotalItem;
// //   document.querySelector('.total-item-confirmed').innerHTML = cartOrderHtml;
// // }

// /* 4 - ######## Fourth: Event for the button delete an item in the cart ######## */
// // button to delete an item in the cart
// document.querySelector('.ul-liste').addEventListener('click', (e) => {
//   console.log('Delete');
//   const btnDelete = e.target.closest('.btn-delete-item');
//   const dessertIdDelete = btnDelete.dataset.dessertId;
//   cart.deleteItemInCart(dessertIdDelete);
//   const containerItem = document.querySelector(`.cart-one-item-${dessertIdDelete}`);
//   containerItem.remove();
//   cart.updateCartQuantity();
//   // calculOrderCart();
//   showCartItem();
// })

// document.querySelector('.btn-submit-order').addEventListener('click', () => {
//   document.querySelector('.modal-order-confirmation').style.display = 'block';
//   const body = document.querySelector('body');
//   body.style.backgroundColor = '';

//   confirmedOrderCart();
// })

// function Init() {
//   loadDessertAll();
//   calculOrderCart();
//   showCartItem();
//   confirmedOrderCart();
//   cart.updateCartQuantity();
// }
// Init();
// // document.querySelectorAll('.addCart').forEach((btnAdd) => {
// //   const dessertIdAdd = btnAdd.dataset.dessertId;

// //   // if the button not contains activate
// //   if (!btnAdd.classList.contains('active')) {
// //     console.log('Add');
// //     // document.querySelectorAll('.addCart').forEach(b => b.classList.remove('active'));
// //     btnAdd.classList.toggle('active');

// //     btnAdd.innerHTML = `
// //   <svg class="decrease-quantity" xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg><p class="quantity-item">1</p><svg class="increase-quantity" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
// //   `


// //     const item = btnAdd.closest('.items');

// //     const imgActive = item.querySelector('.image-items');

// //     imgActive.classList.add('active');
// //     return;
// //   }
// // })
