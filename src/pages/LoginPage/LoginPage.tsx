import { Link} from "react-router-dom"
import DefaultLayout from "../../Layaout/DefaultLatout"
import { useState } from "react";
import './LoginPage.css'
import { loginUser } from "../../controllers/Autentication";

export default function LoginPage() {

    async function handleSubmit(e: any) {
        await loginUser({ email, password });
        e.preventDefault();
        console.log();
        
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <DefaultLayout>
            <div className="Registerpage">
                <h2>Iniciar Sesion</h2>
                <form className="form">

                    <label htmlFor="correoelectronico">Correo Electronico</label>
                    <input type="email" id="correoelectronico" name="correoelectronico" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="contresena">Contresena</label>
                    <input type="password" id="contresena" name="contresena" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <Link to={'/homepage'}><button type="submit" onClick={handleSubmit}>Iniciar Sesion</button></Link>

                </form>
                <div className="form">
                    <p>O inicia sesion con:</p>
                    <div className="botones">

                        <button className="Google">
                            <img src={''} alt="" className="Logo" />Google
                            
                        </button>

                        <button className="Twitter">
                            <img src={''} alt="" className="Logo" />Twitter
                        </button>

                    </div>
                </div>
            </div>
        </DefaultLayout >
    )

    }
