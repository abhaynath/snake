<script lang="ts">
  import { EnumDimensions } from "../../helpers/constants";

  export let top = EnumDimensions.BLOCK_SIZE;
  export let left = EnumDimensions.BLOCK_SIZE;
  export let isHead = false;
  export let direction = "right";
</script>

<div style="left: {left}px; top: {top}px;width:{EnumDimensions.BLOCK_SIZE}px;height:{EnumDimensions.BLOCK_SIZE}px;" class="snake-body {direction}">
  {#if isHead}
    <div id="leftEye" class="eyes" />
    <div id="rightEye" class="eyes" />
  {/if}
</div>

<style>
  .snake-body {
    background: #000000;
    background: linear-gradient(0deg, #000000 0%, #092279 48%, #000000 100%);
    /* border: 1px solid #35007a; */
    position: absolute;
    z-index: 3;
  }
  .eyes {
    position: absolute;
    background-color: #81dbff;
    border-radius: 50%;
    width: 20%;
    height: 20%;
  }
  #leftEye {
    left: 70%;
    top: 10%;
  }
  #rightEye {
    left: 70%;
    bottom: 10%;
  }
  .snake-body.right {
    transform: rotate(0deg);
  }
  .snake-body.left {
    transform: rotate(180deg);
  }
  .snake-body.up {
    transform: rotate(270deg);
  }
  .snake-body.down {
    transform: rotate(90deg);
  }
</style>
