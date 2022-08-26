<script lang="ts">
  import Food from "./components/Food.svelte";
  import Snake from "./components/Snake.svelte";
  import { Config, Directions } from "./helpers/constants";
  let foodLeft = 0;
  let foodTop = 0;
  let direction = "right";
  let snakeBodies = [];

  $: score = snakeBodies.length - 3;

  setInterval(() => {
    snakeBodies.pop();

    let { left, top } = snakeBodies[0];

    if (direction === Directions.UP) {
      top -= Config.BLOCK_SIZE;
    } else if (direction === Directions.DOWN) {
      top += Config.BLOCK_SIZE;
    } else if (direction === Directions.LEFT) {
      left -= Config.BLOCK_SIZE;
    } else if (direction === Directions.RIGHT) {
      left += Config.BLOCK_SIZE;
    }

    const newHead = { left, top };

    snakeBodies = [newHead, ...snakeBodies];

    if (isCollide(newHead, { left: foodLeft, top: foodTop })) {
      moveFood();
      snakeBodies = [...snakeBodies, snakeBodies[snakeBodies.length - 1]];
    }

    if (isGameOver()) {
      resetGame();
    }
  }, 200);

  function isCollide(a, b) {
    return !(a.top < b.top || a.top > b.top || a.left < b.left || a.left > b.left);
  }

  function moveFood() {
    foodTop = Math.floor(Math.random() * (Config.GAME_HEIGHT / Config.BLOCK_SIZE)) * Config.BLOCK_SIZE;
    foodLeft = Math.floor(Math.random() * (Config.GAME_WIDTH / Config.BLOCK_SIZE)) * Config.BLOCK_SIZE;
  }

  function resetGame() {
    moveFood();
    direction = Directions.RIGHT;
    snakeBodies = [
      {
        left: Config.BLOCK_SIZE * 2,
        top: 0,
      },
      {
        left: Config.BLOCK_SIZE,
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

    if (top >= Config.GAME_HEIGHT || top < 0 || left < 0 || left >= Config.GAME_WIDTH) {
      return true;
    }

    return false;
  }

  function getDirectionFromKeyCode(keyCode) {
    if (keyCode === 38) {
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

<main style="width:{Config.GAME_WIDTH}px;height:{Config.GAME_HEIGHT}px;">
  <Snake {direction} {snakeBodies} />
  <Food {foodLeft} {foodTop} />
</main>
<h2>Score : {score}</h2>
<svelte:window on:keydown={onKeyDown} />

<style>
  main {
    border: solid black 1px;
    position: relative;
    margin: 20px auto;
    background-color: #ffffff;
  }
</style>
