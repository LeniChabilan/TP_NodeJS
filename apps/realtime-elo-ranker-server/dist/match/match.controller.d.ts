import { MatchService } from './match.service';
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    recordMatch(matchData: {
        winnerId: string;
        loserId: string;
    }): {
        message: string;
        data: {
            winner: import("../player/player.service").Player;
            loser: import("../player/player.service").Player;
        };
    } | {
        message: string;
        data?: undefined;
    };
}
