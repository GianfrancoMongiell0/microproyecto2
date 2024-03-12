import { Link } from "react-router-dom";
import HomeLayout from "../../Layaout/HomeLayout";
import CardGames from "../../components/CardGames";



export default function GamesPage() {


    return (
        <HomeLayout>
            <div>
                <h2>Lista de Juegos</h2>
                <h3>Desea agregar otro juego a la lista?</h3>
                <Link to={'/creategames'}><button>Crea otro juego</button></Link>
                <CardGames />
            </div>

        </HomeLayout>
    )
}
