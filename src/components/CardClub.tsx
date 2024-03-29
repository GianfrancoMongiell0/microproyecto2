import './Card.css';
import { getClub } from "../controllers/Clubs";

import { useEffect, useState } from 'react';


export default function CardGames() {

    const [clubs, setClubs] = useState<any[]>([]);

    useEffect(() => {
        const fetchClub = async () => {
            const clubData = await getClub();
            setClubs(clubData ?? [] as any[]);
        };

        fetchClub();
    }, []);


    const cardClub = clubs.map((club) => (
        <li key={club.nombre}>
            <h2>{club.nombre}</h2>
            <p> {club.descripcion}</p>

        </li>))



    return (
        <article>
            <ul>{cardClub}</ul>
        </article>
    )
}

