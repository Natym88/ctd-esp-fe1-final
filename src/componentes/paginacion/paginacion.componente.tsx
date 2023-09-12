import { useAppDispatch } from '../../store';
import { CHANGE_PAGE } from '../../store/characters/thunks';
import { Data } from '../../store/paginator/slice';
import { GET_DATA } from '../../store/paginator/thunks';
import './paginacion.css';

export interface DataProps {
    data: Data
}

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({data}: DataProps) => {

    const dispatch = useAppDispatch();

    const nextHandler = () => {
        if(data.next) {
            dispatch(CHANGE_PAGE(data.next));
            dispatch(GET_DATA(data.next));
        }
    }

    const prevHandler = () => {
        if (data.prev) {
            dispatch(CHANGE_PAGE(data.prev));
            dispatch(GET_DATA(data.prev));
        }
    }


    return <div className="paginacion">
        <button disabled={!!!data.prev} className={"primary"} onClick={prevHandler}>Anterior</button>
        <button disabled={!!!data.next} className={"primary"} onClick={nextHandler}>Siguiente</button>
    </div>
}

export default Paginacion;