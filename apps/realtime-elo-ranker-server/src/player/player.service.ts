import { Injectable } from '@nestjs/common';
import { EventEmitterService } from '../event-emitter/event-emitter-service';

export interface Player {
    id: string;
    rank: number;
}

@Injectable()
export class PlayerService {
    constructor(private readonly eventEmitter: EventEmitterService) {}
    private players: Player[] = [];
  playerUpdates: any;

    addPlayer(id: string, rank: number = 1000) {
        const existingPlayer = this.players.find((p) => p.id === id);
        if (!existingPlayer) {
            const player = { id, rank };
            this.players.push(player);
            this.eventEmitter.getEmitter().emit('ranking.update', player);
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