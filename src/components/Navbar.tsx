import React from 'react';
import Logo from '../assets/logo.svg';
import { WeatherData } from '../types/types';
import SearchForCity from './InputSearchCity';

interface NavigationProps {
    onDataReceived: (data: WeatherData) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onDataReceived }) => {

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

                        <SearchForCity onDataReceived={onDataReceived} />

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

export default Navigation;