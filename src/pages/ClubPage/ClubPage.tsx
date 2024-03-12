import { Link } from "react-router-dom";
import HomeLayout from "../../Layaout/HomeLayout";
import CardClub from "../../components/CardClub";



export default function GamesPage() {


    return (
        <HomeLayout>
            <div>
                <h2>Lista de Clubes</h2>
                <h3>Deseas agregar un club?</h3>
                <Link to={'/createclub'}><button>Crea otro club</button></Link>
                <CardClub nombre={""} descripcion={""} >
                </CardClub>
            </div>

        </HomeLayout>
    )
}