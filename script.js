const colorDisplay = document.getElementById('colorDisplay');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');
const buttons = document.querySelectorAll('.color-btn');

let colors = [];
let pickedColor;

function generateRandomColor() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`;
}

function setupGame() {
  colors = [];
  for (let i=0; i<6; i++){
    colors.push(generateRandomColor());
    buttons[i].style.backgroundColor = colors[i];
    buttons[i].style.display = 'inline-block';
    buttons[i].disabled = false;
  }
  pickedColor = colors[Math.floor(Math.random()*colors.length)];
  colorDisplay.textContent = pickedColor;
  message.textContent = '';
  document.body.style.background = 'linear-gradient(to right, #ff7e5f, #feb47b)';
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const clickedColor = btn.style.backgroundColor;
    if (clickedColor === pickedColor) {
      message.textContent = '🎉 Correct!';
      document.body.style.background = pickedColor;
      buttons.forEach(b => b.style.backgroundColor = pickedColor);
    } else {
      btn.style.backgroundColor = '#f0f0f0';
      btn.disabled = true;
      message.textContent = '❌ Try Again';
    }
  });
});

resetBtn.addEventListener('click', setupGame);

// Initialize game
setupGame();