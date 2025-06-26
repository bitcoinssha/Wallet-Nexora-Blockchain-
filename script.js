// Función para actualizar el reloj cada segundo
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const clock = document.getElementById('clock');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Llama a updateClock inmediatamente y luego cada segundo
updateClock();
setInterval(updateClock, 1000);

// Alternar tema (por ahora solo ícono)
function toggleTheme() {
  const icon = document.querySelector('.theme-toggle');
  icon.textContent = icon.textContent === '☀️' ? '🌙' : '☀️';
}

// Activación del botón Recibir
document.addEventListener('DOMContentLoaded', () => {
  const receiveBtn = document.querySelector('.action-btn:nth-child(2)');
  receiveBtn.onclick = () => {
    alert('Tu dirección para recibir tokens es:\n0xA1b2...e4f5');
  };
});
