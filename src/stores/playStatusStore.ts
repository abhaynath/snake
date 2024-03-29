import type { BonusItem, FoodItem, SnakeItem } from "$models/play-screen";
import { writable } from "svelte/store";
import { getId } from "../helpers/common";
export interface PlayStatus {
  bonus: BonusItem[];
  foods: FoodItem[];
  snake: SnakeItem[];
  lastFoodLocation: number;
}
const getDefaultSnake = () => {
  const defaultSnake: SnakeItem[] = [
    {
      id: getId(),
      left: 2,
      top: 0,
    },
    {
      id: getId(),
      left: 1,
      top: 0,
    },
    {
      id: getId(),
      left: 0,
      top: 0,
    },
  ];
  return defaultSnake;
};
const getPlayStatusStore = () => {
  let playStatus: PlayStatus = { bonus: [], foods: [], snake: getDefaultSnake(), lastFoodLocation: -1 };
  let { update, subscribe } = writable<PlayStatus>(playStatus);

  const addBonus = (item: BonusItem) => {
    update((val: PlayStatus) => {
      const index = val.bonus.findIndex((p: BonusItem) => p.id == item.id);
      if (index == -1) {
        val.bonus.push(item);
        val.bonus = val.bonus;
        val = val;
      }
      return val;
    });
  };

  const removeBonus = (id: string) => {
    update((val: PlayStatus) => {
      let d = val.bonus.slice(0);
      let index = d.findIndex((p: BonusItem) => p.id == id);
      if (index != -1) {
        d.splice(index, 1);
        val.bonus = d;
        val = val;
      }
      return val;
    });
  };

  const addFood = (item: FoodItem) => {
    update((val: PlayStatus) => {
      const index = val.foods.findIndex((p: FoodItem) => p.id == item.id);
      if (index == -1) {
        val.foods.push(item);
        val.foods = val.foods;
        val = val;
      }
      return val;
    });
  };

  const removeFood = (id: string) => {
    update((val: PlayStatus) => {
      let d = val.foods.slice(0);
      let index = d.findIndex((p: FoodItem) => p.id == id);
      if (index != -1) {
        // val.lastFoodLocation = 1;
        d.splice(index, 1);
        val.foods = d;
        val = val;
      }
      return val;
    });
  };

  const moveSnake = (head: SnakeItem) => {
    update((val: PlayStatus) => {
      let arr = val.snake;
      arr.pop();
      arr = [head, ...arr];
      val.snake = arr;
      //  val.lastFoodLocation = val.lastFoodLocation + 1;
      // console.log(val.lastFoodLocation);
      return val;
    });
  };
  const growSnake = () => {
    update((val: PlayStatus) => {
      let arr = val.snake;
      arr = [...arr, arr[arr.length - 1]];
      val.snake = arr;
      return val;
    });
  };
  const reset = () => {
    update((val: PlayStatus) => {
      val = { bonus: [], foods: [], snake: getDefaultSnake(), lastFoodLocation: null };
      return val;
    });
  };
  return { subscribe, addBonus, removeBonus, addFood, removeFood, moveSnake, growSnake, reset };
};
export const PlayStatusStore = getPlayStatusStore();
