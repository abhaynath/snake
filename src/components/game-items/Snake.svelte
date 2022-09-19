<script lang="ts">
  import { PlayStatusStore, type PlayStatus } from "$stores/playStatusStore";
  import SnakeBody from "./SnakeBody.svelte";
  export let direction = "right";
  export let size = 0;
  let playStatus: PlayStatus;

  PlayStatusStore.subscribe((val: PlayStatus) => {
    playStatus = val;
  });
</script>

{#each playStatus.snake as item, i}
  <SnakeBody index={i} isTail={i == playStatus.snake.length - 1} current={item} {direction} {size} isFoodLocation={playStatus.lastFoodLocation == i} />
{/each}
