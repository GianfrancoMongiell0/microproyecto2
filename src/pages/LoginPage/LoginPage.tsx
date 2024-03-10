<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom'; // Si estás usando React Router para la navegación

const LoginPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
    const password = (event.target as HTMLFormElement).elements.namedItem('password') as HTMLInputElement;
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    // Aquí puedes agregar la lógica de autenticación
  };

  const handleGoogleLogin = () => {
    console.log('Iniciar sesión con Google');
    // Aquí puedes agregar la lógica para iniciar sesión con Google
  };

  const handleTwitterLogin = () => {
    console.log('Iniciar sesión con Twitter');
    // Aquí puedes agregar la lógica para iniciar sesión con Twitter
  };

  return (
    <div className="LoginPage">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div className="alternative-login">
        <p>O inicia sesión con:</p>
        <button onClick={handleGoogleLogin}>Google</button>
        <button onClick={handleTwitterLogin}>Twitter</button>
      </div>
      <p>No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
    </div>
  );
};

export default LoginPage;
=======
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
>>>>>>> 47b62f7601667353f47e55a1bb2c37ec1ef9d99b
