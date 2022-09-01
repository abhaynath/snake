import GameOverScreen from "../../src/components/screens/GameOverScreen.svelte";
import PlayScreen from "../../src/components/screens/PlayScreen.svelte";
import StartScreen from "../../src/components/screens/StartScreen.svelte";
import CongratScreen from "../../src/components/screens/CongratScreen.svelte";
import { GameStatus, type ScreenStatus } from "../../src/models/gameState";

import { writable } from "svelte/store";

const createScreensStore = () => {
  const screens: ScreenStatus[] = [
    { status: GameStatus.NOT_STARTED, component: StartScreen },
    { status: GameStatus.RUNNING, component: PlayScreen },
    { status: GameStatus.PAUSED, component: PlayScreen },
    { status: GameStatus.RESUME, component: PlayScreen },
    { status: GameStatus.GAME_OVER, component: GameOverScreen },
    { status: GameStatus.ALL_LEVELS_CLEARED, component: CongratScreen },
  ];

  let { update, subscribe } = writable<ScreenStatus>(screens.find((d) => d.status == GameStatus.ALL_LEVELS_CLEARED));

  const startGame = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.RUNNING);
      return val;
    });
  };

  const pauseGame = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.PAUSED);
      return val;
    });
  };
  const resumeGame = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.RUNNING);
      return val;
    });
  };
  const gameOver = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.GAME_OVER);
      return val;
    });
  };
  const welcomeScreen = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.NOT_STARTED);
      return val;
    });
  };
  const allLevelsCleared = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.ALL_LEVELS_CLEARED);
      return val;
    });
  };
  return { subscribe, startGame, pauseGame, resumeGame, gameOver, welcomeScreen, allLevelsCleared };
};

export const screenStore = createScreensStore();
