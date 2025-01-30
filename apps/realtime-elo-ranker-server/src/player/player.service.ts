import { Injectable } from '@nestjs/common';

export interface Player {
  id: string;
  rank: number;
}

@Injectable()
export class PlayerService {
  private players: Player[] = [];

  addPlayer(id: string, rank: number) {
    const existingPlayer = this.players.find((p) => p.id === id);
    if (!existingPlayer) {
      const player = { id, rank };
      this.players.push(player);
      return player;
    }
    return null;
  }

  getPlayers(): Player[] {
    return this.players;
  }

  findPlayer(id: string): Player | undefined {
    return this.players.find((p) => p.id === id);
  }
}