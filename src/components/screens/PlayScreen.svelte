<script lang="ts">
  import { scoreStore } from "./../../stores/scoreStore";
  import { screenStore } from "../../../src/stores/screenStore";
  import type { ScoreInfo, ScreenStatus } from "src/models/gameState";
  import { Directions, EnumDimensions, Config, KeyMap } from "../../../src/helpers/constants";
  import Food from "../game-items/Food.svelte";
  import Snake from "../game-items/Snake.svelte";
  import { Levels } from "../../../src/models/level";
  import Bonus from "../game-items/Bonus.svelte";
  import { getId } from "../../../src/helpers/common";

  let isGamePaused = false;

  let currentScreen: ScreenStatus;
  let currentScoreInfo: ScoreInfo;

  screenStore.subscribe((val: ScreenStatus) => {
    currentScreen = val;
  });
  scoreStore.subscribe((val: ScoreInfo) => {
    currentScoreInfo = val;
  });
  const gameOver = () => {
    screenStore.gameOver();
  };
  interface BonusItem {
    id: string;
    left: number;
    top: number;
  }
  interface SnakeItem {
    left: number;
    top: number;
  }
  let foodLeft = 0;
  let foodTop = 0;
  let direction = Directions.RIGHT;
  let snakeBodies: SnakeItem[] = [];
  let bonusList: BonusItem[] = [];
  let intervalId: string | number | NodeJS.Timeout;

  const GAME_WIDTH = EnumDimensions.SCREEN_WIDTH;
  const GAME_HEIGHT = EnumDimensions.SCREEN_HEIGHT;

  const nextLevel = () => {
    scoreStore.nextLevel();
    scoreStore.resetScore();
    clearInterval(intervalId);

    startGame();
    resetGame();
  };
  const startGame = () => {
    let delay = Levels.length - currentScoreInfo.level;
    delay = delay * Config.DELAY;

    intervalId = setInterval(() => {
      snakeBodies.pop();

      let { left, top } = snakeBodies[0];

      if (direction === Directions.UP) {
        top -= EnumDimensions.BLOCK_SIZE;
      } else if (direction === Directions.DOWN) {
        top += EnumDimensions.BLOCK_SIZE;
      } else if (direction === Directions.LEFT) {
        left -= EnumDimensions.BLOCK_SIZE;
      } else if (direction === Directions.RIGHT) {
        left += EnumDimensions.BLOCK_SIZE;
      }

      const newHead: SnakeItem = { left, top };

      snakeBodies = [newHead, ...snakeBodies];

      if (isCollide(newHead, { left: foodLeft, top: foodTop })) {
        snakeBodies = [...snakeBodies, snakeBodies[snakeBodies.length - 1]];
        scoreStore.eatFood();
        moveFood();
        if (currentScoreInfo.food % 5 == 0) {
          addBonus();
        }
        if (snakeBodies.length / Config.MAX_POINTS > 1 && snakeBodies.length % Config.MAX_POINTS == 0) {
          if (currentScoreInfo.level < Levels.length - 1) {
            nextLevel();
          } else {
            screenStore.allLevelsCleared();
          }
        }
      }

      if (isGameOver()) {
        clearInterval(intervalId);
        resetGame();
        gameOver();
      }
    }, delay);
  };

  const isCollide = (a: SnakeItem, b: SnakeItem) => {
    return !(a.top < b.top || a.top > b.top || a.left < b.left || a.left > b.left);
  };
  const getNewFoodLocation = (): SnakeItem => {
    let top = 0,
      left = 0;
    while (true) {
      top = Math.floor(Math.random() * (GAME_HEIGHT / EnumDimensions.BLOCK_SIZE)) * EnumDimensions.BLOCK_SIZE;
      left = Math.floor(Math.random() * (GAME_WIDTH / EnumDimensions.BLOCK_SIZE)) * EnumDimensions.BLOCK_SIZE;

      let tx = snakeBodies.findIndex((d) => {
        d.top == top;
      });

      let lx = snakeBodies.findIndex((d) => {
        d.left == left;
      });

      if (tx == -1 && lx == -1) {
        break;
      }
    }
    return { top, left };
  };
  const moveFood = () => {
    const { top, left } = getNewFoodLocation();
    foodLeft = left;
    foodTop = top;
  };

  const resetGame = () => {
    moveFood();
    direction = Directions.RIGHT;
    snakeBodies = [
      {
        left: EnumDimensions.BLOCK_SIZE * 2,
        top: 0,
      },
      {
        left: EnumDimensions.BLOCK_SIZE,
        top: 0,
      },
      {
        left: 0,
        top: 0,
      },
    ];
  };

  const isGameOver = () => {
    const snakeBodiesNoHead = snakeBodies.slice(1);
    const snakeCollisions = snakeBodiesNoHead.filter((sb) => isCollide(sb, snakeBodies[0]));
    if (snakeCollisions.length > 0) {
      return true;
    }
    const { top, left } = snakeBodies[0];
    if (left >= GAME_WIDTH && direction == Directions.RIGHT) {
      snakeBodies[0].left = 0;
    }
    if (left < 0 && direction == Directions.LEFT) {
      snakeBodies[0].left = GAME_WIDTH - EnumDimensions.BLOCK_SIZE;
    }
    if (top < 0 && direction == Directions.UP) {
      snakeBodies[0].top = GAME_HEIGHT - EnumDimensions.BLOCK_SIZE;
    }
    if (top >= GAME_HEIGHT && direction == Directions.DOWN) {
      snakeBodies[0].top = 0;
    }
    return false;
  };

  const pauseGame = () => {
    clearInterval(intervalId);
  };
  const getDirectionFromKeyCode = (keyCode: string) => {
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

  const onKeyDown = (e: KeyboardEvent) => {
    const keyCode = e.code;
    if (keyCode === KeyMap.SPACEBAR) {
      isGamePaused = !isGamePaused;
      if (isGamePaused) {
        pauseGame();
      } else {
        startGame();
      }
    }
    if (isGamePaused) {
      return;
    }
    const newDirection = getDirectionFromKeyCode(keyCode);
    if (newDirection != Directions.UNKNOWN) {
      direction = newDirection;
    }
  };

  const onBonusFinished = (e: any) => {
    console.log(`on bonus finished =${e.detail}`);
    removeBonus(e.detail);
  };
  const addBonus = () => {
    const id = getId();
    let obj = { top: 0, left: 0, id: id };
    obj.top = Math.floor(Math.random() * (GAME_HEIGHT / EnumDimensions.BLOCK_SIZE)) * EnumDimensions.BLOCK_SIZE;
    obj.left = Math.floor(Math.random() * (GAME_WIDTH / EnumDimensions.BLOCK_SIZE)) * EnumDimensions.BLOCK_SIZE;
    bonusList.push(obj);
  };
  const removeBonus = (id: string) => {
    const index = bonusList.findIndex((d) => d.id == id);
    if (index != -1) {
      bonusList.splice(index, 1);
      bonusList = bonusList;
    }
  };
  startGame();
  resetGame();
   addBonus();
</script>

<main style="width:{EnumDimensions.SCREEN_WIDTH}px;height:{EnumDimensions.SCREEN_HEIGHT}px;background:{Levels[currentScoreInfo.level].bg}">
  <Snake {direction} {snakeBodies} />
  <Food left={foodLeft} top={foodTop} />
  {#each bonusList as bonus (bonus.id)}
    <Bonus id={bonus.id} left={bonus.left} top={bonus.top} on:bonusFinished={onBonusFinished} />
  {/each}

  <!-- <Bonus left={100} top={200} on:bonusFinished={onBonusFinished} /> -->
</main>
<div class="score">{currentScoreInfo.level} : {currentScoreInfo.score}</div>

<svelte:window on:keydown={onKeyDown} />

<style>
  main {
    border: solid black 1px;
    position: relative;
    margin: 0px auto;
  }
  .score {
    position: fixed;
    top: 10px;
    right: 10px;
    text-align: center;
    font-weight: bold;
    color: rebeccapurple;
  }
</style>
