import {pubSub} from '../pubSub';
import {EntityPrefixes} from '../constants/EntityPrefixes';

import {IUser} from '../interfaces/IUser';
import {simpleIdGenerator} from '../utils/simpleIdGenerator';
import {UserStatus} from '../enums/UserStatus';
import {Gesture} from '../enums/Gesture';

export class User implements IUser {
    id: string;
    name: string;
    score: number;
    status: UserStatus;
    choice?: Gesture;

    constructor(name: string) {
        this.name = name;
        this.id = this.generateId();
        this.score = 0;
        this.status = UserStatus.ONLINE;
    }

    public makeChoice(gesture: Gesture) {
        this.choice = gesture;
    }

    public changeStatus(status: UserStatus) {
        this.status = status;
        pubSub.publish('user/changeStatus', {
            user: this
        })
    }

    private generateId() {
        return `${EntityPrefixes.user}${simpleIdGenerator()}`;
    }
}