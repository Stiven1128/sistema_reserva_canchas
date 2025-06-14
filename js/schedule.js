document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('schedule-modal');
    const addBtn = document.getElementById('add-schedule');
    const closeBtn = document.querySelector('#schedule-modal .modal-close');
    const cancelBtn = document.querySelector('#schedule-modal .modal-cancel');
    
    // Abrir modal para agregar
    addBtn.addEventListener('click', function() {
        document.getElementById('modal-schedule-title').textContent = 'Agregar Horario';
        modal.classList.add('show');
    });
    
    // Cerrar modal
    function closeModal() {
        modal.classList.remove('show');
        document.getElementById('schedule-form').reset();
    }
    
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // Guardar datos (simulado)
    document.querySelector('#schedule-modal .modal-save').addEventListener('click', function() {
        alert('Horario guardado (simulación)');
        closeModal();
    });
    
    // Editar fila (simulado)
    document.querySelectorAll('.btn-icon.edit').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('modal-schedule-title').textContent = 'Editar Horario';
            modal.classList.add('show');
        });
    });
    
    // Eliminar fila (simulado)
    document.querySelectorAll('.btn-icon.delete').forEach(btn => {
        btn.addEventListener('click', function() {
            if(confirm('¿Estás seguro de eliminar este horario?')) {
                alert('Horario eliminado (simulación)');
            }
        });
    });
    
    // Filtros (simulado)
    document.getElementById('schedule-court-filter').addEventListener('change', function() {
        console.log('Filtrar por tipo de cancha:', this.value);
    });
    
    document.getElementById('schedule-day-filter').addEventListener('change', function() {
        console.log('Filtrar por día:', this.value);
    });
});