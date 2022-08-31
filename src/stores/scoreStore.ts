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

  return { subscribe, resetScore, eatFood };
};
export let scoreStore = createScoreStore();
