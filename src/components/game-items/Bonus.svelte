<script lang="ts">
  import { Config, EnumDimensions } from "../../../src/helpers/constants";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  import { onMount } from "svelte";
  export let left;
  export let top;

  export let id;

  onMount(() => {
    setTimeout(() => {
      dispatch("bonusFinished", id);
    }, Config.BONUS_TIME);
  });
</script>

<div class="bonus" style="width:{EnumDimensions.BLOCK_SIZE}px;height:{EnumDimensions.BLOCK_SIZE}px;left:{left}px;top:{top}px;" />

<style>
  .bonus {
    position: absolute;
    background-color: red;
    animation: blink 250ms linear infinite;
  }
  @keyframes blink {
    0% {
      background-color: yellow;
      /* opacity: 0; */
    }
    50% {
      /* opacity: 0.5; */
    }
    100% {
      /* opacity: 1; */
    }
  }
</style>
