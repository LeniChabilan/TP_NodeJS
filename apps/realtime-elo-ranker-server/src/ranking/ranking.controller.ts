import { Controller, Get, Sse } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { Observable, fromEvent, map } from 'rxjs';
import { EventEmitterService } from '../event-emitter/event-emitter-service';
import { Player } from 'src/player/player.service';


@Controller('api/ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService,
              private readonly eventEmitterService: EventEmitterService
  ) {}

  @Get()
  getRanking() {
    return this.rankingService.getRanking();
  }

  @Sse('events')
  getRankingEvents(): Observable<MessageEvent> {
    return fromEvent(this.eventEmitterService.getEmitter(), 'ranking.update').pipe(
      map((player: Player) => {
        return <MessageEvent>{
          data: {
            type: 'RankingUpdate',
            player: player,
          }
        }
      })
    );
  }
}