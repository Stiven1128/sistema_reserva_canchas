document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar lógica para el dashboard principal
    console.log('Dashboard cargado');
    
    // Ejemplo: Actualizar la hora cada minuto
    function updateClock() {
        const now = new Date();
        console.log('Hora actual:', now.toLocaleTimeString());
    }
    
    setInterval(updateClock, 60000);
    updateClock();
});