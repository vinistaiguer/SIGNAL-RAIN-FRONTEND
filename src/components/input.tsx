import { Input } from "@material-tailwind/react";
import {
    useQuery
} from '@tanstack/react-query';
import { ChangeEvent, useState } from "react";

interface TextInputProps {
    label: string;
    disabled?: boolean;
    width?: string;
    color?: string;
    height?: string;
}

export function TextInput({ label, ...props }: TextInputProps) {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        const { data } = useQuery({
            queryKey: ['repoData'],
            queryFn: () =>
                fetch('https://api.github.com/repos/TanStack/query').then((res) =>
                    res.json(),
                ),
            })
        
        console.log("DATA", data)
        setValue(event.target.value)
    }

    return (
        <div className="border-2 border-zinc-300 h-14 w-96 px-4 rounded-lg hover:cursor-pointer">
            <Input
                type="text"
                label={label}
                value={value}
                onChange={handleChange}
                disabled={props.disabled}
                width={props.width}
                color={props.color as any}
                height={props.height}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                crossOrigin="anonymous" 
                {...props}
            />
        </div>
    );
}