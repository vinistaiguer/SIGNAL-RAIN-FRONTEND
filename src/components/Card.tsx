interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface CardProps {
    data: WeatherData;
}

const Card: React.FC<CardProps> = ({ data }) => {
    const { name, coord, main, weather, wind, clouds, sys } = data;

    return (
        <div className="p-4 border rounded-lg shadow">
            <h1 className="text-xl font-bold">Dados meteorológicos de: {name}</h1>
            <p>Longitude: {coord.lon}</p>
            <p>Latitude: {coord.lat}</p>
            <p>Temperature: {main.temp} K</p>
            <p>Feels Like: {main.feels_like} K</p>
            <p>Minimum Temperature: {main.temp_min} K</p>
            <p>Maximum Temperature: {main.temp_max} K</p>
            <p>Pressure: {main.pressure} hPa</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {wind.speed} m/s</p>
            <p>Wind Direction: {wind.deg}°</p>
            <p>Cloudiness: {clouds.all}%</p>
            <p>Country: {sys.country}</p>
            <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
            {weather.map((weather) => (
                <div key={weather.id}>
                    <p>Main: {weather.main}</p>
                    <p>Description: {weather.description}</p>
                    <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weather.description} />
                </div>
            ))}
        </div>
    );
}

export default Card;