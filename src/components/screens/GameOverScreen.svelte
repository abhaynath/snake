<script lang="ts">
  import { screenStore } from "$stores/screenStore";
  import { scoreStore } from "$stores/scoreStore";
  import type { ScoreInfo } from "$models/gameState";
  import { onMount } from "svelte";

  let btnReplay:HTMLButtonElement;

  onMount(()=>{
    btnReplay.focus();
  });
  const restartGame = () => {
    console.log("restart game");
    screenStore.welcomeScreen();
  };
  const replayGame = () => {
    scoreStore.resetScore();
    screenStore.startGame();
  };
  let scoreInfo: ScoreInfo;
  scoreStore.subscribe((val: ScoreInfo) => {
    scoreInfo = val;
  });
</script>

<div class="game-over-screen">
  <div class="title">Snake</div>
  <table>
    <tr><td class="c1">Player</td><td class="c2">{scoreInfo.playerName}</td></tr>
    <tr><td class="c1">Score</td><td class="c2">{scoreInfo.score}</td></tr>
    <tr><td class="c1">Food</td><td class="c2">{scoreInfo.food}</td></tr>
    <tr><td class="c1">Bonus</td><td class="c2">{scoreInfo.bonus}</td></tr>
    <tr><td class="c1">High Score</td><td class="c2">{scoreInfo.highScore}</td></tr>
    <tr><td class="c1">Level-Stage</td><td class="c2">{scoreInfo.level}<span>-</span>{scoreInfo.stage}</td></tr>
  </table>
  <div class="flex">
    <button bind:this={btnReplay} on:click={replayGame}>Replay</button>
    <button on:click={restartGame}>Menu</button>
  </div>
</div>

<style>
  .game-over-screen {
    padding: 10px;
    background-color: #000;
    /* background-color: rgb(71, 0, 0); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    text-align: center;
    font-size: 4em;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 15px #000;
  }
  table {
    position: relative;
    width: 50%;
  }
  table .c1 {
    color: #a651f7;
  }
  table .c2 {
    text-align: right;
    color: #b46cf8;
  }
  .flex {
    display: flex;
    justify-content: space-around;
    /* background-color: red; */
  }
  table td {
    padding: 5px;
  }
</style>
