import Command from "../Command.js";

export default function TrackOrderCommand(id) {
  return new Command(() => {
    return `Your order ${id} will arrive in 20 minutes`;
  });
}
