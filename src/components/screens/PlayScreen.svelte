<script lang="ts">
  import { swipe } from "svelte-gestures";
  import { scoreStore } from "./../../stores/scoreStore";
  import { screenStore } from "../../../src/stores/screenStore";
  import type { ScoreInfo, ScreenStatus } from "src/models/gameState";
  import { Directions, EnumDimensions, Config, KeyMap, EnumMessages } from "../../../src/helpers/constants";
  import Food from "../game-items/Food.svelte";
  import Snake from "../game-items/Snake.svelte";
  import { Levels } from "../../../src/models/level";
  import Bonus from "../game-items/Bonus.svelte";
  import { getId } from "../../../src/helpers/common";
  import MessageBox from "../game-items/MessageBox.svelte";
  import Wall from "../game-items/Wall.svelte";
  import type { BonusItem, SnakeItem } from "../../../src/models/play-screen";
  import { onMount } from "svelte";
  import { beforeUpdate, afterUpdate } from "svelte";
  let swipeDirection;
  let target;
  let isGamePaused = false;
  let isMessageVisible = false;
  let message = EnumMessages.NEXT_LEVEL;
  let isProcessing = false;
  let w: number;
  let h: number;
  let CANVAS_SIZE = 0;
  let BLOCK_SIZE = 0;

  $: {
    CANVAS_SIZE = Math.min(w, h);
    CANVAS_SIZE = CANVAS_SIZE - 50;
    console.log(`--reactive = ${BLOCK_SIZE} ${CANVAS_SIZE}`);
    if (!isNaN(CANVAS_SIZE)) {
      BLOCK_SIZE = CANVAS_SIZE / 20;
    }

    /*  if (!isNaN(boxSize)) {
      BLOCK_SIZE = boxSize / 20;
    }
    BLOCK_SIZE = boxSize / 20; */
    // console.log(`boxSize = ${boxSize}`);
  }
  onMount(() => {
    console.log(`--onMount = ${BLOCK_SIZE} ${CANVAS_SIZE}`);
  });
  afterUpdate(() => {
    // BLOCK_SIZE = boxSize / 20;
    // console.log(`--afterUpdate = ${BLOCK_SIZE} ${CANVAS_SIZE}`);
  });
  let currentScreen: ScreenStatus;
  let currentScoreInfo: ScoreInfo;

  screenStore.subscribe((val: ScreenStatus) => {
    currentScreen = val;
  });
  scoreStore.subscribe((val: ScoreInfo) => {
    currentScoreInfo = val;
  });
  $: bricks = Levels[currentScoreInfo.level - 1].wall;
  const gameOver = () => {
    showMessage(EnumMessages.GAME_OVER);
    clearInterval(intervalId);
    setTimeout(() => {
      hideMessage();
      resetGame();
      screenStore.gameOver();
    }, Config.MESSAGE_TIME);
  };

  let foodLeft = 0;
  let foodTop = 0;
  let direction = Directions.RIGHT;
  let snakeBodies: SnakeItem[] = [];
  let bonusList: BonusItem[] = [];
  let intervalId: string | number | NodeJS.Timeout;

  /* const GAME_WIDTH = EnumDimensions.SCREEN_WIDTH;
  const GAME_HEIGHT = EnumDimensions.SCREEN_HEIGHT; */
  function handler(event: CustomEvent) {
    swipeDirection = event.detail.direction;
    target = event.detail.target;
  }
  const showMessage = (msg: EnumMessages) => {
    message = msg;
    isMessageVisible = true;
  };
  const hideMessage = () => {
    isMessageVisible = false;
    message = EnumMessages.GAME_OVER;
  };
  const nextLevel = () => {
    showMessage(EnumMessages.NEXT_LEVEL);
    clearInterval(intervalId);
    setTimeout(() => {
      hideMessage();
      scoreStore.nextLevel();
      scoreStore.resetScore();

      startGame();
      resetGame();
    }, Config.MESSAGE_TIME);
  };
  const checkWallCollision = (head: SnakeItem) => {
    bricks.forEach((brick) => {
      if (isCollide(brick, head)) {
        isProcessing = false;
        gameOver();
      }
    });
  };
  const checkBonusCollision = (head: SnakeItem) => {
    bonusList.forEach((d: BonusItem) => {
      if (isCollide(head, d)) {
        removeBonus(d.id);
        scoreStore.getBonus();
      }
    });
  };
  const checkNextLevel = () => {
    if (snakeBodies.length / Config.MAX_POINTS > 1 && snakeBodies.length % Config.MAX_POINTS == 0) {
      if (currentScoreInfo.level < Levels.length - 1) {
        nextLevel();
      } else {
        clearInterval(intervalId);
        screenStore.allLevelsCleared();
      }
    }
  };
  const getNextHead = () => {
    let { left, top } = snakeBodies[0];

    if (direction === Directions.UP) {
      top -= 1;
    } else if (direction === Directions.DOWN) {
      top += 1;
    } else if (direction === Directions.LEFT) {
      left -= 1;
    } else if (direction === Directions.RIGHT) {
      left += 1;
    }

    const newHead: SnakeItem = { left, top };
    return newHead;
  };

  const checkFoodEaten = (head: SnakeItem) => {
    if (isCollide(head, { left: foodLeft, top: foodTop })) {
      snakeBodies = [...snakeBodies, snakeBodies[snakeBodies.length - 1]];
      scoreStore.eatFood();
      moveFood();
      if (currentScoreInfo.food % 5 == 0) {
        addBonus();
      }
    }
  };
  const startGame = () => {
    let delay = Levels.length - currentScoreInfo.level;
    delay = delay * Config.DELAY;

    intervalId = setInterval(() => {
      isProcessing = true;
      if (isGameOver()) {
        /*  isProcessing = false;
        gameOver(); */
      }
      checkBoundaries();

      const newHead = getNextHead();

      // checkWallCollision(newHead);
      checkBonusCollision(newHead);
      snakeBodies.pop();
      snakeBodies = [newHead, ...snakeBodies];

      checkFoodEaten(newHead);
      checkNextLevel();
      isProcessing = false;
    }, Config.DELAY);
  };

  const isCollide = (a: SnakeItem, b: SnakeItem) => {
    return !(a.top < b.top || a.top > b.top || a.left < b.left || a.left > b.left);
  };

  const getNewFoodLocation = (): SnakeItem => {
    let top = 0,
      left = 0;
    let foodLoc = { top, left };

    let isFound = true;

    top = Math.floor(Math.random() * (CANVAS_SIZE / BLOCK_SIZE));
    left = Math.floor(Math.random() * (CANVAS_SIZE / BLOCK_SIZE));
    foodLoc = { top, left };
    console.log("162", foodLoc);

    const arr3 = [];
    snakeBodies.forEach((d) => {
      arr3.push(d);
    });

    /*  while (isFound) {
      top = Math.floor(Math.random() * MAX_COLUMN) * BLOCK_SIZE;
      left = Math.floor(Math.random() * MAX_ROW) * BLOCK_SIZE;
      console.log(top, left);

      foodLoc = { top, left };
     
      const joinedArr = [...snakeBodies,...bricks];

      for (let i = 0; i < joinedArr.length; i++) {
        if (!isCollide(joinedArr[i], foodLoc)) {
          isFound = true;
          break;
        }
      }
    } */
    return foodLoc;
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
        left: 2,
        top: 0,
      },
      {
        left: 1,
        top: 0,
      },
      {
        left: 0,
        top: 0,
      },
    ];
  };

  const checkBoundaries = () => {
    const { top, left } = snakeBodies[0];
    const right = left + 1;
    const bottom = top + 1;
    const MAX_ROW = Math.floor(CANVAS_SIZE / BLOCK_SIZE);

    if (left >= MAX_ROW && direction == Directions.RIGHT) {
      snakeBodies[0].left = -2;
    }
    if (left < 0 && direction == Directions.LEFT) {
      snakeBodies[0].left = MAX_ROW + 1;
    }
    if (top < 0 && direction == Directions.UP) {
      snakeBodies[0].top = MAX_ROW + 1;
    }
    if (top >= MAX_ROW && direction == Directions.DOWN) {
      snakeBodies[0].top = -2;
    }
  };
  const isGameOver = () => {
    const snakeBodiesNoHead = snakeBodies.slice(1);
    const snakeCollisions = snakeBodiesNoHead.filter((sb) => isCollide(sb, snakeBodies[0]));
    if (snakeCollisions.length > 0) {
      return true;
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
    if (isProcessing) {
      return;
    }
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
    removeBonus(e.detail);
  };
  const addBonus = () => {
    const id = getId();
    let obj = { top: 0, left: 0, id: id };
    obj.top = Math.floor(Math.random() * (CANVAS_SIZE / BLOCK_SIZE));
    obj.left = Math.floor(Math.random() * (CANVAS_SIZE / BLOCK_SIZE));
    bonusList.push(obj);
    bonusList = bonusList;
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
  //  addBonus();
</script>

<div class="wrap" bind:clientWidth={w} bind:clientHeight={h}>
  <main
    style="width:{CANVAS_SIZE}px;height:{CANVAS_SIZE}px;background:{Levels[currentScoreInfo.level].bg}"
    use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: "none" }}
    on:swipe={handler}
  >
    <Wall size={BLOCK_SIZE} />
    <Snake {direction} {snakeBodies} size={BLOCK_SIZE} maxWidth={w} maxHeight={h} />
    <Food left={foodLeft} top={foodTop} size={BLOCK_SIZE} />
    {#each bonusList as bonus (bonus.id)}
      <Bonus id={bonus.id} left={bonus.left} top={bonus.top} size={BLOCK_SIZE} on:bonusFinished={onBonusFinished} />
    {/each}

    <!-- <Bonus left={100} top={200} on:bonusFinished={onBonusFinished} /> -->
    {#if isMessageVisible == true}
      <MessageBox {message} />
    {/if}
  </main>
</div>

<!-- <div class="score">
  <div>{currentScoreInfo.level} : {currentScoreInfo.score}</div>
  <div>{currentScoreInfo.bonus}</div>
  <div>{swipeDirection}</div>
</div>
 -->
<svelte:window on:keydown={onKeyDown} />

<style>
  .wrap {
    width: 100%;
    height: 100%;
    background-color: rgb(158, 158, 158);
    color: white;
    user-select: none;
    overscroll-behavior: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main {
    width: 100%;
    height: 100%;
    position: relative;
    overscroll-behavior: none;
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
