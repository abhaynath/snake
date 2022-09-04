import { writable } from "svelte/store";
import type { ScoreInfo } from "../../src/models/gameState";

export enum ScoreValues {
  FOOD = 5,
  BONUS = 20,
}
const createScoreStore = () => {
  let init: ScoreInfo = { playerName: "Abhay", level: 1, stage: 1, score: 0, highScore: 0, bonus: 0, food: 0 };
  let { update, subscribe } = writable<ScoreInfo>(init);
  const resetScore = () => {
    update((val: ScoreInfo) => {
      val.food = 0;
      val.bonus = 0;
      val.score = 0;
      return val;
    });
  };
  const eatFood = () => {
    update((val: ScoreInfo) => {
      val.food = val.food + 1;
      val.score = val.food * ScoreValues.FOOD + val.bonus * ScoreValues.BONUS;
      if (val.score > val.highScore) {
        val.highScore = val.score;
      }
      return val;
    });
  };

  const getBonus = () => {
    update((val: ScoreInfo) => {
      val.bonus = val.bonus + 1;
      return val;
    });
  };
  const nextLevel = () => {
    update((val: ScoreInfo) => {
      val.level = val.level + 1;
      return val;
    });
  };

  return { subscribe, resetScore, eatFood, getBonus, nextLevel };
};
export let scoreStore = createScoreStore();