import { Test, TestingModule } from '@nestjs/testing';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { EventEmitterService } from '../event-emitter/event-emitter-service';

describe('PlayerController', () => {
  let controller: PlayerController;
  let service: PlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [
        PlayerService,
        {
          provide: EventEmitterService,
          useValue: {
            getEmitter: () => ({
              emit: jest.fn(),
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<PlayerController>(PlayerController);
    service = module.get<PlayerService>(PlayerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('addPlayer', () => {
    it('should return success message when player is added', async () => {
      const playerData = { id: '1', rank: 1500 };
      const player = { id: '1', rank: 1500 };

      jest.spyOn(service, 'addPlayer').mockReturnValue(player);

      const response = await controller.addPlayer(playerData);

      expect(response).toEqual({
        message: 'Player created',
        data: player,
      });
    });

    it('should return a message when player already exists', async () => {
      const playerData = { id: '1', rank: 1500 };

      jest.spyOn(service, 'addPlayer').mockReturnValue(null);

      const response = await controller.addPlayer(playerData);

      expect(response).toEqual({
        message: 'Player already exists',
      });
    });
  });
});