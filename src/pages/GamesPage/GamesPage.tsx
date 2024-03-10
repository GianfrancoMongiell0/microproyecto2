import { useGames } from "../../api/api";

export default function GamesPage() {
    const games = useGames();
    return (
        <div>
            <h1>Games</h1>
            {games.isLoading && <div>Se estan cargando los juegos</div>}



//FIX: Arrerglar el error de typescript
            {games.data && games.data.map((game: any) => {
                return (
                    <div key={game.ID}>
                        <p>{game.ID}</p>
                        <h2>{game.titulo}</h2>
                        <p>{game.genero}</p>
                        <p>{game.descripcion}</p>
                    </div>
                )
            }
            )}

        </div >
    );
}
