import { PlayerService } from '../player/player.service';
import { RankingService } from '../ranking/ranking.service';
export interface MatchResult {
    winner: {
        id: string;
        rank: number;
    };
    loser: {
        id: string;
        rank: number;
    };
}
export declare class MatchService {
    private readonly playerService;
    private readonly rankingService;
    constructor(playerService: PlayerService, rankingService: RankingService);
    recordMatchResult(winnerId: string, loserId: string): {
        winner: import("../player/player.service").Player;
        loser: import("../player/player.service").Player;
    } | null;
}
