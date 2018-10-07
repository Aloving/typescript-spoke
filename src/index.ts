import {Gesture} from './enums/Gesture';
import {Lobby} from './Lobby';
import {User} from './User';
import {Room} from './Room';

const lobby = new Lobby();
const user1 = new User('Donald');
const user2 = new User('Vladimir');

const room = lobby.newGame(user1);

lobby.addToGame(room.id, user2);

user1.makeChoice(Gesture.PAPER);
user2.makeChoice(Gesture.SCISSORS);
room.startGame();

console.log(room);
