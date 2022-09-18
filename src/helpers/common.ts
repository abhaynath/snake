import type { BlockItem } from "$models/play-screen";
import { Config } from "./constants";

export const getId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
export const getNewElementNotPresentInArray = (arr: BlockItem[]): BlockItem => {
  const id = getId();
  let obj: BlockItem = { top: 0, left: 0, id: id };

  let found = false;
  do {
    obj.top = Math.floor(Math.random() * Config.MAX_BLOCKS);
    obj.left = Math.floor(Math.random() * Config.MAX_BLOCKS);
    found = !checkItemExistsInArray(obj, arr);
  } while (found == false);
 
  return obj;
};
export const checkItemExistsInArray = (item: BlockItem, arr: BlockItem[]) => {
  for (let count = 0; count < arr.length; count++) {
    if (arr[count].top == item.top && arr[count].left == item.left) return true;
  }
  return false;
};
