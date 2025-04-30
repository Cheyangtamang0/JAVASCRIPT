async function getWeather(lat, lon) {
    const apiKey = 'your_api_key_here'; 
            
    const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2`;
    try {
        const response = await fetch(url)
        .then(response => {
            if(!response.ok){
                console.log("error")
            }
            return response.json();
        })
        .then (data => {
            
        })
        
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>Error fetching weather data.</p>`;
    }
}

function getWeatherByCoordinates() {
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    if (lat && lon) {
        getWeather(lat, lon);
    } else {
        alert('Please enter both latitude and longitude.');
    }
}

function getWeatherByDropdown() {
    const location = document.getElementById('locations').value;
    if (location) {
        const [lat, lon] = location.split(',');
        getWeather(lat, lon);
    }
}