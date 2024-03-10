import { Link } from "react-router-dom";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to={'/homepage'}>Logo</Link></li>
                        <li><Link to={'/clubpage'}>Clubes</Link></li>
                        <li><Link to={'/gamespage'}>videogames</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}