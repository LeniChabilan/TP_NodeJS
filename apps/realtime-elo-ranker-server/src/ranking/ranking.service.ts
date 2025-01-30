import { Injectable } from '@nestjs/common';
import { PlayerService, Player } from '../player/player.service';
import { Subject } from 'rxjs';

@Injectable()
export class RankingService {
  private rankingUpdates = new Subject<Player[]>();

  constructor(private readonly playerService: PlayerService) {}

  getRanking(): Player[] {
    return [...this.playerService.getPlayers()].sort((a, b) => b.rank - a.rank);
  }

  getRankingUpdates() {
    return this.rankingUpdates.asObservable();
  }

  updateRanking() {
    this.rankingUpdates.next(this.getRanking());
  }
}