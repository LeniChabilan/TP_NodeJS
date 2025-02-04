import { Injectable } from '@nestjs/common';
import { PlayerService } from '../player/player.service';
import { RankingService } from '../ranking/ranking.service';

export interface MatchResult {
  winner: { id: string; rank: number };
  loser: { id: string; rank: number };
}

@Injectable()
export class MatchService {
  constructor(
    private readonly playerService: PlayerService,
    private readonly rankingService: RankingService,
  ) {}

  recordMatchResult(winnerId: string, loserId: string) {
    const winner = this.playerService.findPlayer(winnerId);
    const loser = this.playerService.findPlayer(loserId);

    if (winner && loser) {
      winner.rank += 10; 
      loser.rank -= 10;

      this.rankingService.updateRanking();
      return { winner, loser };
    }
    return null;
  }
}