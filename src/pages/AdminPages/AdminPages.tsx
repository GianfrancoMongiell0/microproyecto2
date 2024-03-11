import { useState } from "react";
import { CreateGames } from "../../controllers/Games";

export default function AdminPages() {

    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [descripcion, setDescripcion] = useState("");

    async function handleSubmit(e: any) {
        await CreateGames({ titulo, genero, descripcion });
        alert("Juego creado con exito");
        console.log(titulo, genero, descripcion);
    }

    return (
        <div>
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
