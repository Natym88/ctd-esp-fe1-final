import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { CHANGE_PAGE, FILTERED_CHARACTERS, GET_CHARACTERS } from "../store/characters/thunks";
import { GET_DATA } from "../store/paginator/thunks";
import BASE_URL from "../shared/enviroment/APIConfig";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const { characters, isLoading, isError } = useAppSelector((state) => state.character);
    const {data} = useAppSelector((state) => state.data)

    const dispatch = useAppDispatch();

    const filterHandler = (filtro: string) => {
        if(filtro === '') {
            dispatch(GET_CHARACTERS())
            dispatch(GET_DATA(''))
        } else {
            dispatch(FILTERED_CHARACTERS(filtro))
            dispatch(GET_DATA(`${BASE_URL}character/?name=${filtro}`))
        }
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={() => filterHandler('')}>Limpiar Búsqueda</button>
        </div>
        {isLoading ? <p>Loading...</p> :
        <>
        <Filtros filter={filterHandler} />
        {data &&
        <Paginacion data={data} />
        }
        <GrillaPersonajes personajes={characters} />
        {data &&
        <Paginacion data={data} />
        }
        </>
        }
        {isError && <p>{isError}</p>}
    </div>
}

export default PaginaInicio