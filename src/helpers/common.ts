import type { BlockItem } from "$models/play-screen";
import { Config, Directions, KeyMap } from "./constants";

export const getId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
export const getNewElementNotPresentInArray = (arr: BlockItem[]): BlockItem => {
  const id = getId();
  let obj: BlockItem = { top: 0, left: 0, id: id };

  let found = false;
  do {
    obj.top = Math.floor(Math.random() * Config.GRID_COUNT);
    obj.left = Math.floor(Math.random() * Config.GRID_COUNT);
    found = !checkItemExistsInArray(obj, arr);
  } while (found == false);

  return obj;
};
export const checkItemExistsInArray = (item: BlockItem, arr: BlockItem[]) => {
  if (item == null) return false;
  if (arr == null) return false;
  for (let count = 0; count < arr.length; count++) {
    if (arr[count].top == item.top && arr[count].left == item.left) return true;
  }
  return false;
};
export const getDirectionFromSwipe = (swipeDirection: string): Directions => {
  switch (swipeDirection) {
    case "bottom":
      return Directions.DOWN;
    case "top":
      return Directions.UP;
    case "right":
      return Directions.RIGHT;
    case "left":
      return Directions.LEFT;
    default:
      return Directions.UNKNOWN;
  }
};
export const getDirectionFromKeyCode = (keyCode: string, direction: Directions): Directions => {
  if (keyCode === KeyMap.UP && direction != Directions.DOWN) {
    return Directions.UP;
  } else if (keyCode === KeyMap.RIGHT && direction != Directions.LEFT) {
    return Directions.RIGHT;
  } else if (keyCode === KeyMap.LEFT && direction != Directions.RIGHT) {
    return Directions.LEFT;
  } else if (keyCode === KeyMap.DOWN && direction != Directions.UP) {
    return Directions.DOWN;
  }
  return Directions.UNKNOWN;
};
export const getOppositeDirection = (dir: Directions) => {
  switch (dir) {
    case Directions.DOWN:
      return Directions.UP;
    case Directions.UP:
      return Directions.DOWN;
    case Directions.LEFT:
      return Directions.RIGHT;
    case Directions.RIGHT:
      return Directions.LEFT;
    case Directions.UNKNOWN:
      return Directions.UNKNOWN;
  }
};
