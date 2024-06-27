document.addEventListener('DOMContentLoaded', function() {
    const reportModal = document.getElementById('reportModal');
    const reportAreaButton = document.getElementById('reportAreaButton');
    const closeModalButton = document.getElementById('closeModal');
    const reportForm = document.getElementById('reportForm');

    reportAreaButton.addEventListener('click', function() {
        reportModal.style.display = 'flex';
    });

    closeModalButton.addEventListener('click', function() {
        reportModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == reportModal) {
            reportModal.style.display = 'none';
        }
    });

    reportForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const reportName = document.getElementById('reportName').value.trim();
        const reportComment = document.getElementById('reportComment').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked').value;

        if (reportName === '' || reportComment === '') {
            alert('Por favor, llena todos los campos.');
            return;
        }

        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        newComment.innerHTML = `
            <h3>${reportName}</h3>
            <p>${reportComment}</p>
            <div class="star-rating">
                ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
            </div>
        `;

        document.querySelector('.comments-container').appendChild(newComment);
        reportModal.style.display = 'none';
        reportForm.reset();
    });


    // Aquí comienza la inicialización del mapa
    let map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -12.0464, lng: -77.0428 }, // Coordenadas iniciales del mapa
            zoom: 15 // Nivel de zoom inicial
        });

        const input = document.getElementById('searchInput');
        const searchBox = new google.maps.places.SearchBox(input);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });

        let markers = [];
        searchBox.addListener('places_changed', function() {
            const places = searchBox.getPlaces();

            if (places.length === 0) {
                return;
            }

            markers.forEach(function(marker) {
                marker.setMap(null);
            });
            markers = [];

            const bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                markers.push(new google.maps.Marker({
                    map: map,
                    title: place.name,
                    position: place.geometry.location
                }));

                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
    }

    // Llama a la función de inicialización del mapa al cargar la página
    initMap();
});
