import { getId } from "$helpers/common";
import { BrickTypes, type BrickData } from "./play-screen";

export interface Level {
  bg: string;
  wall: BrickData[];
}

export const Levels: Level[] = [
  {
    bg: "#1c1c1c",
    wall: [
      { id: getId(), type: BrickTypes.ROCK, top: 2, left: 1 },
      { id: getId(), type: BrickTypes.ROCK, top: 2, left: 2 },
      { id: getId(), type: BrickTypes.ROCK, top: 2, left: 3 },
      { id: getId(), type: BrickTypes.ROCK, top: 2, left: 4 },
      { id: getId(), type: BrickTypes.ROCK, top: 2, left: 5 },
      { id: getId(), type: BrickTypes.ROCK, top: 2, left: 6 },
      { id: getId(), type: BrickTypes.ROCK, top: 1, left: 3 },
      { id: getId(), type: BrickTypes.ROCK, top: 3, left: 4 },
    ],
  },
  {
    bg: "#fda2f2",
    wall: [
      { id: getId(), type: BrickTypes.DEFAULT, top: 2, left: 1 },
      { id: getId(), type: BrickTypes.DEFAULT, top: 2, left: 2 },
      { id: getId(), type: BrickTypes.ROCK, top: 2, left: 3 },
      { id: getId(), type: BrickTypes.ROCK, top: 2, left: 4 },
      { id: getId(), type: BrickTypes.DEFAULT, top: 2, left: 5 },
      { id: getId(), type: BrickTypes.DEFAULT, top: 2, left: 6 },
      { id: getId(), type: BrickTypes.CONCRETE, top: 1, left: 3 },
      { id: getId(), type: BrickTypes.CONCRETE, top: 3, left: 4 },
    ],
  },
  { bg: "#7f61bb", wall: [] },
  { bg: "#c34366", wall: [] },
];
