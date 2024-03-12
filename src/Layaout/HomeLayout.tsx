import { Link } from "react-router-dom";
import './HomeLayout.css'


interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li className="Navbar"><Link to={'/homepage'}>Perfil</Link></li>
                        <li className="Navbar"><Link to={'/clubpage'}>Clubes</Link></li>
                        <li className="Navbar"><Link to={'/gamespage'}>Videogames</Link></li>
                    </ul>

                    
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}