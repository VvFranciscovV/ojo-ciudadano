document.addEventListener("DOMContentLoaded", function() {
    // Inicializar el mapa con Leaflet
    var map = L.map('map').setView([13.3578, -86.3998], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    let marker;

    // Evento para colocar un marcador en el mapa
    map.on('click', function(e) {
        let lat = e.latlng.lat;
        let lng = e.latlng.lng;

        if (marker) {
            map.removeLayer(marker);
        }

        marker = L.marker([lat, lng]).addTo(map);
        document.getElementById('latitud').value = lat;
        document.getElementById('longitud').value = lng;
        document.getElementById('coordenadas').textContent = `Lat: ${lat}, Lng: ${lng}`;
    });

    // Manejo del formulario
    document.getElementById('reporteForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let fechaHora = document.getElementById('fechaHora').value;
        let categoria = document.getElementById('categoria').value;
        let descripcion = document.getElementById('descripcion').value;
        let latitud = document.getElementById('latitud').value;
        let longitud = document.getElementById('longitud').value;

        if (!nombre || !fechaHora || !descripcion) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (!latitud || !longitud) {
            alert("Por favor, selecciona un punto en el mapa.");
            return;
        }

        alert("Reporte enviado con éxito.\n" +
              "Nombre: " + nombre + "\n" +
              "Fecha y Hora: " + fechaHora + "\n" +
              "Categoría: " + categoria + "\n" +
              "Descripción: " + descripcion + "\n" +
              "Ubicación: Lat " + latitud + ", Lng " + longitud);
    });
});