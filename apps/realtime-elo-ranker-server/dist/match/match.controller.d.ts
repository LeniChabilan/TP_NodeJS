import { MatchService, MatchResult } from './match.service';
import { Response } from 'express';
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    createMatch(match: MatchResult, res: Response): Response<any, Record<string, any>>;
}
