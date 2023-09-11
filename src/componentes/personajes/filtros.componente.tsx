import { ChangeEvent, useState } from 'react';
import './filtros.css';

export interface FilterProps {
    filter: (filtro: string) => void
}

const Filtros = ({filter}: FilterProps) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let valor = e.target.value;
        setInputValue(valor)
        if(valor === null)
            valor = "";
        filter(valor)
    }

    const handleLimpiarClick = () => {
        setInputValue('');
        filter('');
      };

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={inputValue} onChange={onChangeHandler} />
        <button onClick={handleLimpiarClick}>Limpiar</button>
    </div>
}

export default Filtros;