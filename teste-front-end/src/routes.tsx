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
                    </Route>
                </Routes>
            </Router>
        </main>
    )
}