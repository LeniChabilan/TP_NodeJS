import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';

@Injectable()
export class EventEmitterService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  emitRankingUpdate(player: any) {
    this.eventEmitter.emit('ranking.update', player);
  }

  getEmitter(): EventEmitter2 {
    return this.eventEmitter;
  }

  
}
