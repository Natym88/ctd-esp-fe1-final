import { ChangeEvent, useEffect, useState } from 'react';
import './filtros.css';

export interface FilterProps {
    filtro: string,
    filter: (filtro: string) => void
}

const Filtros = ({filter, filtro}: FilterProps) => {
    
    const [valor, setValor] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState(filtro);

    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setValor(value)
    }

    useEffect(() => {
        const getData = setTimeout(() => {
            if(valor !== null )
                filter(valor)
        }, 800)
        return () => clearTimeout(getData)
    }, [valor])

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={inputValue} onChange={onChangeHandler} />
    </div>
}

export default Filtros;