// Reloj vivo
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// Tema claro/oscuro
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
}
