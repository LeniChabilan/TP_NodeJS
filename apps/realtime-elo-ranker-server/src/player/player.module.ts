import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { EventEmitterService } from '../event-emitter/event-emitter-service';



@Module({
  providers: [PlayerService, EventEmitterService],
  controllers: [PlayerController],
  exports: [PlayerService],
})
export class PlayerModule {}