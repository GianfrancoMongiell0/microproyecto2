import HomeLayout from "../../Layaout/HomeLayout";
import CardGames from "../../components/CardGames";



export default function GamesPage() {


    return (
        <HomeLayout>
            <div>
                <h2>Lista de Juegos</h2>
                
                <CardGames titulo={""} descripcion={""} genero={""} />
            </div>

        </HomeLayout>
    )
}
