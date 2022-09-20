<script lang="ts">
  import { Config } from "$helpers/constants";
  import type { SnakeItem } from "$models/play-screen";

  export let size = 0;
  export let current: SnakeItem = null;
  export let index = 0;

  export let isHead = index == 0;
  export let isTail = false;
  // export let isFoodLocation = false;
  export let direction = "right";

  const getClass = () => {
    // if (isFoodLocation) return "food";
    return "normal_block";
  };
</script>

{#if current.top >= 0 && current.top < Config.GRID_COUNT && current.left >= 0 && current.left < Config.GRID_COUNT}
  <div style="left: {current.left * size}px; top: {current.top * size}px;width:{size}px;height:{size}px;" class="snake-body">
    {#if isHead}
      <svg viewBox="0 0 258 258" class={direction}>
        <g>
          <rect width="258" height="258" />
         <!--  <path
            fill="#0037FF"
            d="M147.5,29.2C111.6,29.2,80.1,48,62.6,77H0v104h62.6c17.5,28,49,47.3,84.9,47.3c55,0,99.6-44.6,99.6-99.6
          S202.5,29.2,147.5,29.2z"
          /> -->
          <circle fill="#FFF800" stroke="#FFFFFF" stroke-miterlimit="10" cx="184.3" cy="84.5" r="21.8" />
          <circle fill="#FFF800" stroke="#FFFFFF" stroke-miterlimit="10" cx="184.3" cy="164.5" r="21.8" />
        </g>
      </svg>
    {:else if isTail}
      <svg viewBox="0 0 50 50" class={direction}>
        <rect y="0" width="50" height="50" />
      </svg>
    {:else}
      <svg viewBox="0 0 50 50" class={direction}>
        <rect y="0" width="50" height="50" />
      </svg>
    {/if}
  </div>
{/if}

<style>
  .snake-body {
    position: absolute;
    fill: #0044ff;

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
  
  .food {
    fill: orange;
    /* opacity: 0.1; */
  }
</style>
