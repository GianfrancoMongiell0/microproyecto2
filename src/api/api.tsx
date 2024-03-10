import { useEffect, useState } from "react";
import { getGames } from "../controllers/Games";

export function useGames() {
    const [data, setData] = useState<null | any>(null);

    useEffect(() => {
        async function cargarJuegos() {
            const juegos = await getGames();
            if (juegos != null) {
                setData(juegos);
            }
        }
        cargarJuegos();
    })
    const isLoading = data === null;
    return { data, isLoading };

}


