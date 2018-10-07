import {Room} from '../Room';
import {simpleIdGenerator} from '../utils/simpleIdGenerator';

import {ILobby} from '../interfaces/ILobby';
import {IUser} from '../interfaces/IUser';
import {IHash} from '../interfaces/IHash';
import {IRoom} from '../interfaces/IRoom';

import {EntityPrefixes} from '../constants/EntityPrefixes';

export class Lobby implements ILobby {
    rooms: IHash<IRoom | void>;

    private roomSize = 2;

    constructor() {
        this.rooms = {};
    }

    private createRoom(user: IUser) {
        const hash = `${EntityPrefixes.room}${simpleIdGenerator()}`;
        const room: IRoom = new Room(hash, this.roomSize, user);

        this.rooms[hash] = room;

        return room;
    }

    private closeRoom({id}: IRoom) {
        this.rooms[id] = undefined;
    }

    public addToGame(id: IRoom['id'], user: IUser) {
        const room = this.rooms[id];

        room && room.addUser(user);
    }

    public newGame(user: IUser) {
        return this.createRoom(user);
    }
}