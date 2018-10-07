import {GameResult} from '../enums/GameResult';
import {IUser} from './IUser';

export interface Result {
    status: GameResult;
    player?: IUser;
}

export interface ITheGame {
    play: (firstPlayer: IUser, secondPlayer: IUser) => Result;
}