<script lang="ts">
  import { swipe } from "svelte-gestures";
  import { scoreStore } from "$stores/scoreStore";
  import { screenStore } from "$stores/screenStore";
  import type { ScoreInfo, ScreenStatus } from "$models/gameState";
  import { Directions, Config, KeyMap, EnumMessages } from "$helpers/constants";
  import Food from "$gameItems/Food.svelte";
  import Snake from "$gameItems/Snake.svelte";
  import { Levels } from "$models/level";
  import Bonus from "$gameItems/Bonus.svelte";
  import { getId } from "$helpers/common";
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
  let isProcessing = false;
  let w: number;
  let h: number;
  let CANVAS_SIZE = 0;
  let BLOCK_SIZE = 0;

  $: {
    CANVAS_SIZE = Math.min(w, h);
    CANVAS_SIZE = CANVAS_SIZE - 50;
    CANVAS_SIZE = Math.min(CANVAS_SIZE, 500);
    if (!isNaN(CANVAS_SIZE)) {
      BLOCK_SIZE = Math.floor(CANVAS_SIZE / Config.MAX_BLOCKS);
    }
  }
  onMount(() => {
    console.log(`--onMount = ${BLOCK_SIZE} ${CANVAS_SIZE}`);
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

  let direction = Directions.RIGHT;

  let intervalId: string | number | NodeJS.Timeout;

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

  const checkBonusCollision = (head: SnakeItem) => {
    playStatus.bonus.forEach((d: BonusItem) => {
      if (isCollide(head, d)) {
        PlayStatusStore.removeBonus(d.id);
        scoreStore.getBonus();
      }
    });
  };
  const checkNextLevel = () => {
    if (playStatus.snake.length / Config.MAX_POINTS > 1 && playStatus.snake.length % Config.MAX_POINTS == 0) {
      if (currentScoreInfo.level < Levels.length - 1) {
        nextLevel();
      } else {
        clearInterval(intervalId);
        screenStore.allLevelsCleared();
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

    const newHead: SnakeItem = { id: getId(), left, top };
    return newHead;
  };

  const checkFoodEaten = (head: SnakeItem) => {
    if (playStatus.foods.length > 0) {
      if (isCollide(head, playStatus.foods[0])) {
        PlayStatusStore.growSnake();
        scoreStore.eatFood();
        PlayStatusStore.removeFood(playStatus.foods[0].id);
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
    delay = delay * Config.DELAY;
    PlayStatusStore.reset();
    addFood();

    intervalId = setInterval(() => {
      isProcessing = true;
      if (isGameOver()) {
        isProcessing = false;
        gameOver();
      }
      checkBoundaries();

      const newHead = getNextHead();

      // checkWallCollision(newHead);
      checkBonusCollision(newHead);
      PlayStatusStore.moveSnake(newHead);

      checkFoodEaten(newHead);
      checkNextLevel();
      isProcessing = false;
    }, Config.DELAY);
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
    const right = left + 1;
    const bottom = top + 1;
    if (left >= Config.MAX_BLOCKS && direction == Directions.RIGHT) {
      head.left = -2;
    }
    if (left < 0 && direction == Directions.LEFT) {
      head.left = Config.MAX_BLOCKS + 1;
    }
    if (top < 0 && direction == Directions.UP) {
      head.top = Config.MAX_BLOCKS + 1;
    }
    if (top >= Config.MAX_BLOCKS && direction == Directions.DOWN) {
      head.top = -2;
    }
  };
  const isGameOver = () => {
    const snakeBodiesNoHead = playStatus.snake.slice(1);
    const snakeCollisions = snakeBodiesNoHead.filter((sb) => isCollide(sb, playStatus.snake[0]));
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

  const getOppositeDirection = (dir: Directions) => {
    switch (dir) {
      case Directions.DOWN:
        return Directions.UP;
      case Directions.UP:
        return Directions.DOWN;
      case Directions.LEFT:
        return Directions.RIGHT;
      case Directions.RIGHT:
        return Directions.LEFT;
      case Directions.UNKNOWN:
        return Directions.UNKNOWN;
    }
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
    if (newDirection != Directions.UNKNOWN && newDirection != getOppositeDirection(newDirection)) {
      direction = newDirection;
    }
  };

  const onBonusFinished = (e: any) => {
    PlayStatusStore.removeBonus(e.detail);
  };
  const addFood = () => {
    const id = getId();
    let obj: FoodItem = { top: 0, left: 0, id: id, type: FoodTypes.DEFAULT };
    obj.top = Math.floor(Math.random() * Config.MAX_BLOCKS);
    obj.left = Math.floor(Math.random() * Config.MAX_BLOCKS);
    PlayStatusStore.addFood(obj);
  };
  const addBonus = () => {
    const id = getId();
    let obj: BonusItem = { top: 0, left: 0, id: id };
    obj.top = Math.floor(Math.random() * Config.MAX_BLOCKS);
    obj.left = Math.floor(Math.random() * Config.MAX_BLOCKS);
    PlayStatusStore.addBonus(obj);
  };

  startGame();
  resetGame();
</script>

<div class="wrap" bind:clientWidth={w} bind:clientHeight={h}>
  <div>Score</div>
  <main
    style="width:{CANVAS_SIZE}px;height:{CANVAS_SIZE}px;background:{Levels[currentScoreInfo.level].bg}"
    use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: "none" }}
    on:swipe={handler}
  >
    <Wall size={BLOCK_SIZE} />
    <Snake {direction} data={playStatus.snake} size={BLOCK_SIZE} />
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
  <div><span>Pause</span></div>
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
</style>
