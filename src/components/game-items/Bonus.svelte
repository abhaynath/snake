<script lang="ts">
  import { Config, EnumDimensions } from "../../../src/helpers/constants";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  import { onMount } from "svelte";
  export let left;
  export let top;

  export let id;

  onMount(() => {
    const intervalId = setTimeout(() => {
      dispatch("bonusFinished", id);
    }, Config.BONUS_TIME);
  });
</script>

<div class="bonus" style="width:{EnumDimensions.BLOCK_SIZE}px;height:{EnumDimensions.BLOCK_SIZE}px;left:{left}px;top:{top}px;">
  <svg viewBox="0 0 443.3 421.6">
    <style id="style2">
      .red {
        fill: red;
        animation: blink 250ms linear infinite;
      }
      @keyframes blink {
        0% {
          fill: yellow;
        }
        50% {
          /* opacity: 0.5; */
        }
        100% {
          fill: red;
        }
      }
    </style>
    <polygon
      fill="#FFA300"
      stroke="#EB0000"
      stroke-width="0.25"
      stroke-miterlimit="10"
      points="221.7,0.3 290.1,138.9 443.1,161.1 
        332.4,269 358.5,421.4 221.7,349.5 84.8,421.4 111,269 0.3,161.1 153.3,138.9 "
      class="red"
    />
  </svg>
</div>

<style>
  .bonus {
    position: absolute;
  }
</style>
