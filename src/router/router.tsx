import { createBrowserRouter } from 'react-router-dom';
import App from '../pages/App/App';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ProtectedRoute from './ProtectedRoute';
import ClubPage from '../pages/ClubPage/ClubPage';
import GamesPage from '../pages/GamesPage/GamesPage';
import AdminPages from '../pages/AdminPages/AdminPages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/',
        element: <ProtectedRoute />,
        children: [
            {
                path: '/homepage',
                element: <HomePage />,
            },{
                path: '/clubpage',
                element: <ClubPage />
            },{
                path: '/gamespage',
                element: <GamesPage />
            
            },{
                path: '/creategames',
                element: <AdminPages />
            }
        ]
    },
    {
        path: '/loginpage',
        element: <LoginPage />
    }, {
        path: '/registerpage',
        element: <RegisterPage />
    }
])



