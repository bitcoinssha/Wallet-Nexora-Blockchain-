function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-ES');
  document.getElementById('clock').textContent = timeString;
}

function toggleTheme() {
  document.body.classList.toggle('light');
  const icon = document.querySelector('.theme-toggle');
  icon.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}

function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'light') {
    document.body.classList.add('light');
    document.querySelector('.theme-toggle').textContent = '🌙';
  }
}

function openModal(type) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-content');

  if (type === 'send') {
    content.innerHTML = `
      <p>Funcionalidad en desarrollo. Muy pronto disponible en esta versión de Nexora Wallet.</p>
      <button onclick="closeModal()">Cerrar</button>
    `;
  }

  if (type === 'receive') {
    content.innerHTML = `
      <p><strong>Recibir tokens</strong></p>
      <p class="note-red">Esta funcionalidad aún no está activa.</p>
      <button onclick="closeModal()">Cerrar</button>
    `;
  }

  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

setInterval(updateClock, 1000);
updateClock();
loadTheme();
