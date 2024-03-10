import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import DefaultLayout from "../../Layaout/DefaultLatout";
import { useAuth } from "../../auth/AuthProvider";


export default function RegisterPage() {

    const [name, setName] = useState("");
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
                <h2>Registrarse</h2>
                <form className="form">

                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor="correoelectronico">Correo Electronico</label>
                    <input type="email" id="correoelectronico" name="correoelectronico" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="contresena">Contresena</label>
                    <input type="password" id="contresena" name="contresena" value={password} onChange={(e) =>setPassword(e.target.value)} required />

                    <Link to={'/loginpage'}><button type="submit">Regristrarme</button></Link>
                </form>


                <div className="form">
                    <p>O registrate con:</p>
                    <button>Google</button>
                    <button>Twitter</button>
                </div>
            </div>
        </DefaultLayout>
    )

}
