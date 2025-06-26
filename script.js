function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-ES'); // incluye segundos
  document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();
