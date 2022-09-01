<script lang="ts">
  import { screenStore } from "../../../src/stores/screenStore";
  const restartGame = () => {
    console.log("restart game");
    screenStore.welcomeScreen();
  };
</script>

<div class="final">
  <div class="title">Congratulations !</div>
  <div>You have cleared all the levels.</div>

  <button on:click={restartGame}>Menu</button>
</div>

<style>
  .final {
    padding: 10px;
    /* background-color: rgb(71, 0, 0); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .title {
    text-align: center;
    font-size: 4em;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 15px #000;
  }
</style>
