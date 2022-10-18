import BuscarVideos from 'pages/BuscarVideos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './components/PaginaPadrao';
import Login from './pages/Login';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Login />} />
                        <Route path='/buscarVideos' element={<BuscarVideos/>} />
                    </Route>
                </Routes>
            </Router>
        </main>
    )
}