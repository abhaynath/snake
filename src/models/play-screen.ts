export interface SnakeItem {
  left: number;
  top: number;
}
export enum FoodTypes {
  DEFAULT,
  ROCK,
  CONCRETE,
}
export interface FoodData {
  id: string;
  left: number;
  top: number;
  type: FoodTypes;
}
export interface BonusItem {
  id: string;
  left: number;
  top: number;
}
