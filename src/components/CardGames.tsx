import './Card.css';
import { getGames } from "../controllers/Games";

import React, { useEffect, useState } from 'react';


export default function CardGames({titulo, descripcion, genero }: { titulo: string, descripcion: string , genero: string}) {

    const [games, setGames] = useState<any[]>([]);

    useEffect(() => {
        const fetchGames = async () => {
            const gameData = await getGames();
            setGames(gameData ?? [] as any[]);
        };

        fetchGames();
    }, []);

   
    const cardGames = games.map((game) => (
        <li key={game.titulo}>
            <h2>{game.titulo}</h2>
            <p> {game.descripcion}</p>
            <p> {game.genero}</p>
          
        </li>))



    return (
        <article>
            <ul>{cardGames}</ul>
        </article>
    )
}

