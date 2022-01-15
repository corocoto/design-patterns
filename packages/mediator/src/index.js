import ChatRoom from "./ChatRoom.js";
import User from "./User.js";

const chatroom = new ChatRoom();
const user1 = new User('John Doe', chatroom);
const user2 = new User('Jane Joe', chatroom);

user1.send('Hi, Jane!');
user2.send('Hi, Joe!');