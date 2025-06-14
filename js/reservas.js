// Función para mostrar tabs
        function showTab(tabId) {
            // Ocultar todos los contenidos de tabs
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Mostrar el tab seleccionado
            document.getElementById(tabId).classList.add('active');

            // Actualizar botones de navegación
            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(button => {
                button.classList.remove('active');
            });

            // Marcar como activo el botón correspondiente
            event.target.classList.add('active');
        }

        // Funciones para modales
        function openModifyModal() {
            document.getElementById('modifyModal').classList.add('active');
        }

        function openCancelModal() {
            document.getElementById('cancelModal').classList.add('active');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // Funciones de acciones
        function confirmarReserva() {
            alert('¡Reserva confirmada exitosamente!\n\nDetalles:\n- Cancha: Fútbol 5 - Cancha A\n- Fecha: 13 de Enero, 2025\n- Horario: 14:00 - 15:00\n- Total: $25.000');
            showTab('mis-reservas');
        }

        function modificarReserva() {
            alert('¡Reserva modificada exitosamente!\n\nNuevos detalles:\n- Fecha: 20 de Enero, 2025\n- Horario: 14:00 - 16:00');
            closeModal('modifyModal');
        }

        function cancelarReserva() {
            alert('Reserva cancelada exitosamente.\n\nLa reserva ha sido cancelada y el horario liberado.');
            closeModal('cancelModal');
        }

        // Cerrar modal al hacer clic fuera de él
        window.onclick = function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }

        // Interactividad del calendario
        document.addEventListener('DOMContentLoaded', function() {
            // Verificar si hay parámetro de URL para mostrar tab específico
            const urlParams = new URLSearchParams(window.location.search);
            const tab = urlParams.get('tab');
            if (tab === 'mis-reservas') {
                showTab('mis-reservas');
                document.querySelectorAll('.tab-button')[1].classList.add('active');
                document.querySelectorAll('.tab-button')[0].classList.remove('active');
            }

            // Selección de días del calendario
            const calendarDays = document.querySelectorAll('.calendar-day.available');
            calendarDays.forEach(day => {
                day.addEventListener('click', function() {
                    // Remover selección anterior
                    document.querySelectorAll('.calendar-day.selected').forEach(selected => {
                        selected.classList.remove('selected');
                        selected.classList.add('available');
                    });
                    
                    // Seleccionar nuevo día
                    this.classList.remove('available');
                    this.classList.add('selected');
                });
            });

            // Selección de horarios
            const timeSlots = document.querySelectorAll('.time-slot.available');
            timeSlots.forEach(slot => {
                slot.addEventListener('click', function() {
                    // Remover selección anterior
                    document.querySelectorAll('.time-slot.selected').forEach(selected => {
                        selected.classList.remove('selected');
                        selected.classList.add('available');
                    });
                    
                    // Seleccionar nuevo horario
                    this.classList.remove('available');
                    this.classList.add('selected');
                });
            });
        });