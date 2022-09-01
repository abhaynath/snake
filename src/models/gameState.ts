export enum GameStatus {
  NOT_STARTED = "NOT_STARTED",
  RUNNING = "RUNNING",
  PAUSED = "PAUSED",
  RESUME = "RESUME",
  GAME_OVER = "GAME OVER",
  ALL_LEVELS_CLEARED = "ALL_LEVELS_CLEARED",
}
export interface ScreenStatus {
  status: GameStatus;
  component: any;
}
export interface ScoreInfo {
  playerName: string;
  stage: number;
  level: number;
  score: number;
  highScore: number;
  food: number;
  bonus: number;
}
