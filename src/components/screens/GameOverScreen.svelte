<script lang="ts">
  import { screenStore } from "../../../src/stores/screenStore";

  const restartGame = () => {
    console.log("restart game");
    screenStore.welcomeScreen();
  };
</script>

<div class="game-over-screen">
  <h1>Score : 80</h1>
  <button on:click={restartGame}>Restart</button>
</div>

<style>
  .game-over-screen {
    background-color: rgb(71, 0, 0);
  }
</style>
