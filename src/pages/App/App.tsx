import { Link } from "react-router-dom"
import Arcade from '../../assets/Arcade.svg'
import './App.css'

export default function App() {
  return (

    <>
      <div className="form">
        <h1>Welcome to Secret Arcade</h1>
        <img src={Arcade} alt="" className="svg" />
        <div className="botones">
          <Link to={'/loginpage'}> <button className="boton">Log In</button> </Link>
          <Link to={'/registerpage'}><button className="boton">Sing up</button></Link>
        </div>
      </div>
    </>

  )
}
