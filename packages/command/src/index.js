import OrderManager from "./OrderManager.js";
import {PlaceOrderCommand, TrackOrderCommand, CancelOrderCommand} from "./commands/index.js";

const orderManager = new OrderManager();

console.log(orderManager.execute(new PlaceOrderCommand("Pad Thai", "1234")));
console.log(orderManager.execute(new TrackOrderCommand("1234")));
console.log(orderManager.execute(new CancelOrderCommand("1234")));
