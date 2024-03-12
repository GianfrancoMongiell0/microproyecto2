import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import DefaultLayout from "../../Layaout/DefaultLatout";
import { useAuth } from "../../auth/AuthProvider";
import '../LoginPage/LoginPage.css';
import { CreateUsers } from "../../controllers/Users";


export default function RegisterPage() {

    async function handleSubmit(e: any) {
        await CreateUsers({ name, lastName, email, password, game});
        e.preventDefault();
        console.log(name, lastName, email, password, game);
    }

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [game, setGame] = useState("") // [1,2,3

    const auth = useAuth();
    if (auth.isAutheticade) {
        return (<Navigate to={'/homepage'} />
        )
    }


    return (
        <DefaultLayout>
            <div className="Registerpage">
                <h2>Registrarse</h2>
                <form className="form">

                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} required />


                    <label htmlFor="correoelectronico">Correo Electronico</label>
                    <input type="email" id="correoelectronico" name="correoelectronico" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="contresena">Contresena</label>
                    <input type="password" id="contresena" name="contresena" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <label htmlFor="juegofavorito">Juego Favorito</label>
                    <select className="input" value={game} onChange={(e) => setGame(e.target.value)}>
                        <option value="The Withcer3: Wild Hunt">The Withcer3: Wild Hunt</option>
                        <option value="Read Dead Redemption 2">Read Dead Redemption 2</option>
                        <option value="The Legend od Zelda: Breath of the Wild">The Legend od Zelda: Breath of the Wild</option>
                        <option value="Dark Souls III">Dark Souls III</option>
                        <option value="Super Mario Odyssey">Super Mario Odyssey</option>
                        <option value="Overwatch">Overwatch</option>
                        <option value="Minecraft">Minecraft</option>
                        <option value="Fornite">Fornite</option>
                        <option value="Fifa 22">Fifa 22</option>
                        <option value="Call of Dty: Warzone">Call of Dty: Warzone</option>
                        <option value="Assassin's Creed Valhalla">Assassin's Creed Valhalla</option>
                        <option value="Cyberpunk 2077">Cyberpunk 2077</option>
                        <option value="Amoung Us12">Amoung Us</option>
                        <option value="Animal Crossing: New Horizon's">Animal Crossing: New Horizon's</option>
                        <option value="League of Legends">League of Legends</option>
                        <option value="Genshin Impact">Genshin Impact</option>
                        <option value="Apex Legends">Apex Legends</option>
                        <option value="World of Warcraft">World of Warcraft</option>
                        <option value="Genshin Impact">Genshin Impact</option>
                        <option value="Control">Control</option>
                        <option value="Hades">Hades</option>
                    </select>

                    <Link to={'/loginpage'}><button type="submit" onClick={handleSubmit}>Regristrarme</button></Link>
                </form>


                <div className="form">
                    <p>O inicia sesion con:</p>
                    <div className="botones">

                        <button >
                            <img src={'LogoGoogle'} alt="" className="Logo" />Google
                        </button>

                        <button >
                            <img src={'x'} alt="" className="Logo" />Twitter
                        </button>

                    </div>
                </div>
            </div>
        </DefaultLayout>
    )

}