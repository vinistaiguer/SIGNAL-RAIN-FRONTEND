import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { WeatherData } from '../types/types';
import GenericInput from './input';

interface SearchForCityProps {
    onDataReceived: (data: WeatherData) => void;
}

const SearchForCity: React.FC<SearchForCityProps> = ({ onDataReceived }) => {
    const [cityName, setCityName] = useState('');

    const { mutate, error } = useMutation({
        mutationFn: () =>
            axios.post(`http://localhost:3000/api/weather`, { cityName }).then((res) => res.data),
        onError: (err) => {
            console.error('An error occurred:', err.message);
        },
        onSuccess: (data: WeatherData) => {
            onDataReceived(data);
        },
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCityName(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            mutate();
        }
    };

    return (
        <div className="rounded-lg overflow-hidden">
            <GenericInput
                value={cityName}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Digite a cidade que deseja pesquisar"
                className="border-2 border-zinc-300 h-14 w-96 px-4 rounded-lg hover:cursor-pointer"
            />
            {error && <div>An error has occurred: {error.message}</div>}
        </div>
    );
};

export default SearchForCity;