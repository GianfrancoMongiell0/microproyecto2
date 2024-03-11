import { Link, Navigate } from "react-router-dom"
import DefaultLayout from "../../Layaout/DefaultLatout"
import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import './LoginPage.css'
import LogoGoogle from '../../assets/LogoGoogle.png';
import x from '../../assets/x.webp'
import { loginUser } from "../../controllers/Autentication";
import { db } from "../.././firebase"
import { collection, query, where, getDocs } from "firebase/firestore";


export default function LoginPage() {

    async function handleSubmit(e: any) {
        await op();
        e.preventDefault();
        console.log();
        
    }


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();

    async function op(){
        const result = await loginUser({ email, password});
        if (result.success == true){
                return (<Navigate to={'/homepage'} />)
        }else{
                return (<Navigate to={'/loginpage'} />)
        }
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

                    <Link to={'/homepage'}><button type="submit" onClick={handleSubmit}>Iniciar Sesion</button></Link>

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