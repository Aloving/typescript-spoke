import {Gesture} from '../enums/Gesture';
import {UserStatus} from '../enums/UserStatus';

export interface IUser {
    name: string;
    id: string;
    score: number;
    status: UserStatus;
    choice?: Gesture;
    makeChoice: (gesture: Gesture) => void;
    changeStatus: (status: UserStatus) => void;
}