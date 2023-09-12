import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { DROP_ALL_FAVORITES } from "../store/characters/slice";



/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const dispatch = useAppDispatch();

    const { favoriteCharacters } = useAppSelector((state) => state.character);
    
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            {favoriteCharacters.length > 0 && <button className="danger" onClick={() => dispatch(DROP_ALL_FAVORITES())}>Borrar todos</button>}
        </div>
        <GrillaPersonajes personajes={favoriteCharacters} />
        {favoriteCharacters.length == 0 && <h3>No tiene ningún favorito aún</h3> }
    </div>
}

export default PaginaFavoritos