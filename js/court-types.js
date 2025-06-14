document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('court-type-modal');
    const addBtn = document.getElementById('add-court-type');
    const closeBtn = document.querySelector('.modal-close');
    const cancelBtn = document.querySelector('.modal-cancel');
    
    // Abrir modal para agregar
    addBtn.addEventListener('click', function() {
        document.getElementById('modal-court-type-title').textContent = 'Agregar Tipo de Cancha';
        modal.classList.add('show');
    });
    
    // Cerrar modal
    function closeModal() {
        modal.classList.remove('show');
        document.getElementById('court-type-form').reset();
    }
    
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // Guardar datos (simulado)
    document.querySelector('.modal-save').addEventListener('click', function() {
        alert('Tipo de cancha guardado (simulación)');
        closeModal();
    });
    
    // Editar fila (simulado)
    document.querySelectorAll('.btn-icon.edit').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('modal-court-type-title').textContent = 'Editar Tipo de Cancha';
            modal.classList.add('show');
        });
    });
    
    // Eliminar fila (simulado)
    document.querySelectorAll('.btn-icon.delete').forEach(btn => {
        btn.addEventListener('click', function() {
            if(confirm('¿Estás seguro de eliminar este tipo de cancha?')) {
                alert('Tipo de cancha eliminado (simulación)');
            }
        });
    });
});