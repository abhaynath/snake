<script lang="ts">
  import type { FoodItem } from "$models/play-screen";
  

  /*   export let top: number = 0;
  export let left: number = 0; */
  export let size: number = 0;
  export let data: FoodItem;
</script>

<div class="food bounce-top" style="left: {data.left * size}px; top: {data.top * size}px;width:{size - 2}px;height:{size - 2}px;">
  <svg viewBox="0 0 855.6 798.6">
    <g id="Layer_1" />
    <g id="Layer_2">
      <g>
        <g>
          <ellipse id="shadow" opacity="0.3" cx="438.7" cy="765.8" rx="283" ry="32.9" />
        </g>
        <g>
          <path
            id="cup-shadow"
            fill="#E7F4FA"
            d="M135.4,492.8c0,0,17,201,77,230c81.1,39.2,258,43.7,392,25.1
            c100.5-13.9,115.1-120.1,122-154.4c8-39.7,19.5-119,6.5-137S217.4,370.8,135.4,492.8z"
          />
          <path
            id="cup-light"
            fill="#FFFFFF"
            d="M155.8,563.9c0,0,12.5,129.5,68.5,151.7c75.8,30,241,33.4,366.1,19.2
            c93.8-10.7,107.5-92,114-118.3c7.5-30.4,22.7-73.8,15.3-89C711.8,510.9,478.4,406.5,155.8,563.9z"
          />
        </g>
        <g>
          <path
            id="mainFood"
            fill="#DB343C"
            d="M57,240.8c35.9-55.2,83.5-142,189.1-192.7C365.6-9.3,527.4-11.2,598.8,20.8
            c41.7,18.7,160.6,74,214.5,205.5c92,224.4,10.9,261.8-27.3,263.6s-285.6-42.4-347.6-36.1c-59.9,6.1-148.2,2.1-312.4,77.9
            C54.4,564.8,8.4,515.8,0.6,479C-3.5,459.8,13.4,307.8,57,240.8z"
          />
        </g>
        <g>
          <path
            id="highlight"
            opacity="0.3"
            fill="#FFFFFF"
            stroke="#000000"
            stroke-width="0.25"
            stroke-miterlimit="10"
            d="M231.4,76.8
            c74.3-34.1,184.9-82.6,345-35c148,44,244,176,207,256s-53.4,66.9-110,58c-83-13-226-101-256-120s-175-97-186-111
            S189.5,96,231.4,76.8z"
          />
        </g>
        <g id="c1">
          <!-- <ellipse transform="matrix(0.9021 0.4316 -0.4316 0.9021 145.7921 -33.5297)" fill="#FFFFFF" cx="146.8" cy="304.5" rx="96.4" ry="170.6" /> -->
          <ellipse id="c2" fill="#FFFFFF" cx="436.8" cy="144.3" rx="140.6" ry="138.4" />

          <!-- <ellipse id="c3" transform="matrix(0.9535 -0.3013 0.3013 0.9535 -54.3262 235.2661)" fill="#FFFFFF" cx="735.6" cy="293.8" rx="86.7" ry="115" /> -->
        </g>
      </g>
    </g>
  </svg>
</div>

<style>
  .food {
    position: absolute;
    /*   border: 1px solid #e76901;
    background-color: #ff9900;
    border-radius: 50%; */
    z-index: 0;
    /* transition: all 250ms linear; */
  }
</style>
