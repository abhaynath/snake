<script lang="ts">
  import { EnumDimensions } from "../../../src/helpers/constants";

  export let top: number = 0;
  export let left: number = 0;
</script>

<div class="food" style="left: {left}px; top: {top}px;width:{EnumDimensions.BLOCK_SIZE - 2}px;height:{EnumDimensions.BLOCK_SIZE - 2}px;" />

<style>
  .food {
    position: absolute;
    border: 1px solid #e76901;
    background-color: #ff9900;
    border-radius: 50%;
    z-index: 0;
  }
</style>
