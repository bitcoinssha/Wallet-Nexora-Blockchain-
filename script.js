let connectedAccount = null;
let provider = null;

// Saldos simulados iniciales
let balances = {
  NEX: 1000000,
  USDT: 1400000
};

// Guardar y cargar desde localStorage
function saveBalances() {
  localStorage.setItem("nexora_balances", JSON.stringify(balances));
}
function loadBalances() {
  const saved = localStorage.getItem("nexora_balances");
  if (saved) balances = JSON.parse(saved);
}
loadBalances();
updateUI();

async function connectWallet(walletType) {
  if (walletType === "metamask") {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        connectedAccount = accounts[0];
        provider = window.ethereum;
        showConnectedAddress();
      } catch (err) {
        alert("Conexión rechazada por el usuario");
      }
    } else {
      alert("MetaMask no está disponible");
    }
  }

  if (walletType === "trust") {
    const deepLink = "https://link.trustwallet.com/open_url?coin_id=60&url=" + encodeURIComponent(window.location.href);
    window.open(deepLink, "_blank");
  }
}

function showConnectedAddress() {
  const addr = connectedAccount;
  const shortAddr = addr.substring(0, 6) + "..." + addr.slice(-4);
  document.querySelector(".wallet-address").innerText = shortAddr;
  document.querySelector(".wallet-status").innerText = "Conectado";
}

// Botón de envío simulado
document.querySelector("#sendBtn").addEventListener("click", () => {
  if (!connectedAccount) {
    alert("Conecta primero una wallet");
    return;
  }

  const token = prompt("¿Qué token deseas enviar? (NEX o USDT)");
  const amount = parseFloat(prompt("¿Cuánto deseas enviar?"));
  const address = prompt("¿A qué dirección deseas enviarlo?");

  if (!token || isNaN(amount) || !address) {
    alert("Datos inválidos");
    return;
  }

  const t = token.toUpperCase();

  if (!balances[t]) {
    alert("Token inválido");
    return;
  }

  if (balances[t] < amount) {
    alert("Saldo insuficiente");
    return;
  }

  balances[t] -= amount;
  saveBalances();
  updateUI();
  alert(`✅ Enviados ${amount} ${t} a ${address}`);
});

// Botón de recibir simulado
document.querySelector("#receiveBtn").addEventListener("click", () => {
  alert("🚧 Función de recibir en desarrollo.");
});

// Actualiza la UI con saldos
function updateUI() {
  document.getElementById("nexAmount").innerText = balances.NEX.toLocaleString();
  document.getElementById("usdtAmount").innerText = balances.USDT.toLocaleString();

  const total = balances.NEX + balances.USDT;
  document.getElementById("totalUSD").innerText = `$${total.toLocaleString()}`;
}

// Menu de conexión
document.querySelector("#connectWallet").addEventListener("click", () => {
  const menu = confirm("¿Conectar con MetaMask? (Cancelar usará Trust Wallet)");
  connectWallet(menu ? "metamask" : "trust");
});
