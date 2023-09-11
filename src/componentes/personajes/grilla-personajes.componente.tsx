import { useEffect } from 'react';
import { Character } from '../../store/characters/slice';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Link } from 'react-router-dom';

export interface PersonajeProps {
    personajes: Character[],
    favoritos: boolean,
}

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = ({personajes, favoritos}: PersonajeProps) => {

    useEffect(() => {}, [personajes])
    
    return <div className="grilla-personajes">
        {!favoritos ? personajes.map(p => (
                <TarjetaPersonaje key={p.id} personaje={p} /> )) :
            personajes.map(p => (
                p.esFavorito && <TarjetaPersonaje key={p.id} personaje={p} />
            ))
        }
    </div>
}
 
export default GrillaPersonajes;