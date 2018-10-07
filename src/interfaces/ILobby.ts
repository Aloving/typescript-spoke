import {IHash} from './IHash';
import {IRoom} from './IRoom';
import {IUser} from './IUser';

export interface ILobby {
    rooms: IHash<IRoom | void>;
    newGame: (user: IUser) => IRoom;
}