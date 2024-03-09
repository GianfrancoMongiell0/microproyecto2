import { Link } from "react-router-dom"
import LoginPage from "../LoginPage/LoginPage"

function App() {
  return (
    <><h1>Welcome to Secret Arcade</h1>
    <Link to={'/loginpage'}> Login </Link>
    <Link to={'/registerpage'}>Register</Link>
    </>

  )
}

export default App