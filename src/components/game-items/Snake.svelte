<script lang="ts">
  import { checkItemExistsInArray } from "$helpers/common";
  import type { SnakeItem } from "$models/play-screen";
  import { PlayStatusStore, type PlayStatus } from "$stores/playStatusStore";
  import SnakeBody from "./SnakeBody.svelte";
  // export let data: SnakeItem[] = [];
  export let direction = "right";
  export let size = 0;
  let playStatus: PlayStatus;

  PlayStatusStore.subscribe((val: PlayStatus) => {
    playStatus = val;
  });
  const checkIfFood = (sn: SnakeItem) => {
    // console.log(playStatus.lastFoodLocation, sn);
    if (playStatus.lastFoodLocation == null) return false;

    if (playStatus.lastFoodLocation.top == sn.top && playStatus.lastFoodLocation.left == sn.left) return true;
  };
</script>

{#each playStatus.snake as snakeBody, i}
  <SnakeBody
    isHead={i == 0}
    isTail={i == playStatus.snake.length - 1}
    current={snakeBody}
    prev={i > 0 ? playStatus.snake[i - 1] : null}
    {direction}
    {size}
    isFoodLocation={checkIfFood(snakeBody)}
  />
{/each}
