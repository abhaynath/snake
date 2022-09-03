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
      { type: BrickTypes.DEFAULT, top: 100, left: 100 },
      { type: BrickTypes.ROCK, top: 100, left: 125 },
      { type: BrickTypes.ROCK, top: 100, left: 150 },
      { type: BrickTypes.DEFAULT, top: 100, left: 175 },
      { type: BrickTypes.CONCRETE, top: 75, left: 125 },
      { type: BrickTypes.CONCRETE, top: 125, left: 150 },
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