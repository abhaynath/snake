<script lang="ts">
  import { swipe } from "svelte-gestures";
  let direction;
  let target: EventTarget;
  let w: number;
  let h: number;
  $: boxSize = Math.min(w, h) - 20;

  function handler(event: CustomEvent) {
    direction = event.detail.direction;
    target = event.detail.target;
  }
</script>

<div class="wrap" bind:clientWidth={w} bind:clientHeight={h} use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: "none" }} on:swipe={handler}>
  <div class="card" style="width:{boxSize}px;height:{boxSize}px;">{boxSize} {direction} {w} {h}</div>
</div>

<style>
  .wrap {
    width: 100%;
    height: 100%;
    background-color: green;
    color: white;
    user-select: none;
    overscroll-behavior: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card {
    background-color: red;
    color: yellow;
  }
</style>
