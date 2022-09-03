<script lang="ts">
  import { EnumDimensions } from "../../helpers/constants";

  export let top = EnumDimensions.BLOCK_SIZE;
  export let left = EnumDimensions.BLOCK_SIZE;
  export let isHead = false;
  export let isTail = false;
  export let direction = "right";
</script>

<div style="left: {left}px; top: {top}px;width:{EnumDimensions.BLOCK_SIZE}px;height:{EnumDimensions.BLOCK_SIZE}px;" class="snake-body">
  {#if isHead}
    <div class="head {direction}">
      <svg viewBox="0 0 258 258">
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
    </div>
  {:else if isTail}
    <svg viewBox="0 0 258 258">
      <polygon fill="#0037FF" points="258,179 0,128 0,128 258,77 " />
    </svg>
  {:else}
    <svg viewBox="0 0 258 258">
      <rect y="77" fill="#0037FF" width="258" height="102" />
    </svg>
  {/if}
</div>

<style>
  .snake-body {
    position: absolute;
    z-index: 3;
  }
  .head {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
  }
  .head.right {
    transform: rotate(0deg);
  }
  .head.left {
    transform: rotate(180deg);
  }
  .head.up {
    transform: rotate(270deg);
  }
  .head.down {
    transform: rotate(90deg);
  }
</style>
