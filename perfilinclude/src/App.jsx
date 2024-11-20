import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Tela1 from './tela1.jsx';
import Tela2 from './tela2.jsx';
import Tela3 from './tela3.jsx';
import Tela4 from './tela4.jsx';


function App() {
  return (
    <Router>
      <Routes>
        {/* Rota padrão que redireciona para Tela1 */}
        <Route path="/" element={<Navigate to="/tela1.jsx" />} />
        
        <Route path="/tela1.jsx" element={<Tela1 />} />
        <Route path="/tela2.jsx" element={<Tela2 />} />
        <Route path="/tela3.jsx" element={<Tela3 />} />
        <Route path="/tela4.jsx" element={<Tela4 />} />
       
       
      </Routes>
    </Router>
  );
}

export default App;

