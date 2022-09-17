<script lang="ts">
  import type { SnakeItem } from "$models/play-screen";

  import SnakeBody from "./SnakeBody.svelte";
  export let data: SnakeItem[] = [];
  export let direction = "right";
  export let size = 0;
</script>

{#each data as snakeBody, i}
  <SnakeBody isHead={i == 0} isTail={i == data.length - 1} current={snakeBody} prev={i > 0 ? data[i - 1] : null} {direction} {size} />
{/each}
