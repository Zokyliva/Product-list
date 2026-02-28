// ### We are going to use oriented object program OOP , we use this to : tries to represent the real world

// we should create a class, its a better way to organise our object
// Class = object generator
class Cart {

    // both are property of the object cart
    // this is public property : we can use it inside or outside of the class
    cartItems; // cartItems = undefined;

    // this is private property : we can use it only inside of the class
    #localStorageKey; // localStorageKey = undefined;

    // More details about constructor : 
        // 1- Has to be named "constructor"
        // 2- Should not retuern anything
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.localStorage();
    }

    // a function inside an object are a method
    localStorage() {
        // we use 'this' solve problem of the name object and to have an easy access in the property of the object
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
        if (!this.cartItems) {
            this.cartItems = [];
        }
    }

    // WE Use localstorage for saving data of the cart
    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(dessertId) {
        let matching;
        this.cartItems.forEach((item) => {
            if (dessertId === item.dessertId) {
                matching = item;
            }
        });

        if (matching) {
            matching.quantity += 1;
        } else {
            this.cartItems.push({
                dessertId: dessertId,
                quantity: 1
            })
        }

        // to access in the method of the object, we use 'this' in place of the name of the object
        this.saveToStorage();
    }

    updateCartQuantity() {
        let cartQuantity = 0;

        this.cartItems.forEach((item) => {
            cartQuantity += item.quantity;
        });

        document.querySelector('.number-quantity').innerHTML = cartQuantity;
    }

    // We're going to create new cart for finding which items is delete
    deleteItemInCart(dessertId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if (cartItem.dessertId !== dessertId) {
                newCart.push(cartItem);
            }
        });
        this.cartItems = newCart;
        console.log(this.cartItems);
        // to access in the method of the object, we use 'this' in place of the name of the object
        this.saveToStorage();
    }

    // function for the price
    // priceFixed2(price) {
    //     return price.toFixed(2);
    // }
}

export const cart = new Cart('cart');


console.log(cart);