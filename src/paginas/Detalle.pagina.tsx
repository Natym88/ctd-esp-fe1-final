import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppSelector } from "../store";
import { Character } from "../store/characters/slice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
    const { characters } = useAppSelector((state) => state.character)
    const personaje: Character | undefined = characters.find( p => p.id === parseInt(id.id))  
    
    useEffect(() => {},[, personaje]) 

    return  <div className="container">
        {personaje && <><h3>{personaje.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={personaje.image} alt={personaje.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{personaje.name}</p>
                    <p>Planeta: {personaje.origin.name}</p>
                    <p>Genero: {personaje.gender}</p>
                </div>
                <BotonFavorito personaje={personaje}/>
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            <TarjetaEpisodio />
        </div></>}
    </div>
}

export default PaginaDetalle