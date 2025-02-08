import { Module } from '@nestjs/common';
import { PlayerModule } from './player/player.module';
import { MatchModule } from './match/match.module';
import { RankingModule } from './ranking/ranking.module';
import { EventEmitterModule } from '@nestjs/event-emitter'

@Module({
  imports: [PlayerModule, MatchModule, RankingModule, EventEmitterModule.forRoot()],
})
export class AppModule {}