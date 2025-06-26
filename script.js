function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
  const formattedHours = (hours % 12) || 12;
  const timeString = `${formattedHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

  document.getElementById('wallet-time').innerText = timeString;
}

setInterval(updateClock, 1000);
updateClock();
