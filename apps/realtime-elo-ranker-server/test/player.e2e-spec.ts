import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { PlayerModule } from '../src/player/player.module';
import { PlayerService } from '../src/player/player.service';

describe('PlayerController (e2e)', () => {
  let app: INestApplication;
  let playerService = { addPlayer: jest.fn(), getPlayers: jest.fn() };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PlayerModule],
    })
      .overrideProvider(PlayerService)
      .useValue(playerService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/player (POST) should add a player', () => {
    const playerData = { id: '1', rank: 1500 };
    playerService.addPlayer.mockReturnValue(playerData);

    return request(app.getHttpServer())
      .post('/api/player')
      .send(playerData)
      .expect(201)
      .expect({
        message: 'Player created',
        data: playerData,
      });
  });

  it('/api/player (POST) should return a message when player already exists', () => {
    const playerData = { id: '1', rank: 1500 };
    playerService.addPlayer.mockReturnValue(null);

    return request(app.getHttpServer())
      .post('/api/player')
      .send(playerData)
      .expect(200)
      .expect({
        message: 'Player already exists',
      });
  });

  afterAll(async () => {
    await app.close();
  });
});