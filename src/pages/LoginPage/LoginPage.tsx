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