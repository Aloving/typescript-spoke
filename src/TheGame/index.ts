import {Gesture} from '../enums/Gesture';
import {ITheGame} from '../interfaces/ITheGame';
import {IUser} from '../interfaces/IUser';
import {GameResult} from '../enums/GameResult';

export class TheGame implements ITheGame {
    static beatMap = {
        [Gesture.LIZARD]: [Gesture.PAPER, Gesture.SPOCK],
        [Gesture.SPOCK]: [Gesture.ROCK, Gesture.SCISSORS],
        [Gesture.ROCK]: [Gesture.SCISSORS, Gesture.LIZARD],
        [Gesture.PAPER]: [Gesture.SPOCK, Gesture.ROCK],
        [Gesture.SCISSORS]: [Gesture.LIZARD, Gesture.PAPER]
    };

    public play(firstPlayer: IUser, secondPlayer: IUser){

        if (firstPlayer.choice === secondPlayer.choice) {
            return {
                status: GameResult.DRAW
            };
        }

        const winner = TheGame.beatMap[firstPlayer.choice!].includes(secondPlayer.choice!) ? firstPlayer : secondPlayer;

        return {
            status: GameResult.WON,
            player: winner
        }
    }
}
