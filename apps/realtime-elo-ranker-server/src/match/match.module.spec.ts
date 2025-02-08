import { Test, TestingModule } from '@nestjs/testing';
import { MatchModule } from './match.module';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { PlayerModule } from '../player/player.module';
import { RankingModule } from '../ranking/ranking.module';

describe('MatchModule', () => {
  let matchService: MatchService;
  let matchController: MatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MatchModule, PlayerModule, RankingModule],
    }).compile();

    matchService = module.get<MatchService>(MatchService);
    matchController = module.get<MatchController>(MatchController);
  });

  it('should be defined', () => {
    expect(matchService).toBeDefined();
    expect(matchController).toBeDefined();
  });
});