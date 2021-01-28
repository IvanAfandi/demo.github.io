var num = Math.floor(Math.random() * 2) +1;

$('#card').wScratchPad({
    size: 50,          // The size of the brush/scratch.
    bg: `image/sc-win ${num}.png`,  // Background (image path or hex color).
    fg: 'image/sc-default.png',  // Foreground (image path or hex color).
    realtime: true,       // Calculates percentage in realitime.
    scratchDown: null,       // Set scratchDown callback.
    scratchUp: null,       // Set scratchUp callback.
    scratchMove: null,       // Set scratcMove callback.
    cursor: 'pointer' // Set cursor.
  });