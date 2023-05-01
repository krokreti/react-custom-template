import { createBrowserRouter } from "react-router-dom";
import Dashboard from '../pages/Dashboard/Dashboard';
import Details from '../pages/Details/Details';
import App from "../App";
import ErrorPage from "../pages/Error/ErrorPage";
import OccupationArea from "../pages/OccupationArea/OccupationArea";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />

            },
            {
                path: 'detalhes-aeronave/:id',
                element: <Details />
            },
        ]
    },
    {
        path: '/area-atuacao',
        element: <App />,
        children: [
            {
                index: true,
                element: <OccupationArea />
            }
        ]
    }
])