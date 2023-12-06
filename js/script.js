document.addEventListener("DOMContentLoaded", function() {
    let segs = 55;
    let mins = 11;
    let segCount = document.getElementById("seg");
    let minCount = document.getElementById("min");
  
    function actualizarContador() {
      segs++;
      if (segs >= 60) {
        segs = 0;
        mins++;
        minCount.textContent = mins
      }
      if (segs < 10) {
        segCount.textContent = "0" + segs;
      } else {
        segCount.textContent = segs;
      }
    }
  
    setInterval(actualizarContador, 1000); // Actualizar cada segundo
  });