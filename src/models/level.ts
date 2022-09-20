import { getId } from "$helpers/common";
import { Config } from "$helpers/constants";
import { BrickTypes, type BrickData } from "./play-screen";

export interface Level {
  bg: string;
  wall: BrickData[];
}
const centerPoint = Math.floor(Config.GRID_COUNT / 2);
export const Levels: Level[] = [
  {
    bg: "#1c1c1c",
    wall: [
      { id: getId(), type: BrickTypes.CONCRETE, top: centerPoint, left: centerPoint },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint - 1, left: centerPoint },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint + 1, left: centerPoint },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint, left: centerPoint - 1 },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint, left: centerPoint + 1 },
      { id: getId(), type: BrickTypes.CONCRETE, top: centerPoint - 2, left: centerPoint },
      { id: getId(), type: BrickTypes.CONCRETE, top: centerPoint + 2, left: centerPoint },
      { id: getId(), type: BrickTypes.CONCRETE, top: centerPoint, left: centerPoint - 2 },
      { id: getId(), type: BrickTypes.CONCRETE, top: centerPoint, left: centerPoint + 2 },
    ],
  },
  {
    bg: "#2e0b2a",
    wall: [
      { id: getId(), type: BrickTypes.CONCRETE, top: centerPoint, left: centerPoint },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint - 3, left: centerPoint },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint + 3, left: centerPoint },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint, left: centerPoint - 3 },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint, left: centerPoint + 3 },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint - 5, left: centerPoint },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint + 5, left: centerPoint },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint, left: centerPoint - 5 },
      { id: getId(), type: BrickTypes.DEFAULT, top: centerPoint, left: centerPoint + 5 },
    ],
  },
];
