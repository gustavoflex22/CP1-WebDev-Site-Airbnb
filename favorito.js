const link = document.getElementById('link-coracao');
const svg = document.getElementById('coracao');
let isRed = false;

link.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que o link seja seguido

  // Alterna entre vermelho e branco
  if (isRed) {
    svg.style.fill = 'white';
    isRed = false;
  } else {
    svg.style.fill = 'red';
    isRed = true;
  }
});