<script lang="ts">
  import Food from "./Food.svelte";
  import Snake from "./Snake.svelte";
  import { Directions, EnumDimensions } from "../../helpers/constants";
  let foodLeft = 0;
  let foodTop = 0;
  let direction = "right";
  let game_width = 500,
    game_height = 500;
  let snakeBodies = [];

  $: score = snakeBodies.length - 3;

  $: GAME_WIDTH = EnumDimensions.SCREEN_WIDTH;
  $: GAME_HEIGHT = EnumDimensions.SCREEN_HEIGHT;

  const intervalId = setInterval(() => {
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

    const newHead = { left, top };

    snakeBodies = [newHead, ...snakeBodies];

    if (isCollide(newHead, { left: foodLeft, top: foodTop })) {
      moveFood();
      snakeBodies = [...snakeBodies, snakeBodies[snakeBodies.length - 1]];
    }

    if (isGameOver()) {
      clearInterval(intervalId);
      //  resetGame();
    }
  }, 200);

  function isCollide(a, b) {
    return !(a.top < b.top || a.top > b.top || a.left < b.left || a.left > b.left);
  }

  function moveFood() {
    foodTop = Math.floor(Math.random() * (GAME_HEIGHT / EnumDimensions.BLOCK_SIZE)) * EnumDimensions.BLOCK_SIZE;
    foodLeft = Math.floor(Math.random() * (GAME_WIDTH / EnumDimensions.BLOCK_SIZE)) * EnumDimensions.BLOCK_SIZE;
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

    if (top >= GAME_HEIGHT || top < 0 || left < 0 || left >= GAME_WIDTH) {
      return true;
    }

    return false;
  }

  function pauseGame() {
    console.log("pauseGame");
    clearInterval(intervalId);
  }
  function getDirectionFromKeyCode(keyCode) {
    if (keyCode === 32) {
      pauseGame();
    } else if (keyCode === 38) {
      return Directions.UP;
    } else if (keyCode === 39) {
      return Directions.RIGHT;
    } else if (keyCode === 37) {
      return Directions.LEFT;
    } else if (keyCode === 40) {
      return Directions.DOWN;
    }

    return false;
  }

  function onKeyDown(e) {
    const newDirection = getDirectionFromKeyCode(e.keyCode);
    if (newDirection) {
      direction = newDirection;
    }
  }

  resetGame();
</script>

<main style="width:{GAME_WIDTH}px;height:{GAME_HEIGHT}px;">
  <Snake {direction} {snakeBodies} />
  <Food {foodLeft} {foodTop} />
</main>
<!-- <h2>Score : {score}</h2> -->
<!-- <svelte:window on:keydown={onKeyDown} bind:innerWidth={game_width} bind:innerHeight={game_height} /> -->
<svelte:window on:keydown={onKeyDown} />

<style>
  main {
    border: solid black 1px;
    position: relative;
    margin: 0px auto;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
  }
</style>
