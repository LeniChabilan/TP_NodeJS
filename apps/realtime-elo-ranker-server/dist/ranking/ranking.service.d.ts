import { PlayerService, Player } from '../player/player.service';
export declare class RankingService {
    private readonly playerService;
    private rankingUpdates;
    constructor(playerService: PlayerService);
    getRanking(): Player[];
    getRankingUpdates(): import("rxjs").Observable<Player[]>;
    updateRanking(): void;
}
