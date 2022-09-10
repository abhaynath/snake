<script lang="ts">
  import type { ScoreInfo } from "src/models/gameState";
  import { Levels } from "../../../src/models/level";
  import { scoreStore } from "./../../stores/scoreStore";
  import Brick from "./Brick.svelte";
  export let size: number = 0;
  let currentScoreInfo: ScoreInfo;

  scoreStore.subscribe((val: ScoreInfo) => {
    currentScoreInfo = val;
  });
  $: bricks = Levels[currentScoreInfo.level - 1].wall;
</script>

{#each bricks as brick}
  <Brick data={brick} size={size} />
{/each}
