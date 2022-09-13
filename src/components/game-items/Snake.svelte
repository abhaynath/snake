<script lang="ts">
  import type { SnakeItem } from "src/models/play-screen";

  import SnakeBody from "./SnakeBody.svelte";
  export let snakeBodies: SnakeItem[] = [];
  export let direction = "right";
  export let size = 0;
  export let maxWidth = 0;
</script>

{#each snakeBodies as snakeBody, i}
  <SnakeBody isHead={i == 0} isTail={i == snakeBodies.length - 1} current={snakeBody} prev={i > 0 ? snakeBodies[i - 1] : null} {direction} {size} {maxWidth} />
{/each}
