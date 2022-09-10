<script lang="ts">
  import { swipe } from "svelte-gestures";
  let direction;
  let target: EventTarget;

  function handler(event: CustomEvent) {
    direction = event.detail.direction;
    target = event.detail.target;
  }
</script>

<div use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: "none" }} on:swipe={handler}>
  direction: {direction}
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    background-color: green;
    color: white;
  }
</style>
