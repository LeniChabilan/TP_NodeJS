export interface Player {
    id: string;
    rank: number;
}
export declare class PlayerService {
    private players;
    playerUpdates: any;
    addPlayer(id: string, rank?: number): {
        id: string;
        rank: number;
    } | null;
    getPlayers(): Player[];
    findPlayer(id: string): Player | undefined;
}
