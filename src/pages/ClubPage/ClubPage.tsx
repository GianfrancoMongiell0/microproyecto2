import { Link } from "react-router-dom";
import HomeLayout from "../../Layaout/HomeLayout";
import CardClub from "../../components/CardClub";



export default function GamesPage() {


    return (
        <HomeLayout>
            <div>
                <h2>Lista de Clubes</h2>
                <CardClub nombre={""} descripcion={""} >
                </CardClub>
            </div>

        </HomeLayout>
    )
}