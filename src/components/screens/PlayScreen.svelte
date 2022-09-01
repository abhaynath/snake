<script lang="ts">
  import { scoreStore } from "./../../stores/scoreStore";
  import { screenStore } from "../../../src/stores/screenStore";
  import type { ScoreInfo, ScreenStatus } from "src/models/gameState";
  import { Directions, EnumDimensions, Config, KeyMap } from "../../../src/helpers/constants";
  import Food from "../game-items/Food.svelte";
  import Snake from "../game-items/Snake.svelte";
  import { Levels } from "../../../src/models/level";

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

  interface SnakeItem {
    left: number;
    top: number;
  }
  let foodLeft = 0;
  let foodTop = 0;
  let direction = Directions.RIGHT;
  let snakeBodies: SnakeItem[] = [];
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

  function isCollide(a: SnakeItem, b: SnakeItem) {
    return !(a.top < b.top || a.top > b.top || a.left < b.left || a.left > b.left);
  }
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
  function moveFood() {
    const { top, left } = getNewFoodLocation();
    foodLeft = left;
    foodTop = top;
  }

  function resetGame() {
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
  }

  function isGameOver() {
    const snakeBodiesNoHead = snakeBodies.slice(1);

    const snakeCollisions = snakeBodiesNoHead.filter((sb) => isCollide(sb, snakeBodies[0]));

    if (snakeCollisions.length > 0) {
      return true;
    }

    const { top, left } = snakeBodies[0];

    /* if (top >= GAME_HEIGHT || top < 0 || left < 0 || left >= GAME_WIDTH) {
      return true;
    }
 */
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
  }

  function pauseGame() {
    clearInterval(intervalId);
  }
  function getDirectionFromKeyCode(keyCode: string) {
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
  }

  function onKeyDown(e: KeyboardEvent) {
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
  }
  startGame();
  resetGame();
</script>

<main style="width:{EnumDimensions.SCREEN_WIDTH}px;height:{EnumDimensions.SCREEN_HEIGHT}px;background:{Levels[currentScoreInfo.level].bg}">
  <Snake {direction} {snakeBodies} />
  <Food {foodLeft} {foodTop} />
</main>
<div class="score">{currentScoreInfo.level} : {currentScoreInfo.score}</div>

<svelte:window on:keydown={onKeyDown} />

<style>
  main {
    border: solid black 1px;
    position: relative;
    margin: 0px auto;
    /* background-color: #cbfd89; */
    /*   width: 100%;
    height: 100%; */
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
