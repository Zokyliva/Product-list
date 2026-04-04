export class appController {
    constructor(cart, cartView, productView, product) {
        this.cart = cart;
        this.cartView = cartView;
        this.productView = productView;
        this.product = product;
    }

    init() {
        this.productView.renderShowProduct(this.product , this.cart);
        this.cartView.renderShowCart(this.cart);

        document.addEventListener('click' , (e) => {
            const id = e.target.dataset.dessertId;

            if(e.target.closest(".addCart")){
                const productAdd = this.product.find(p => p.id === id);
                this.cart.addToCart(productAdd);
            } 

            if(e.target.classList.contains("decrease-quantity")) {
                const item = this.cart.cartItems.find(i => i.id === id);
                item.quantity === 1
                    ? this.cart.deleteItemInCart(id)
                    : this.cart.decreaseItemsCartQuantity(id)
                console.log("Merci -0");
            }

            if(e.target.classList.contains("increase-quantity")) {
                console.log("Merci +1");
                this.cart.increaseItemsCartQuantity(id);
            }

            if(e.target.classList.contains("btn-delete-item")) {
                this.cart.deleteItemInCart(id);
                console.log('Delete successfuly!');
            }

            // cle du fonctionnement
            this.productView.renderShowProduct(this.product , this.cart);
            this.cartView.renderShowCart(this.cart);
        })
    }
}