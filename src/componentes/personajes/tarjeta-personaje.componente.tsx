import { Link } from 'react-router-dom';
import { Character } from '../../store/characters/slice';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';


export interface TarjetaProp {
    personaje: Character
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({personaje}: TarjetaProp) => {

    return <div className="tarjeta-personaje">
        <Link to={`/detalle/${personaje.id}`} ><img src={personaje.image} alt={personaje.name}/></Link>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito personaje={personaje} />
        </div>
    </div>
}

export default TarjetaPersonaje;