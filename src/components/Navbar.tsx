import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import Logo from '../assets/logo.svg';
import { WeatherData } from '../types/types';

interface NavigationProps {
    onDataReceived: (data: WeatherData) => void;
}

export default function Navigation({ onDataReceived }: NavigationProps) {
    const [cityName, setCityName] = useState('');

    const { mutate, error, data } = useMutation({
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

    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bg-white z-50 w-full shadow">
                <header className="bg-white">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between xs:px-20 lg:px-20 md:px-20 sm:px-20" aria-label="Global">
                        <div className="flex items-center">
                            <a href="#" className="">
                                <img src={Logo} className="logo h-24 w-auto" alt="Vite logo" />
                            </a>
                            <h1 className="top-1 text-2xl">SIGNAL<strong>RAIN</strong></h1>
                        </div>
                        
                        <div className="rounded-lg overflow-hidden">
                            <input
                                id="search_for_city"
                                type="text"
                                className="border-2 border-zinc-300 h-14 w-96 px-4 rounded-lg hover:cursor-pointer"
                                placeholder="Digite a cidade que deseja pesquisar"
                                value={cityName}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                            />
                        </div>

                        <div className="flex justify-between">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 mr-4"
                            >
                                Log in
                            </a>
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-purple-800 text-white hover:bg-gray-50"
                            >
                                Sign in
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
}