<script lang="ts">
  import { BonusTypes, type BlockItem } from "$models/play-screen";
  import { swipe } from "svelte-gestures";
  import { scoreStore } from "$stores/scoreStore";
  import { screenStore } from "$stores/screenStore";
  import type { ScoreInfo, ScreenStatus } from "$models/gameState";
  import { Directions, Config, KeyMap, EnumMessages } from "$helpers/constants";
  import Food from "$gameItems/Food.svelte";
  import Snake from "$gameItems/Snake.svelte";
  import { Levels } from "$models/level";
  import Bonus from "$gameItems/Bonus.svelte";
  import {
    checkItemExistsInArray,
    getDirectionFromKeyCode,
    getDirectionFromSwipe,
    getId,
    getNewElementNotPresentInArray,
    getOppositeDirection,
  } from "$helpers/common";
  import MessageBox from "$gameItems/MessageBox.svelte";
  import Wall from "$gameItems/Wall.svelte";
  import { FoodTypes, type BonusItem, type FoodItem, type SnakeItem } from "$models/play-screen";
  import { onMount } from "svelte";

  import { PlayStatusStore, type PlayStatus } from "$stores/playStatusStore";
  let swipeDirection;
  let target;
  let isGamePaused = false;
  let isMessageVisible = false;
  let message = EnumMessages.NEXT_LEVEL;

  let w: number;
  let h: number;
  let CANVAS_SIZE = 0;
  let BLOCK_SIZE = 0;
  let direction = Directions.RIGHT;

  let intervalId: string | number | NodeJS.Timeout;

  $: {
    CANVAS_SIZE = Math.min(w, h);
    CANVAS_SIZE = CANVAS_SIZE - Config.GRID_PADDING;
    CANVAS_SIZE = Math.min(CANVAS_SIZE, Config.GRID_MAX_SIZE);
    if (!isNaN(CANVAS_SIZE)) {
      BLOCK_SIZE = Math.floor(CANVAS_SIZE / Config.GRID_COUNT);
    }
  }
  onMount(() => {
    console.log(`--onMount = ${BLOCK_SIZE} ${CANVAS_SIZE} ${Levels[currentScoreInfo.level].bg}`);
  });

  let currentScreen: ScreenStatus;
  let currentScoreInfo: ScoreInfo;
  let playStatus: PlayStatus;

  screenStore.subscribe((val: ScreenStatus) => {
    currentScreen = val;
  });
  scoreStore.subscribe((val: ScoreInfo) => {
    currentScoreInfo = val;
  });
  PlayStatusStore.subscribe((val: PlayStatus) => {
    playStatus = val;
  });
  // $: bricks = Levels[currentScoreInfo.level - 1].wall;
  const gameOver = () => {
    showMessage(EnumMessages.GAME_OVER);
    clearInterval(intervalId);
    setTimeout(() => {
      hideMessage();
      resetGame();
      screenStore.gameOver();
    }, Config.MESSAGE_TIME);
  };

  function handler(event: CustomEvent) {
    swipeDirection = event.detail.direction;
    target = event.detail.target;
    direction = getDirectionFromSwipe(swipeDirection);
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

  const checkBonusCollision = (head: SnakeItem) => {
    playStatus.bonus.forEach((d: BonusItem) => {
      if (isCollide(head, d)) {
        PlayStatusStore.removeBonus(d.id);
        scoreStore.getBonus();
      }
    });
  };
  const checkNextLevel = () => {
    if (playStatus.snake.length / Config.MAXIMUM_POINT_COUNT > 1 && playStatus.snake.length % Config.MAXIMUM_POINT_COUNT == 0) {
      if (currentScoreInfo.level < Levels.length - 1) {
        nextLevel();
      } else {
        clearInterval(intervalId);
        screenStore.allLevelsCleared();
        scoreStore.resetGame();
      }
    }
  };
  const getNextHead = () => {
    let { left, top } = playStatus.snake[0];

    if (direction === Directions.UP) {
      top -= 1;
    } else if (direction === Directions.DOWN) {
      top += 1;
    } else if (direction === Directions.LEFT) {
      left -= 1;
    } else if (direction === Directions.RIGHT) {
      left += 1;
    }

    const newHead: BlockItem = { id: getId(), left, top };
    return newHead;
  };

  const checkFoodEaten = (head: SnakeItem) => {
    if (playStatus.foods.length > 0) {
      if (isCollide(head, playStatus.foods[0])) {
        PlayStatusStore.removeFood(playStatus.foods[0].id);
        PlayStatusStore.growSnake();
        scoreStore.eatFood();
        addFood();
        //moveFood();
        if (currentScoreInfo.food % 5 == 0) {
          addBonus();
        }
      }
    }
  };
  const startGame = () => {
    let delay = Levels.length - currentScoreInfo.level;
    delay = delay * Config.SNAKE_SPEED;
    PlayStatusStore.reset();
    addFood();

    intervalId = setInterval(() => {
      if (isGameOver()) {
        gameOver();
        return;
      }
      checkBoundaries();

      const newHead = getNextHead();

      checkBonusCollision(newHead);

      PlayStatusStore.moveSnake(newHead);

      checkFoodEaten(newHead);
      checkNextLevel();
    }, delay);
  };

  const isCollide = (a: SnakeItem, b: SnakeItem) => {
    return !(a.top < b.top || a.top > b.top || a.left < b.left || a.left > b.left);
  };

  const resetGame = () => {
    direction = Directions.RIGHT;
  };

  const checkBoundaries = () => {
    const { top, left } = playStatus.snake[0];
    const head = playStatus.snake[0];
    // const head = getNextHead();

    if (left >= Config.GRID_COUNT && direction == Directions.RIGHT) {
      head.left = -1;
    }
    if (left < 0 && direction == Directions.LEFT) {
      head.left = Config.GRID_COUNT;
    }
    if (top < 0 && direction == Directions.UP) {
      head.top = Config.GRID_COUNT;
    }
    if (top >= Config.GRID_COUNT && direction == Directions.DOWN) {
      head.top = -1;
    }
  };
  const isGameOver = () => {
    const snakeBodiesNoHead: BlockItem[] = playStatus.snake.slice(0);
    const tBricks: BlockItem[] = Levels[currentScoreInfo.level].wall;
    const filledBlocks = [...snakeBodiesNoHead, ...tBricks];
    const newHead = getNextHead();
    return checkItemExistsInArray(newHead, filledBlocks);
  };

  const pauseGame = () => {
    clearInterval(intervalId);
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
    const newDirection = getDirectionFromKeyCode(keyCode, direction);
    if (newDirection != Directions.UNKNOWN && newDirection != getOppositeDirection(newDirection)) {
      direction = newDirection;
    }
  };

  const onBonusFinished = (e: any) => {
    PlayStatusStore.removeBonus(e.detail);
  };

  const getNextEmptyLocation = (): BlockItem => {
    const tSnake = playStatus.snake.slice(0);
    const tBricks = Levels[currentScoreInfo.level].wall;
    const tFoods = playStatus.foods.slice(0);
    const tBonus = playStatus.bonus.slice(0);
    const filledBlocks: BlockItem[] = [...tBricks, ...tSnake, ...tFoods, ...tBonus];
    const element = getNewElementNotPresentInArray(filledBlocks);
    return element;
  };
  const addFood = () => {
    if (playStatus.foods.length > 0) return;

    const element = getNextEmptyLocation();
    let obj: FoodItem = { top: element.top, left: element.left, id: element.id, type: FoodTypes.DEFAULT };
    PlayStatusStore.addFood(obj);
  };
  const addBonus = () => {
    const element = getNextEmptyLocation();
    let obj: BonusItem = { top: element.top, left: element.left, id: element.id, type: BonusTypes.STAR };
    PlayStatusStore.addBonus(obj);
  };

  startGame();
  resetGame();
</script>

<div class="wrap" bind:clientWidth={w} bind:clientHeight={h}>
  <main
    style="width:{CANVAS_SIZE}px;height:{CANVAS_SIZE}px;background:{Levels[currentScoreInfo.level].bg}"
    use:swipe={{ timeframe: 150, minSwipeDistance: 30, touchAction: "none" }}
    on:swipe={handler}
  >
    <Wall size={BLOCK_SIZE} />
    <Snake {direction} size={BLOCK_SIZE} />
    {#each playStatus.foods as food (food.id)}
      <Food data={food} size={BLOCK_SIZE} />
    {/each}
    <!-- <Food data={foodData} size={BLOCK_SIZE} /> -->
    {#each playStatus.bonus as bonus (bonus.id)}
      <Bonus data={bonus} size={BLOCK_SIZE} on:bonusFinished={onBonusFinished} />
    {/each}

    <!-- <Bonus left={100} top={200} on:bonusFinished={onBonusFinished} /> -->
    {#if isMessageVisible == true}
      <MessageBox {message} />
    {/if}
  </main>
  <div class="scorecard" style="width:{CANVAS_SIZE}px;">
    <div>Score : {currentScoreInfo.score}</div>
    <div class="arrow {direction}">→</div>
    <div>Bonus : {currentScoreInfo.bonus}</div>
  </div>
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
    /* background-color: rgb(158, 158, 158); */
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
  .scorecard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
  }
  .right {
    transform: rotate(0deg);
  }
  .left {
    transform: rotate(180deg);
  }
  .up {
    transform: rotate(270deg);
    /* background-color: red; */
  }
  .down {
    transform: rotate(90deg);
    /* background-color: green; */
  }
  .arrow {
    font-weight: bold;
    font-size: 1.2em;
    padding: 2px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;

    background-color: red;
    border-radius: 50%;
  }
</style>
