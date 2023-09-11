import { useAppDispatch } from '../../store';
import { ADD_FAVORITE, Character, DROP_FAVORITE } from '../../store/characters/slice';
import './boton-favorito.css';

export interface ButtonProps {
    personaje: Character,
}
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({personaje}: ButtonProps) => {

    const dispatch = useAppDispatch()

    const favoriteHandler = () => {
        if(personaje.esFavorito){
            dispatch(DROP_FAVORITE(personaje.id))
        } else {
            dispatch(ADD_FAVORITE(personaje.id))
        }
    }
    const src: string = personaje.esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={favoriteHandler}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;