import { EnumDimensions } from "../../src/helpers/constants";

export interface Level {
  bg: string;
  wall: BrickData[];
}
export enum BrickTypes {
  DEFAULT,
  ROCK,
  CONCRETE,
}
export interface BrickData {
  left: number;
  top: number;
  type: BrickTypes;
}

export const Levels: Level[] = [
  {
    bg: "#affbaf",
    wall: [
      { type: BrickTypes.DEFAULT, top: EnumDimensions.BLOCK_SIZE * 2, left: EnumDimensions.BLOCK_SIZE * 2 },
      { type: BrickTypes.ROCK, top: EnumDimensions.BLOCK_SIZE * 2, left: EnumDimensions.BLOCK_SIZE * 3 },
      { type: BrickTypes.ROCK, top: EnumDimensions.BLOCK_SIZE * 2, left: EnumDimensions.BLOCK_SIZE * 4 },
      { type: BrickTypes.DEFAULT, top: EnumDimensions.BLOCK_SIZE * 2, left: EnumDimensions.BLOCK_SIZE * 5 },
      { type: BrickTypes.CONCRETE, top: EnumDimensions.BLOCK_SIZE, left: EnumDimensions.BLOCK_SIZE * 3 },
      { type: BrickTypes.CONCRETE, top: EnumDimensions.BLOCK_SIZE * 3, left: EnumDimensions.BLOCK_SIZE * 4 },
    ],
  },
  {
    bg: "#fda2f2",
    wall: [
      { type: BrickTypes.DEFAULT, top: 200, left: 100 },
      { type: BrickTypes.ROCK, top: 200, left: 125 },
      { type: BrickTypes.ROCK, top: 200, left: 150 },
      { type: BrickTypes.DEFAULT, top: 200, left: 175 },
      { type: BrickTypes.CONCRETE, top: 175, left: 125 },
      { type: BrickTypes.CONCRETE, top: 225, left: 150 },
    ],
  },
  { bg: "#7f61bb", wall: [] },
  { bg: "#c34366", wall: [] },
];
