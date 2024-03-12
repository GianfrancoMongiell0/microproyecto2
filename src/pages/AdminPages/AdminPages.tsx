import { useState } from "react";
import { CreateGames } from "../../controllers/Games";

export default function AdminPages() {

    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [descripcion, setDescripcion] = useState("");

    interface Game {
        titulo: string;
        genero: string;
        descripcion: string;
        nombre: string; // Add the missing property 'nombre'
    }

    async function handleSubmit() {
        const game: Game = { titulo, genero, descripcion, nombre: "" }; // Provide a value for the 'nombre' property
        await CreateGames(game);
        alert("Juego creado con exito");
        console.log(titulo, genero, descripcion);
    }

    return (
        <div>
            <h2>Crea tu juego</h2>
            <label htmlFor="">
                Titulo: {' '}
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
            </label>
            <label htmlFor="">
                Genero: {' '}
                <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} required />
            </label>
            <label htmlFor="">
                Decripcion: {' '}
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
            </label>

            <button onClick={handleSubmit}>Enviar
            </button>
        </div>
    )
}
