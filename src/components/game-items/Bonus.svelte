<script lang="ts">
  import type { BonusItem } from "$models/play-screen";
  import { Config, EnumDimensions } from "$helpers/constants";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  import { onMount } from "svelte";
 
  export let data: BonusItem;
  export let size: number = 0;

  onMount(() => {
    const intervalId = setTimeout(() => {
      dispatch("bonusFinished", data.id);
    }, Config.BONUS_TIME);
  });
</script>

<div class="bonus  bounce-top" style="width:{size}px;height:{size}px;left:{data.left * size}px;top:{data.top * size}px;">
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
