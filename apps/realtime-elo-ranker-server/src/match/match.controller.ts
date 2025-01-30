import { Controller, Post, Body } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller('api/match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  recordMatch(@Body() matchData: { winnerId: string; loserId: string }) {
    const result = this.matchService.recordMatchResult(matchData.winnerId, matchData.loserId);
    if (result) {
      return { message: 'Match recorded', data: result };
    }
    return { message: 'Players not found' };
  }
}