// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const mapElement = document.getElementById('map');

    if (!mapElement) return;

    const coordinatesData = mapElement.getAttribute('data-coordinates');
    const mapToken = mapElement.getAttribute('data-map-token');

    if (!coordinatesData) {
        console.error('No coordinates data found');
        return;
    }

    try {
        const coordinates = JSON.parse(coordinatesData);
        console.log("Map coordinates:", coordinates); // DEBUG

        if (!coordinates || !coordinates.coordinates) {
            console.error('Invalid coordinates data');
            return;
        }

        // Initialize map
        const map = new maplibregl.Map({
            container: 'map',
            style: 'https://tiles.openfreemap.org/styles/bright',
            center: coordinates.coordinates, // Use the listing coordinates
            zoom: 12, // Zoom level to see the location clearly
            pitch: 0,
            bearing: 0
        });

        // Add navigation controls
        map.addControl(new maplibregl.NavigationControl());

        // Wait for map to load before adding marker
        map.on('load', function () {
            // Add a marker at the listing location
            new maplibregl.Marker({
                color: "#FF0000"
            })
                .setLngLat(coordinates.coordinates)
                .setPopup(new maplibregl.Popup().setHTML("<h3>This is your location</h3>"))
                .addTo(map);

            // console.log("Marker added at:", coordinates.coordinates);
        });

    } catch (error) {
        console.error('Error initializing map:', error);
    }
});