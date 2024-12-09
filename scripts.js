const cursorStyles = [
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

document.addEventListener('click', () => {
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

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.innerHTML = `
    .cursor-0 {
      cursor:default;
}
    .cursor-1{
     cursor: ${cursorStyles[Math.floor(Math.random() * cursorStyles.length)]};
}
    `;
  document.head.appendChild(style);
});
