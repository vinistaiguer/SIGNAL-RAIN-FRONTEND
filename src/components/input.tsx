import React, { ChangeEvent, KeyboardEvent } from 'react';

interface GenericInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const GenericInput: React.FC<GenericInputProps> = ({ value, onChange, onKeyDown, placeholder, className }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={className}
        />
    );
};

export default GenericInput;