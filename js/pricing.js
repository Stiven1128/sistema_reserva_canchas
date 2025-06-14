document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('pricing-modal');
    const addBtn = document.getElementById('add-pricing');
    const closeBtn = document.querySelector('#pricing-modal .modal-close');
    const cancelBtn = document.querySelector('#pricing-modal .modal-cancel');
    
    // Abrir modal para agregar
    addBtn.addEventListener('click', function() {
        document.getElementById('modal-pricing-title').textContent = 'Agregar Precio';
        modal.classList.add('show');
    });
    
    // Cerrar modal
    function closeModal() {
        modal.classList.remove('show');
        document.getElementById('pricing-form').reset();
    }
    
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // Guardar datos (simulado)
    document.querySelector('#pricing-modal .modal-save').addEventListener('click', function() {
        alert('Precio guardado (simulación)');
        closeModal();
    });
    
    // Editar fila (simulado)
    document.querySelectorAll('.btn-icon.edit').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('modal-pricing-title').textContent = 'Editar Precio';
            modal.classList.add('show');
        });
    });
    
    // Eliminar fila (simulado)
    document.querySelectorAll('.btn-icon.delete').forEach(btn => {
        btn.addEventListener('click', function() {
            if(confirm('¿Estás seguro de eliminar este precio?')) {
                alert('Precio eliminado (simulación)');
            }
        });
    });
    
    // Filtros (simulado)
    document.getElementById('court-type-filter').addEventListener('change', function() {
        console.log('Filtrar por tipo de cancha:', this.value);
    });
    
    document.getElementById('day-type-filter').addEventListener('change', function() {
        console.log('Filtrar por tipo de día:', this.value);
    });
});