const cursor-1 = [
  "auto",
  "crosshair",
  "default",
  "e-resize",
  "help",
  "move",
  "n-resize",
  "ne-resize",
  "nw-resize",
  "pointer",
  "progress",
  "s-resize",
  "se-resize",
  "sw-resize",
  "text",
  "w-resize",
  "wait"

];



let currentCursor = 'cursor-0';

document.addEventListener('click', ("cursor-btn") => {
  if (currentCursor === 'cursor-0') {
    document.body.classList.add('cursor-1');
    document.body.classList.remove('cursor-0');
    currentCursor = 'cursor-1';
  } else {
    document.body.classList.remove('cursor-1');
    document.body.classList.add('cursor-0');
    currentCursor = 'cursor-0';
  }
});