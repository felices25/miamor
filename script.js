
// Script para cambiar entre pantallas
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaMenu = document.getElementById('pantalla-menu');
const abajoIndex = document.getElementById('abajo-index');
const abajoMenu = document.getElementById('abajo-menu');
const irMenuButton = document.getElementById('ir-menu');

// Función para mostrar el menú
function mostrarMenu() {
pantallaInicio.classList.add('hidden');
pantallaMenu.classList.remove('hidden');
abajoIndex.classList.add('hidden');
abajoMenu.classList.remove('hidden');
}
// Evento para el botón de ir al menú
irMenuButton.addEventListener('click', mostrarMenu);

