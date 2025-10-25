const geocode = async (location) => {
    try {
        console.log("Geocoding location:", location); // DEBUG
        
        const baseURL = "https://nominatim.openstreetmap.org/search";
        const query = encodeURIComponent(location);
        const url = `${baseURL}?q=${query}&format=json&limit=1`;
        
        console.log("Geocoding URL:", url); // DEBUG
        
        const response = await fetch(url);

        if (!response.ok) {
            console.error(`Geocoding API failed with status: ${response.status}`);
            return null;
        }

        const data = await response.json();
        console.log("Geocoding response:", data); // DEBUG

        if (data && data.length > 0) {
            const coordinates = [parseFloat(data[0].lon), parseFloat(data[0].lat)];
            console.log("Found coordinates:", coordinates); // DEBUG
            
            return {
                features: [{
                    geometry: {
                        type: 'Point',
                        coordinates: coordinates
                    }
                }]
            };
        } else {
            console.error("Geocoding failed for:", location);
            return null;
        }
    } catch (error) {
        console.error("Error during geocoding API call:", error);
        return null;
    }
}

module.exports = geocode;