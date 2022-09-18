export interface BlockItem {
  id: string;
  left: number;
  top: number;
}
export interface SnakeItem extends BlockItem {}
export enum FoodTypes {
  DEFAULT,
  ROCK,
  CONCRETE,
}
export enum BonusTypes {
  STAR,
  GEM,
  RUBY,
}
export interface FoodItem extends BlockItem {
  type: FoodTypes;
}
export interface BonusItem extends BlockItem {
  type: BonusTypes;
}
export enum BrickTypes {
  DEFAULT,
  ROCK,
  CONCRETE,
}
export interface BrickData extends BlockItem {
  type: BrickTypes;
}