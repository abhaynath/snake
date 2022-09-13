<script lang="ts">
  import type { SnakeItem } from "src/models/play-screen";

  import { EnumDimensions } from "../../helpers/constants";
  export let size = 0;
  export let current: SnakeItem = null;
  export let prev: SnakeItem = null;

  export let isHead = false;
  export let isTail = false;
  export let direction = "right";

  const getDirection = () => {
    if (isHead) return direction;
    if (current.left == prev.left && current.top > prev.top) return "up";
    if (current.left == prev.left && current.top < prev.top) return "down";
    if (current.top == prev.top && current.left > prev.left) return "right";
    if (current.top == prev.top && current.left < prev.left) return "left";
  };
  const getOpposite = (dir: string) => {
    if (dir == "up") return "down";
    if (dir == "down") return "up";
    if (dir == "right") return "left";
    if (dir == "left") return "right";
  };
</script>

<!-- {#if top >= 0 && top < MAX_ROW && left >= 0 && left < MAX_ROW} -->
<div style="left: {current.left * size}px; top: {current.top * size}px;width:{size}px;height:{size}px;" class="snake-body">
  {#if isHead}
    <svg viewBox="0 0 258 258" class={direction}>
      <g>
        <rect opacity="0" fill="#FFFFFF" width="258" height="258" />
        <path
          fill="#0037FF"
          d="M147.5,29.2C111.6,29.2,80.1,48,62.6,77H0v104h62.6c17.5,28,49,47.3,84.9,47.3c55,0,99.6-44.6,99.6-99.6
          S202.5,29.2,147.5,29.2z"
        />
        <circle fill="#FFF800" stroke="#000000" stroke-miterlimit="10" cx="184.3" cy="84.5" r="21.8" />
        <circle fill="#FFF800" stroke="#000000" stroke-miterlimit="10" cx="184.3" cy="164.5" r="21.8" />
      </g>
    </svg>
  {:else if isTail}
    <svg viewBox="0 0 50 50" class={direction}>
      <rect y="0" fill="#0037FF" width="50" height="50" />
    </svg>
  {:else}
    <svg viewBox="0 0 50 50" class={direction}>
      <rect y="0" fill="#0037FF" width="50" height="50" />
    </svg>
  {/if}
</div>

<!-- {/if} -->
<style>
  .snake-body {
    position: absolute;

    z-index: 3;
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
</style>
