import Command from "../Command.js";

export default function CancelOrderCommand(id) {
  return new Command(orders => {
    orders = orders.filter(order => order.id !== id);
    return `You have canceled your order ${id}`;
  });
}
