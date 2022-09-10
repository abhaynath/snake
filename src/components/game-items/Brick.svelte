<script lang="ts">
  import { BrickTypes, type BrickData } from "./../../models/level";
  import { EnumDimensions } from "../../helpers/constants";
  export let size: number = 0;
  export let data: BrickData;
</script>

<div class="brick" style="top:{data.top}px;left:{data.left}px;width:{size}px;height:{size}px;">
  {#if data.type == BrickTypes.DEFAULT}
    <svg viewBox="0 0 563 563">
      <g>
        <linearGradient id="brick_SVGID_1_" gradientUnits="userSpaceOnUse" x1="4" y1="96.5" x2="281" y2="96.5">
          <stop offset="0" style="stop-color:#9E2000" />
          <stop offset="1" style="stop-color:#F15A24" />
        </linearGradient>
        <rect x="4" y="4" fill="url(#brick_SVGID_1_)" stroke="#000000" stroke-width="8" stroke-miterlimit="10" width="277" height="185" />
        <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="420" y1="189" x2="420" y2="4">
          <stop offset="0" style="stop-color:#9E2000" />
          <stop offset="1" style="stop-color:#F15A24" />
        </linearGradient>
        <rect x="281" y="4" fill="url(#SVGID_2_)" stroke="#000000" stroke-width="8" stroke-miterlimit="10" width="278" height="185" />
        <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="281.5" y1="374" x2="281.5" y2="189.0005">
          <stop offset="0" style="stop-color:#9E2000" />
          <stop offset="1" style="stop-color:#F15A24" />
        </linearGradient>
        <polygon
          fill="url(#SVGID_3_)"
          stroke="#000000"
          stroke-width="8"
          stroke-miterlimit="10"
          points="281,189 4,189 4,374 281,374 
            559,374 559,189 	"
        />
        <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="4" y1="466.5" x2="281" y2="466.5">
          <stop offset="0" style="stop-color:#9E2000" />
          <stop offset="1" style="stop-color:#F15A24" />
        </linearGradient>
        <rect x="4" y="374" fill="url(#SVGID_4_)" stroke="#000000" stroke-width="8" stroke-miterlimit="10" width="277" height="185" />
        <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="281" y1="466.5" x2="559" y2="466.5">
          <stop offset="0" style="stop-color:#9E2000" />
          <stop offset="1" style="stop-color:#F15A24" />
        </linearGradient>
        <rect x="281" y="374" fill="url(#SVGID_5_)" stroke="#000000" stroke-width="8" stroke-miterlimit="10" width="278" height="185" />
      </g>
    </svg>
  {:else if data.type == BrickTypes.CONCRETE}
    <svg viewBox="0 0 563 563">
      <g>
        <linearGradient id="concrete_SVGID_1_" gradientUnits="userSpaceOnUse" x1="4" y1="96.5" x2="281" y2="96.5">
          <stop offset="0" style="stop-color:#998675" />
          <stop offset="1" style="stop-color:#C7B299" />
        </linearGradient>
        <rect x="4" y="4" fill="url(#concrete_SVGID_1_)" stroke="#CABD99" stroke-width="8" stroke-miterlimit="10" width="277" height="185" />
        <linearGradient id="concrete_SVGID_2_" gradientUnits="userSpaceOnUse" x1="420" y1="189" x2="420" y2="4">
          <stop offset="0" style="stop-color:#998675" />
          <stop offset="1" style="stop-color:#C7B299" />
        </linearGradient>
        <rect x="281" y="4" fill="url(#concrete_SVGID_2_)" stroke="#CABD99" stroke-width="8" stroke-miterlimit="10" width="278" height="185" />
        <linearGradient id="concrete_SVGID_3_" gradientUnits="userSpaceOnUse" x1="281.5" y1="374" x2="281.5" y2="189.0005">
          <stop offset="0" style="stop-color:#998675" />
          <stop offset="1" style="stop-color:#C7B299" />
        </linearGradient>
        <polygon
          fill="url(#concrete_SVGID_3_)"
          stroke="#CABD99"
          stroke-width="8"
          stroke-miterlimit="10"
          points="281,189 4,189 4,374 281,374 
    559,374 559,189 	"
        />
        <linearGradient id="concrete_SVGID_4_" gradientUnits="userSpaceOnUse" x1="4" y1="466.5" x2="281" y2="466.5">
          <stop offset="0" style="stop-color:#998675" />
          <stop offset="1" style="stop-color:#C7B299" />
        </linearGradient>
        <rect x="4" y="374" fill="url(#concrete_SVGID_4_)" stroke="#CABD99" stroke-width="8" stroke-miterlimit="10" width="277" height="185" />
        <linearGradient id="concrete_SVGID_5_" gradientUnits="userSpaceOnUse" x1="281" y1="466.5" x2="559" y2="466.5">
          <stop offset="0" style="stop-color:#998675" />
          <stop offset="1" style="stop-color:#C7B299" />
        </linearGradient>
        <rect x="281" y="374" fill="url(#concrete_SVGID_5_)" stroke="#CABD99" stroke-width="8" stroke-miterlimit="10" width="278" height="185" />
      </g>
    </svg>
  {:else}
    <svg viewBox="0 0 439 439">
      <radialGradient id="rock_svgid" cx="219.5" cy="219.5" r="219" gradientUnits="userSpaceOnUse">
        <stop offset="0" style="stop-color:#333333" />
        <stop offset="1" style="stop-color:#000000" />
      </radialGradient>
      <rect x="0.5" y="0.5" fill="url(#rock_svgid)" stroke="#000000" stroke-miterlimit="10" width="438" height="438" />
      <linearGradient id="rock_svgid2" gradientUnits="userSpaceOnUse" x1="219" y1="431" x2="219" y2="9.0005">
        <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
        <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0.5" />
      </linearGradient>
      <rect x="8" y="9" fill="url(#rock_svgid2)" width="422" height="422" />
    </svg>
  {/if}
</div>

<style>
  .brick {
    position: absolute;
    background-color: green;
  }
</style>
