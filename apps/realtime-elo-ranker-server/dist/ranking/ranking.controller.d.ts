import { RankingService } from './ranking.service';
import { Observable } from 'rxjs';
import { EventEmitterService } from '../event-emitter/event-emitter-service';
import { Player } from 'src/player/player.service';
export declare class RankingController {
    private readonly rankingService;
    private readonly eventEmitterService;
    constructor(rankingService: RankingService, eventEmitterService: EventEmitterService);
    getRanking(): Player[];
    getRankingEvents(): Observable<MessageEvent>;
}
