import HomeLayout from "../../Layaout/HomeLayout";
import './HomePage.css';
import { Link } from "react-router-dom";



export default function Dashboard() {
  return (
    <HomeLayout>
      <div>
        <h2> Bienvenido a tu Perfil</h2>
        <p>Imagen del pana</p>
        <p>Nombre del pana</p>
        <p>Correo del pana</p>
        <p>Clubes del pana</p>
        <p>Videojuegos del pana</p>
        <div className="separar">
          <button >Editar Perfil</button>
        </div><div className="separar">
          <Link to={'/'}><button type="submit" >Cerrar Sesion</button></Link>
        </div>
      </div>
    </HomeLayout>
  )
}

