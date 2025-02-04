import { PlayerService, Player } from '../player/player.service';
import { MatchResult } from '../match/match.service';
export declare class RankingService {
    private readonly playerService;
    private readonly K;
    constructor(playerService: PlayerService);
    private rankingUpdates;
    getRanking(): Player[];
    getRankingUpdates(): import("rxjs").Observable<Player[]>;
    private calculateExpectedScore;
    private calculateNewRating;
    updateRanking(match: MatchResult): {
        winner: Player;
        loser: Player;
    };
}
