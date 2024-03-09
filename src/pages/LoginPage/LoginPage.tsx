import { Link, Navigate } from "react-router-dom"
import DefaultLayout from "../../Layaout/DefaultLatout"
import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();
    if (auth.isAutheticade) {
        return ( <Navigate to={'/homepage'} />
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
                    <button>Google</button>
                    <button>Twitter</button>
                </div>
            </div>
        </DefaultLayout>
    )

}