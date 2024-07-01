import { useState } from 'react';
import { WeatherData } from '../types/types';
import Card from './Card';
import Navigation from './Navbar';

export function MainContent() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const handleDataReceived = (data: WeatherData) => {
        setWeatherData(data);
    };

    return (
        <>
            <Navigation onDataReceived={handleDataReceived} />
            <div className="mt-11 p-4 border rounded-lg shadow">
                {weatherData && <Card data={weatherData} />}
            </div>
        </>
    );
}