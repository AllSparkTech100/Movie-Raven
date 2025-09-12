import { Route, Routes } from 'react-router-dom'
import Home from './Home';

function Pages() {
    return (
        <Routes>
            <Route path='' element={<Home />} />
        </Routes>
    )
}

export default Pages;