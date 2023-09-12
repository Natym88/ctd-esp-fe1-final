import { ChangeEvent, useEffect, useState } from 'react';
import './filtros.css';

export interface FilterProps {
    filter: (filtro: string) => void
}

const Filtros = ({filter}: FilterProps) => {

    const [inputValue, setInputValue] = useState('');
    const [valor, setValor] = useState("");

    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setValor(value)
    }

    useEffect(() => {
        const getData = setTimeout(() => {
            if(valor !== '')
                filter(`name=${valor}`)
        }, 2000)
        return () => clearTimeout(getData)
    }, [valor])

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={inputValue} onChange={onChangeHandler} />
    </div>
}

export default Filtros;