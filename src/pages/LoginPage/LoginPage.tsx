import { Link, Navigate } from "react-router-dom"
import DefaultLayout from "../../Layaout/DefaultLatout"
import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import './LoginPage.css'
import LogoGoogle from '../../assets/LogoGoogle.png';

import x from '../../assets/x.webp'

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();
    if (auth.isAutheticade) {
        return (<Navigate to={'/homepage'} />
        )
    }

    return (
        <DefaultLayout>
            <div className="Registerpage">
                <h2>Iniciar Sesion</h2>
                <form className="form">

                    <label htmlFor="correoelectronico">Correo Electronico</label>
                    <input type="email" id="correoelectronico" name="correoelectronico" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="contresena">Contresena</label>
                    <input type="password" id="contresena" name="contresena" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <Link to={'/loginpage'}><button type="submit">Iniciar Sesion</button></Link>
                </form>


                <div className="form">
                    <p>O inicia sesion con:</p>
                    <div className="botones">

                        <button className="Google">
                            <img src={LogoGoogle} alt="" className="Logo" />Google
                        </button>

                        <button className="Twitter">
                            <img src={x} alt="" className="Logo" />Twitter
                        </button>

                    </div>
                </div>
            </div>
        </DefaultLayout >
    )

}