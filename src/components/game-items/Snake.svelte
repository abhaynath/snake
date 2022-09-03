<script lang="ts">
  import SnakeBody from "./SnakeBody.svelte";
  export let snakeBodies = [];
  export let direction = "right";
</script>

{#each snakeBodies as snakeBody, i}
  <SnakeBody isHead={i == 0} isTail={i==snakeBodies.length-1} top={snakeBody.top} left={snakeBody.left} {direction} />
{/each}
