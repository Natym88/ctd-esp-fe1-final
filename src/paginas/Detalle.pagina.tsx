import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CHARACTER_DETAILS } from "../store/characters/thunks";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {

    const id = useParams() as any;
    const dispatch = useAppDispatch();
    const {details, isLoading} = useAppSelector((state) => state.character)
    
    useEffect(() => {
        dispatch(CHARACTER_DETAILS(`${id.id}`))
    },[id, dispatch]) 

    return  <div className="container">
        {isLoading ? <div>...Loading</div> :
        (details && <><h3>{details.name}</h3>
        <div className={"detalle"}>
        <div className={"detalle-header"}>
                <img src={details.image} alt={details.name}/>
                <div className={"detalle-header-texto"}>
                
                <p>{details.name}</p>
                <p>Planeta: {details.origin.name}</p>
                <p>Genero: {details.gender}</p>
                </div>
                <BotonFavorito personaje={details}/>
                </div>
                </div>
                <h4>Lista de episodios donde apareció el personaje</h4>
                <div className={"episodios-grilla"}>
            {details.episode.map( e => (
                <TarjetaEpisodio key={e} episodeUrl={e} />
            ))}
        </div></>)}
    </div>
}

export default PaginaDetalle