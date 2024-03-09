import { Link } from "react-router-dom"

function App() {
  return (

    <>
      <h1>Welcome to Secret Arcade</h1>
      <Link to={'/loginpage'}> <button>Log In</button> </Link>
      <Link to={'/registerpage'}><button>Sing up</button></Link>
    </>

  )
}

export default App