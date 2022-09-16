

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
      { type: BrickTypes.DEFAULT, top: 2, left: 1 },
      { type: BrickTypes.DEFAULT, top: 2, left: 2 },
      { type: BrickTypes.ROCK, top: 2, left: 3 },
      { type: BrickTypes.ROCK, top: 2, left: 4 },
      { type: BrickTypes.DEFAULT, top: 2, left: 5 },
      { type: BrickTypes.DEFAULT, top: 2, left: 6 },
      { type: BrickTypes.CONCRETE, top: 1, left: 3 },
      { type: BrickTypes.CONCRETE, top: 3, left: 4 },
    ],
  },
  {
    bg: "#fda2f2",
    wall: [
      { type: BrickTypes.DEFAULT, top: 2, left: 2 },
      { type: BrickTypes.ROCK, top: 2, left: 3 },
      { type: BrickTypes.ROCK, top: 2, left: 4 },
      { type: BrickTypes.DEFAULT, top: 2, left: 5 },
      { type: BrickTypes.CONCRETE, top: 1, left: 3 },
      { type: BrickTypes.CONCRETE, top: 3, left: 4 },
    ],
  },
  { bg: "#7f61bb", wall: [] },
  { bg: "#c34366", wall: [] },
];
