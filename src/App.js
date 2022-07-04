import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Rutas from './routes';
import Footer from "./components/footer/footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {Rutas.map((rule, i) => (
                    <Route
                        key={i}
                        path={rule.path}
                        element={<rule.ruta />}>
                        
                    </Route>
                ))}
            </Routes>
            <Footer />
        </Router>
        
    );
}

export default App;
