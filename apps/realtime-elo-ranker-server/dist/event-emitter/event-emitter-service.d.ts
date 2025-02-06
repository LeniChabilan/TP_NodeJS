import { EventEmitter2 } from 'eventemitter2';
export declare class EventEmitterService {
    private readonly eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    emitRankingUpdate(player: any): void;
    getEmitter(): EventEmitter2;
}
