import { useEffect, useState } from 'react';
import './tarjeta-episodio.css';

export interface EpisodioProps {
    episodeUrl: string
}

export type Episodio ={
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = ({episodeUrl}: EpisodioProps) => {

    const [episode, setEpisode] = useState<Episodio | null>(null)

    const fetchData = async () => {
        const res = await fetch(episodeUrl);
        const data = await res.json();
        setEpisode(data);
    }
    useEffect(()=> {
        fetchData();
    },[])

    return <div className="tarjeta-episodio">
            <h4>{episode?.name}</h4>
            <div>
                <span>{episode?.episode}</span>
                <br />
                <span>{episode?.created}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;