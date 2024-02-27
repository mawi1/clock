<svg
  xmlns="http://www.w3.org/2000/svg"
  height="100%"
  width="100%"
  viewBox="0 0 5 18"
  stroke="black"
  stroke-width=".25"
  stroke-opacity="0.5"
  class="flex-[1] mx-[1.5%] blink"
>
  <circle cx="2.5" cy="6" r="0.7" fill="#F00" />
  <circle cx="2.5" cy="12" r="0.7" fill="#F00" />
</svg>

<style>
  .blink {
    animation: blink 1s steps(1) infinite;
  }
  @keyframes blink {
    0% {
      visibility: visible;
    }
    50% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
</style>
