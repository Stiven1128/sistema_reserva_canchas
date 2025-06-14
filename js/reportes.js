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

        // Funciones para limpiar filtros
        function limpiarFiltrosUso() {
            document.getElementById('fecha-inicio-uso').value = '2025-01-01';
            document.getElementById('fecha-fin-uso').value = '2025-01-31';
            document.getElementById('tipo-cancha-uso').value = '';
            document.getElementById('cancha-especifica').value = '';
        }

        function limpiarFiltrosFacturacion() {
            document.getElementById('fecha-inicio-fact').value = '2025-01-01';
            document.getElementById('fecha-fin-fact').value = '2025-01-31';
            document.getElementById('tipo-cancha-fact').value = '';
            document.getElementById('usuario-fact').value = '';
        }

        // Funciones para generar reportes
        function generarReporteUso() {
            const fechaInicio = document.getElementById('fecha-inicio-uso').value;
            const fechaFin = document.getElementById('fecha-fin-uso').value;
            const tipoCancha = document.getElementById('tipo-cancha-uso').value;
            const canchaEspecifica = document.getElementById('cancha-especifica').value;

            alert(`Generando reporte de uso de canchas...\n\nFiltros aplicados:\n- Período: ${fechaInicio} a ${fechaFin}\n- Tipo: ${tipoCancha || 'Todos'}\n- Cancha: ${canchaEspecifica || 'Todas'}\n\n¡Reporte generado exitosamente!`);
        }

        function generarReporteFacturacion() {
            const fechaInicio = document.getElementById('fecha-inicio-fact').value;
            const fechaFin = document.getElementById('fecha-fin-fact').value;
            const tipoCancha = document.getElementById('tipo-cancha-fact').value;
            const usuario = document.getElementById('usuario-fact').value;

            alert(`Generando reporte de facturación...\n\nFiltros aplicados:\n- Período: ${fechaInicio} a ${fechaFin}\n- Tipo: ${tipoCancha || 'Todos'}\n- Usuario: ${usuario || 'Todos'}\n\n¡Reporte generado exitosamente!`);
        }

        // Funciones para exportar
        function exportarPDF(tipo) {
            const tipoReporte = tipo === 'uso' ? 'Uso de Canchas' : 'Facturación';
            alert(`Exportando reporte de ${tipoReporte} a PDF...\n\n¡Archivo PDF generado exitosamente!\nEl archivo se descargará automáticamente.`);
        }

        function exportarExcel(tipo) {
            const tipoReporte = tipo === 'uso' ? 'Uso de Canchas' : 'Facturación';
            alert(`Exportando reporte de ${tipoReporte} a Excel...\n\n¡Archivo Excel generado exitosamente!\nEl archivo se descargará automáticamente.`);
        }

        // Inicialización
        document.addEventListener('DOMContentLoaded', function() {
            // Verificar si hay parámetro de URL para mostrar tab específico
            const urlParams = new URLSearchParams(window.location.search);
            const tab = urlParams.get('tab');
            if (tab === 'facturacion') {
                showTab('facturacion');
                document.querySelectorAll('.tab-button')[1].classList.add('active');
                document.querySelectorAll('.tab-button')[0].classList.remove('active');
            }
        });