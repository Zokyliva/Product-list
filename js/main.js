import { Cart } from "./models/Cart.js";
import { ProductView } from "./views/ProductViews.js";
import { CartView } from "./views/CartViews.js";
import { appController } from "./controllers/appController.js";
import { Product , dataDessert } from "./models/Product.js";

const cart = new Cart();
const productView = new ProductView(document.querySelector('.tous-items'));
const cartView = new CartView();

const product = dataDessert.map(({id , name , category , image , price}) => {
    return new Product({id , name , category , image , price});
})

const app = new appController(cart , cartView , productView , product);

app.init();