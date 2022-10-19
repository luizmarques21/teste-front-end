import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BuscarVideos from 'pages/BuscarVideos';
import Login from './pages/Login';

const router = createBrowserRouter([
    {path: '/', element: <Login />},
    {path: 'buscarVideos', element: <BuscarVideos />}
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}