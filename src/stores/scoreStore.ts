import { writable } from "svelte/store";
import type { ScoreInfo } from "$models/gameState";

export enum ScoreValues {
  FOOD = 5,
  BONUS = 20,
}
const createScoreStore = () => {
  let init: ScoreInfo = { playerName: "Abhay", level: 0, stage: 0, score: 0, highScore: 0, bonus: 0, food: 0 };
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

  const resetGame = () => {
    update((val: ScoreInfo) => {
      val.food = 0;
      val.bonus = 0;
      val.score = 0;
      val.level = 0;
      val.stage = 0;
      return val;
    });
  };
  return { subscribe, resetScore, eatFood, getBonus, nextLevel, resetGame };
};
export let scoreStore = createScoreStore();
