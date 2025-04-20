function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: -34.397, lng: 150.644 },
    });

    const input = document.getElementById("searchInput");
    const searchBox = new google.maps.places.SearchBox(input);

    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places.length == 0) return;

        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

            new google.maps.Marker({
                map,
                position: place.geometry.location,
            });

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });

        map.fitBounds(bounds);
    });

    // Mostrar ubicación del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                map.setCenter(pos);

                new google.maps.Marker({
                    position: pos,
                    map,
                    title: "Tu ubicación",
                });
            },
            () => {
                console.warn("Error: Falló la geolocalización.");
            }
        );
    } else {
        console.warn("Error: Tu navegador no soporta geolocalización.");
    }
}
