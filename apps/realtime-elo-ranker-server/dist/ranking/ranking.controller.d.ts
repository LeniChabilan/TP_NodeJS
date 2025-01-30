import { RankingService } from './ranking.service';
import { Observable } from 'rxjs';
export declare class RankingController {
    private readonly rankingService;
    constructor(rankingService: RankingService);
    getRanking(): import("../player/player.service").Player[];
    subscribeToRankingUpdates(): Observable<MessageEvent>;
}
