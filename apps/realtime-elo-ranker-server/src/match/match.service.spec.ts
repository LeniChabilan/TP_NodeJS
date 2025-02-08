import { Test, TestingModule } from '@nestjs/testing';
import { MatchService, MatchResult } from './match.service';
import { PlayerService } from '../player/player.service';
import { RankingService } from '../ranking/ranking.service';

describe('MatchService', () => {
  let service: MatchService;
  let rankingServiceMock: { updateRanking: jest.Mock };
  let playerServiceMock: { findPlayer: jest.Mock };

  beforeEach(async () => {
    rankingServiceMock = { updateRanking: jest.fn() };
    playerServiceMock = { findPlayer: jest.fn() };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MatchService,
        {
          provide: RankingService,
          useValue: rankingServiceMock,
        },
        {
          provide: PlayerService,
          useValue: playerServiceMock,
        },
      ],
    }).compile();

    service = module.get<MatchService>(MatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('processMatch', () => {
    it('should update the ranking and return the winner and loser', () => {
      const matchResult: MatchResult = {
        winner: 'player1',
        loser: 'player2',
        draw: false,
      };

      const winner = { id: 'player1', rank: 1600 };
      const loser = { id: 'player2', rank: 1200 };

      rankingServiceMock.updateRanking.mockReturnValue({ winner, loser });

      const result = service.processMatch(matchResult);

      expect(rankingServiceMock.updateRanking).toHaveBeenCalledWith(matchResult);
      expect(result).toEqual({ winner, loser });
    });
  });
});