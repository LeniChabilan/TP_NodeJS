import { Controller, Post, Body } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('api/player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  addPlayer(@Body() playerData: { id: string; rank: number }) {
    const player = this.playerService.addPlayer(playerData.id, playerData.rank);
    if (player) {
      return { message: 'Player created', data: player };
    }
    return { message: 'Player already exists' };
  }
}