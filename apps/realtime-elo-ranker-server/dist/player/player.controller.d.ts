import { PlayerService } from './player.service';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    addPlayer(playerData: {
        id: string;
        rank: number;
    }): {
        message: string;
        data: {
            id: string;
            rank: number;
        };
    } | {
        message: string;
        data?: undefined;
    };
}
