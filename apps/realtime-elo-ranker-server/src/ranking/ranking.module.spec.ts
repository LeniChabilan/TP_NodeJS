import { Test, TestingModule } from '@nestjs/testing';
import { RankingModule } from './ranking.module';
import { RankingService } from './ranking.service';
import { RankingController } from './ranking.controller';
import { PlayerModule } from '../player/player.module';
import { EventEmitterModule } from '../event-emitter/event-emitter.module';

describe('RankingModule', () => {
  let rankingService: RankingService;
  let rankingController: RankingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RankingModule, PlayerModule, EventEmitterModule],
    }).compile();

    rankingService = module.get<RankingService>(RankingService);
    rankingController = module.get<RankingController>(RankingController);
  });

  it('should be defined', () => {
    expect(rankingService).toBeDefined();
    expect(rankingController).toBeDefined();
  });
});