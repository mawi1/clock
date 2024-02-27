<script lang="ts">
  export let digit: number = 8;
  export let invisible: boolean = false;

  const SEGEMENTS = [
    // 0
    [true, true, true, true, true, true, false],
    // 1
    [false, true, true, false, false, false, false],
    // 2
    [true, true, false, true, true, false, true],
    // 3
    [true, true, true, true, false, false, true],
    // 4
    [false, true, true, false, false, true, true],
    // 5
    [true, false, true, true, false, true, true],
    // 6
    [true, false, true, true, true, true, true],
    // 7
    [true, true, true, false, false, false, false],
    // 8
    [true, true, true, true, true, true, true],
    // 9
    [true, true, true, true, false, true, true],
  ];
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  height="100%"
  width="100%"
  viewBox="0 0 10 18"
  stroke="black"
  stroke-width=".25"
  stroke-opacity="0.5"
  class="flex-[2] {invisible ? 'invisible' : ''} mx-[1.5%] first:ml-0 last:mr-0"
>
  {#if SEGEMENTS[digit][0]}
    <polygon id="a" fill="#F00" points="1, 1  2, 0  8, 0  9, 1  8, 2  2, 2" />
  {/if}
  {#if SEGEMENTS[digit][1]}
    <polygon id="b" fill="#F00" points="9, 1 10, 2 10, 8  9, 9  8, 8  8, 2" />
  {/if}
  {#if SEGEMENTS[digit][2]}
    <polygon id="c" fill="#F00" points="9, 9 10,10 10,16  9,17  8,16  8,10" />
  {/if}
  {#if SEGEMENTS[digit][3]}
    <polygon id="d" fill="#F00" points="9,17  8,18  2,18  1,17  2,16  8,16" />
  {/if}
  {#if SEGEMENTS[digit][4]}
    <polygon id="e" fill="#F00" points="1,17  0,16  0,10  1, 9  2,10  2,16" />
  {/if}
  {#if SEGEMENTS[digit][5]}
    <polygon id="f" fill="#F00" points="1, 9  0, 8  0, 2  1, 1  2, 2  2, 8" />
  {/if}
  {#if SEGEMENTS[digit][6]}
    <polygon id="g" fill="#F00" points="1, 9  2, 8  8, 8  9, 9  8,10  2,10" />
  {/if}
</svg>
