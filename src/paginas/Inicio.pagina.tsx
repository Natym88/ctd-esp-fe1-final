import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { GET_CHARACTERS } from "../store/characters/thunks";
import { FILTER_CHARACTERS } from "../store/characters/slice";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const { characters, isLoading, isError, filteredCharacters } = useAppSelector((state) => state.character);

    const dispatch = useAppDispatch();

    const filterHandler = (filtro: string) => {
        dispatch(FILTER_CHARACTERS(filtro))
    }

    useEffect(() => {
        dispatch(GET_CHARACTERS())
    }, [])

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        {isLoading ? <p>Loading...</p> :
        <>
        <Filtros filter={filterHandler} />
        <Paginacion />
        <GrillaPersonajes personajes={filteredCharacters ? filteredCharacters : characters} favoritos={false} />
        <Paginacion />
        </>
        }
        {isError && <p>{isError}</p>}
    </div>
}

export default PaginaInicio