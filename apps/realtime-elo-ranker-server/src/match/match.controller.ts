import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { MatchService,MatchResult } from './match.service';
import { Response } from 'express';


@Controller('api/match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  createMatch(@Body() match: MatchResult, @Res() res: Response) {
    try {
      console.log(match);
      const result = this.matchService.processMatch(match);
      return res.status(HttpStatus.OK).json(result);
    } catch {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        code: 422,
        message: "Un des joueurs n'existe pas",
      });
    }
  }
}
