<script lang="ts">
  export let message = "";
</script>

<div class="message-box">
  <h1>{message}</h1>
</div>

<style>
  .message-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    color: black;
    background-color: rgba(255, 255, 255, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 5;
  }
  h1 {
    animation: blink 250ms linear infinite;
  }
  @keyframes blink {
    0% {
      color: yellow;
      /* opacity: 0; */
    }
    50% {
      /* opacity: 0.5; */
    }
    100% {
      /* opacity: 1; */
      color: red;
    }
  }
</style>
