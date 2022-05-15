import Command from "../Command.js";

export default function PlaceOrderCommand(order,id) {
  return new Command(orders => {
    orders.push(id);
    return `You have successfully ordered ${order} (${id})`;
  });
}
