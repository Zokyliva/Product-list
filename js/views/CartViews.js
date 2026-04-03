export class CartView {
    constructor() {
        this.showCartItem = document.querySelector('.ul-liste');
        this.showCart = document.querySelector('.cart-empty');
        this.NotShowCart = document.querySelector('.cart-Not-empty')
        this.total = document.querySelector('.total');
        this.nbrElmtCart = document.querySelector('.number-quantity');
    }

    renderShowCart(cart) {

        if (cart.cartItems.length !== 0) {
            this.NotShowCart.style.display = 'block';
            this.showCart.style.display = 'none';

            this.nbrElmtCart.textContent = cart.getCount();
        } else {
            this.NotShowCart.style.display = 'none';
            this.showCart.style.display = 'block';

        }
        this.showCartItem.innerHTML = cart.cartItems.map(dessert =>
            `
            <li class="cart-item-container">
                <div class="list-cart">
                    <p>${dessert.name}</p><br>
                    <p class="price-cart">${dessert.quantity}x @${dessert.price} $${dessert.quantity * dessert.price} </p>
                </div>
                <svg class="btn-delete-item" data-dessert-id="${dessert.id}" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path fill="#CAAFA7"
                    d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                </svg>
            </li>
            `).join("");

        this.nbrElmtCart.textContent = cart.getCount();
        this.total.textContent = cart.getTotal().toFixed(2);
    }
}