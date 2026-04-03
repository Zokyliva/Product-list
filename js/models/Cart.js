export class Cart{

    cartItems;

    // this is private property : we can use it only inside of the class
    //#localStorageKey; // localStorageKey = undefined;

    // More details about constructor : 
    // 1- Has to be named "constructor"
    // 2- Should not retuern anything
    constructor() {
        this.localStorage();
    }

    // a function inside an object are a method
    localStorage() {
        // we use 'this' solve problem of the name object and to have an easy access in the property of the object
        this.cartItems = JSON.parse(localStorage.getItem('cart'));
        if (!this.cartItems) {
            this.cartItems = [];
        }
    }

    // WE Use localstorage for saving data of the cart
    saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }

    addToCart(dessertId) {
        const item = this.cartItems.find(i => i.id === dessertId.id);

        if(item) {
            item.quantity++;
        } else {
            this.cartItems.push({ ...dessertId , quantity : 1 });
        }

        // to access in the method of the object, we use 'this' in place of the name of the object
        this.saveToStorage();
        console.log(this.cartItems);
    }

    // We're going to create new cart for finding which items is delete
    deleteItemInCart(id) {
        this.cartItems = this.cartItems.filter(i => i.id !== id)
        // to access in the method of the object, we use 'this' in place of the name of the object
        this.saveToStorage();
        console.log(this.cartItems);
    }

    increaseItemsCartQuantity(dessertId) {
        const item = this.cartItems.find((item) => item.id === dessertId)

        if (item) {
            item.quantity++;
            // to access in the method of the object, we use 'this' in place of the name of the object
            this.saveToStorage();
            console.log(this.cartItems);
        }

    }

    decreaseItemsCartQuantity(dessertId) {
        const item = this.cartItems.find((item) => item.id === dessertId)

        if(item && item.quantity > 1) {
            item.quantity--;
            // to access in the method of the object, we use 'this' in place of the name of the object
            this.saveToStorage();
        } else {
            return;
        }
    }

    clear() {
        this.cartItems = [];
        this.saveToStorage();
    }

    getTotal() {
        return this.cartItems.reduce((t , i) => t + i.price * i.quantity, 0);
    }

    getCount() {
        return this.cartItems.reduce((c , i) => c + i.quantity, 0);
    }
}