import { useState } from "react";
import { CreateGames } from "../../controllers/Games";

export default function AdminPages() {
    const [ID, setID] = useState("");
    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [descripcion, setDescripcion] = useState("");

    async function handleSubmit(e: any) {
        await CreateGames({ ID, titulo, genero, descripcion });
        alert("Juego creado con exito");
        console.log(ID, titulo, genero, descripcion);
    }

    return (
        <div>
            <label htmlFor="">
                ID: {' '}
                <input type="number" value={ID} onChange={(e) => setID(e.target.value)} required />
            </label>
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
