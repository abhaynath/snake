export enum GameStatus {
  NOT_STARTED = "NOT_STARTED",
  RUNNING = "RUNNING",
  PAUSED = "PAUSED",
  RESUME = "RESUME",
  GAME_OVER = "GAME OVER",
}
export interface ScreenStatus {
  status: GameStatus;
  component: any;
}
