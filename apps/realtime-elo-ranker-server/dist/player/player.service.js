"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_service_1 = require("../event-emitter/event-emitter-service");
let PlayerService = class PlayerService {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.players = [];
    }
    addPlayer(id, rank = 1000) {
        const existingPlayer = this.players.find((p) => p.id === id);
        if (!existingPlayer) {
            const player = { id, rank };
            this.players.push(player);
            this.eventEmitter.getEmitter().emit('ranking.update', player);
            return player;
        }
        return null;
    }
    getPlayers() {
        return this.players;
    }
    findPlayer(id) {
        return this.players.find((p) => p.id === id);
    }
};
exports.PlayerService = PlayerService;
exports.PlayerService = PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_service_1.EventEmitterService])
], PlayerService);
//# sourceMappingURL=player.service.js.map