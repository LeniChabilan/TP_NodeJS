import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';
import { EventEmitterService } from '../event-emitter/event-emitter-service';

describe('PlayerService', () => {
  let service: PlayerService;
  let eventEmitterMock: { emit: jest.Mock };

  beforeEach(async () => {
    eventEmitterMock = { emit: jest.fn() };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayerService,
        {
          provide: EventEmitterService,
          useValue: {
            getEmitter: () => ({
              emit: eventEmitterMock.emit,
            }),
          },
        },
      ],
    }).compile();

    service = module.get<PlayerService>(PlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addPlayer', () => {
    it('should add a new player and emit an event', () => {
      const player = service.addPlayer('1', 1500);
      
      expect(player).toEqual({ id: '1', rank: 1500 });
      expect(eventEmitterMock.emit).toHaveBeenCalledWith('ranking.update', player);
    });

    it('should not add a player if the player already exists', () => {
      service.addPlayer('1', 1500);
      const result = service.addPlayer('1', 1500);
      
      expect(result).toBeNull();
      expect(eventEmitterMock.emit).toHaveBeenCalledTimes(1); // l'événement ne devrait être émis qu'une seule fois
    });
  });

  describe('getPlayers', () => {
    it('should return all players', () => {
      service.addPlayer('1', 1500);
      service.addPlayer('2', 1200);
      
      const players = service.getPlayers();
      
      expect(players).toEqual([
        { id: '1', rank: 1500 },
        { id: '2', rank: 1200 },
      ]);
    });
  });

  describe('findPlayer', () => {
    it('should find a player by id', () => {
      service.addPlayer('1', 1500);
      
      const player = service.findPlayer('1');
      
      expect(player).toEqual({ id: '1', rank: 1500 });
    });

    it('should return undefined if player not found', () => {
      service.addPlayer('1', 1500);
      
      const player = service.findPlayer('2');
      
      expect(player).toBeUndefined();
    });
  });
});