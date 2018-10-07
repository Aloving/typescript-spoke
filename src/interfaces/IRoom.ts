import {IHash} from './IHash';
import {IUser} from './IUser';
import {ITheGame} from './ITheGame';

export interface IRoom extends ITheGame{
    id: string;
    users: IHash<IUser>;
    size: number;

    addUser: (user: IUser) => void;
    startGame: () => void;
}
