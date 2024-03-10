import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import DefaultLayout from "../../Layaout/DefaultLatout";
import { useAuth } from "../../auth/AuthProvider";
import '../LoginPage/LoginPage.css';
import LogoGoogle from '../../assets/LogoGoogle.png';
import x from '../../assets/x.webp'


export default function RegisterPage() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [game, setGame] = useState("valor1") // [1,2,3

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
                        <option value="0">The Withcer3: Wild Hunt</option>
                        <option value="1">Read Dead Redemption 2</option>
                        <option value="2">The Legend od Zelda: Breath of the Wild</option>
                        <option value="3">Dark Souls III</option>
                        <option value="4">Super Mario Odyssey</option>
                        <option value="5">Overwatch</option>
                        <option value="6">Minecraft</option>
                        <option value="7">Fornite</option>
                        <option value="8">Fifa 22</option>
                        <option value="9">Call of Dty: Warzone</option>
                        <option value="10">Assassin's Creed Valhalla</option>
                        <option value="11">Cyberpunk 2077</option>
                        <option value="12">Amoung Us</option>
                        <option value="13">Animal Crossing: New Horizon's</option>
                        <option value="14">League of Legends</option>
                        <option value="15">Genshin Impact</option>
                        <option value="16">Apex Legends</option>
                        <option value="17">World of Warcraft</option>
                        <option value="18">Genshin Impact</option>
                        <option value="19">Control</option>
                        <option value="20">Hades</option>
                    </select>

                    <Link to={'/loginpage'}><button type="submit">Regristrarme</button></Link>
                </form>


                <div className="form">
                    <p>O inicia sesion con:</p>
                    <div className="botones">

                        <button >
                            <img src={LogoGoogle} alt="" className="Logo" />Google
                        </button>

                        <button >
                            <img src={x} alt="" className="Logo" />Twitter
                        </button>

                    </div>
                </div>
            </div>
        </DefaultLayout>
    )

}