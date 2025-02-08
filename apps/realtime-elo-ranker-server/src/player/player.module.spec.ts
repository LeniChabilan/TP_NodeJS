import { Test, TestingModule } from '@nestjs/testing';
import { PlayerModule } from './player.module';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { EventEmitterService } from '../event-emitter/event-emitter-service';

describe('PlayerModule', () => {
  let playerService: PlayerService;
  let playerController: PlayerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PlayerModule],
    }).compile();

    playerService = module.get<PlayerService>(PlayerService);
    playerController = module.get<PlayerController>(PlayerController);
  });

  it('should be defined', () => {
    expect(playerService).toBeDefined();
    expect(playerController).toBeDefined();
  });

  it('should export PlayerService', () => {
    expect(playerService).toBeInstanceOf(PlayerService);
  });
});