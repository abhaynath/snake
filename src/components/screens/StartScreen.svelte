<script type="ts">
  import { screenStore } from "$stores/screenStore";

  const startGame = () => {
    console.log("start game");
    screenStore.startGame();
  };
</script>

<div class="start-screen">
  <div class="title">Snake</div>
  <div class="btn">
    <button on:click={startGame}>Start</button>
  </div>
</div>

<style>
  .start-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: #3f3f3f; */
    flex-grow: 1;
   /*  background: url("../../assets/welcome.jpg");
    background-repeat: no-repeat;
    background-size: cover; */
  }
  .title {
    text-align: center;
    font-size: 4em;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 15px #000;
  }
  .btn{
    display: flex;
    justify-content: center;
  }
</style>
