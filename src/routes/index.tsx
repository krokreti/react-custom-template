import { createBrowserRouter } from "react-router-dom";
import Dashboard from '../pages/Dashboard/Dashboard';
import Details from '../pages/Details/Details';
import App from "../App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
    }
])