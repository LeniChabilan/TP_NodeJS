import { Controller, Get, Sse } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { Observable, map } from 'rxjs';

@Controller('api/ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get()
  getRanking() {
    return this.rankingService.getRanking();
  }

  @Get('events')
  @Sse()
  subscribeToRankingUpdates(): Observable<MessageEvent> {
    return this.rankingService.getRankingUpdates().pipe(
      map((ranking) => ({ data: ranking } as MessageEvent)),
    );
  }
}