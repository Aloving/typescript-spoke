import {TheGame} from '../TheGame';

import {GameResult} from '../enums/GameResult';
import {IUser} from '../interfaces/IUser';
import {IRoom} from '../interfaces/IRoom';
import {IHash} from '../interfaces/IHash';

export class Room extends TheGame implements IRoom {
    id: string;
    size: number;
    users: IHash<IUser>;

    constructor(id: string, size: number, user: IUser) {
        super();
        this.users = {};

        this.id = id;
        this.size = size;
        this.users[user.id] = user;
    }

    public addUser(user: IUser) {
        this.users[user.id] = user;
    }

    public startGame() {
        const userIds = Object.keys(this.users);
        const firstPlayer = this.users[userIds[0]];
        const secondPlayer = this.users[userIds[1]];

        const {status, player} = super.play(firstPlayer, secondPlayer);
        
        if (status !== GameResult.DRAW) {
            player!.score = player!.score + 1;
        }
    }
}
