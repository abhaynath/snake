<script lang="ts">
  import { GameStatus, type ScreenStatus } from "../../../src/models/gameState";
  import { screenStore } from "../../../src/stores/screenStore";

  import { EnumDimensions } from "../../../src/helpers/constants";

  const centerX = EnumDimensions.SCREEN_WIDTH / 2;
  const centerY = EnumDimensions.SCREEN_HEIGHT / 2;

  let currentScreen: ScreenStatus;
  let key = "";
  let keyCode = 0;

  screenStore.subscribe((val: ScreenStatus) => {
    currentScreen = val;
  });
  const gameOver = () => {
    console.log("game over");
    screenStore.gameOver();
  };

  const pauseGame = () => {
    screenStore.pauseGame();
  };
  const resumeGame = () => {
    screenStore.resumeGame();
  };
  const onKeyDown = (e: KeyboardEvent) => {
    console.log(`onkeydown ${currentScreen.status}`);
    if (currentScreen.status == GameStatus.RUNNING) {
      console.log(e);
      key = e.key;
      keyCode = e.keyCode;
    }
  };
</script>

<svelte:window on:keydown={onKeyDown} />
<!-- <h3>{currentScreen.status}</h3> -->
<div class="play-screen" />

<div class="toolbar">
  <button on:click={pauseGame}>Pause</button>
  <button on:click={resumeGame}>Resume</button>
  <button on:click={gameOver}>Game over</button>
</div>

<style>
  .play-screen {
    position: relative;
    background-color: #2f013d;
    width: 100%;
    height: 100%;
  }
  .toolbar {
    display: flex;
    justify-content: center;
  }
</style>
