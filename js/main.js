import { Cart } from "./models/Cart.js";
import { ProductView } from "./views/ProductViews.js";
import { CartView } from "./views/CartViews.js";
import { appController } from "./controllers/appController.js";

const cart = new Cart();
const productView = new ProductView(document.querySelector('.tous-items'));
const cartView = new CartView();

const app = new appController(cart , cartView , productView);

app.init();