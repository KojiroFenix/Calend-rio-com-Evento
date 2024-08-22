// clock.js

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Formato da hora
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Formato da data
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = now.getFullYear();
  
    const dateString = `${day}/${month}/${year}`;
  
    // Atualiza o conteúdo do relógio
    document.getElementById('clock').innerHTML = `${timeString}<br>${dateString}`;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);
  
  // Inicializa o relógio imediatamente
  updateClock();
