<script lang="ts">
  import { onMount } from "svelte";

  import Colon from "./Colon.svelte";
  import SevenSegmentDigit from "./SevenSegmentDigit.svelte";

  let time = new Date();

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  $: hoursTensDigit = Math.trunc(time.getHours() / 10);
  $: hoursOnesDigit = time.getHours() % 10;
  $: minutesTensDigit = Math.trunc(time.getMinutes() / 10);
  $: minutesOnesDigit = time.getMinutes() % 10;

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
</script>

<main class="h-full flex justify-center items-center bg-black">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-interactive-supports-focus -->
  <div
    class="flex flex-row justify-center w-4/5"
    on:click={toggleFullScreen}
    role="button"
  >
    <SevenSegmentDigit digit={hoursTensDigit} invisible={hoursTensDigit == 0} />
    <SevenSegmentDigit digit={hoursOnesDigit} />
    <Colon />
    <SevenSegmentDigit digit={minutesTensDigit} />
    <SevenSegmentDigit digit={minutesOnesDigit} />
  </div>
</main>
